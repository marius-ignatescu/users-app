import { Component, inject, OnInit, signal } from '@angular/core';
import { TableComponent } from "../table/table";
import { catchError } from 'rxjs';
import { UsersService } from '../../services/users-service';
import { DialogService } from '../../services/dialog-service';
import { UserItem } from '../../model/user.type';
import { ToastService } from '../../services/toast-service';
import { UsersStore } from '../../store/user-store';

@Component({
  selector: 'app-user-list-component',
  imports: [TableComponent],
  templateUrl: './user-list-component.html',
  styleUrl: './user-list-component.css'
})
export class UserListComponent implements OnInit {
  usersService = inject(UsersService);
  dialogService = inject(DialogService);
  toastService = inject(ToastService);
  //userItems = signal<Array<UserItem>>([]);
  store = inject(UsersStore);
  userItems = this.store.users;
  route = "/user/";

  headArray = [
    {'Head': 'User Name', 'FieldName': 'name' },
    {'Head': 'Email', 'FieldName': 'email' },
    {'Head': 'Contact', 'FieldName': 'phone' },
    {'Head': 'Website', 'FieldName': 'website' } ,
    {'Head': 'Action', 'FieldName': '' } 
  ];

  ngOnInit(): void {
    // Check if the users list is loaded so we don't override the changes (the deletion doesn't actually happens on the server)
    if (!this.store.isLoaded()) {
      this.usersService.getUsers().pipe(
        catchError((err) => {
          console.log(err);
          throw err;
        })
      ).subscribe((results) => {
        //this.userItems.set(results);
        this.store.loadUsers(results);
      });
    }
  }

  deleteUser(item: any) {
    this.dialogService.openConfirmationDialog('Do you want to delete this user?', 'Confirmation')
    .afterClosed().subscribe(res => {
      if (res){
        this.usersService.deleteUser(item.id).subscribe({
          next: () => {
            this.toastService.showSuccess('User deleted successfully!');
            this.store.removeUser(item.id);
            // this.userItems.update(current =>
            //   current.filter(user => user.id !== item.id)
            // );
          },
          error: () => {
            this.toastService.showSuccess('Failed to delete user.');
          }
        });
      }
    });
  }
}
