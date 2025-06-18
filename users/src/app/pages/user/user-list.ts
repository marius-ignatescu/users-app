import { Component } from '@angular/core';
import { UserListComponent } from "../../components/user-list-component/user-list-component";
import { ContextualNavigationBar } from "../../components/contextual-navigation-bar/contextual-navigation-bar";
import { RouterModule } from '@angular/router';
import { ToastService } from '../../services/toast-service';
import { UsersStore } from '../../store/user-store';
import { UserItem } from '../../model/user.type';

@Component({
  selector: 'app-user',
  imports: [UserListComponent, ContextualNavigationBar, RouterModule],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css'
})
export class User {

  constructor(
    private toast: ToastService,
    private store: UsersStore) { }

  openFilePicker(): void {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';

    input.onchange = (event: Event) => this.onImportUsers(event);

    input.click();
  }

  onImportUsers(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (!input.files?.length) return;

    const file = input.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      try {
        const content = reader.result as string;
        const parsed = JSON.parse(content);

        // Validate imported file
        if (!Array.isArray(parsed)) throw new Error('Invalid JSON format');

        const validUsers: UserItem[] = [];
        const invalidUsers: { index: number; reason: string; raw: any }[] = [];

        parsed.forEach((item, index) => {
          const isValid =
            item &&
            typeof item.id === 'number' &&
            typeof item.name === 'string' &&
            typeof item.email === 'string' &&
            typeof item.phone === 'string' &&
            typeof item.role === 'string';

          if (isValid) {
            validUsers.push(item);
          } else {
            invalidUsers.push({
              index,
              reason: 'Missing or invalid fields',
              raw: item
            });
          }
        });

        if (validUsers.length > 0) {
          this.store.loadUsers(validUsers);
          this.toast.showSuccess(`Imported ${validUsers.length} users.`);
        }

        if (invalidUsers.length > 0) {
          const errorSummary = invalidUsers
            .map(u => `Row ${u.index + 1}: ${u.reason}`)
            .join('\n');
          this.toast.showSuccess(
            `${invalidUsers.length} users failed to import:\n${errorSummary}`
          );
          console.warn('Failed users:', invalidUsers);
        }

      } catch (err) {
        this.toast.showSuccess('Failed to import users. Invalid file format.');
      }
    };

    reader.readAsText(file);
  }
}