import { Component } from '@angular/core';
import { UserListComponent } from "../components/user-list-component/user-list-component";
import { ContextualNavigationBar } from "../components/contextual-navigation-bar/contextual-navigation-bar";
import { RouterModule } from '@angular/router';
import { ToastService } from '../services/toast-service';
import { UsersStore } from '../store/user-store';

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

        const validUsers = parsed.filter(
          u => u.id && u.name && u.email && u.role
        );

        if (validUsers.length === 0) {
          this.toast.showSuccess('No valid users found in file.');
          return;
        }

        this.store.loadUsers(validUsers);
        this.toast.showSuccess(`Imported ${validUsers.length} users!`);
      } catch (err) {
        this.toast.showSuccess('Failed to import users. Invalid file format.');
      }
    };

    reader.readAsText(file);
  }
}