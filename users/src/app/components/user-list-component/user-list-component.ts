import { Component, inject, OnInit, signal } from '@angular/core';
import { TableComponent } from "../table/table";
import { catchError } from 'rxjs';
import { UsersService } from '../../services/users-service';
import { DialogService } from '../../services/dialog-service';
import { UserItem } from '../../model/user.type';

@Component({
  selector: 'app-user-list-component',
  imports: [TableComponent],
  templateUrl: './user-list-component.html',
  styleUrl: './user-list-component.css'
})
export class UserListComponent implements OnInit {
  usersService = inject(UsersService);
  dialogService = inject(DialogService);
  userItems = signal<Array<UserItem>>([]);

  headArray = [
    {'Head': 'User Name', 'FieldName': 'name' },
    {'Head': 'Email', 'FieldName': 'email' },
    {'Head': 'Contact', 'FieldName': 'phone' },
    {'Head': 'Website', 'FieldName': 'website' } ,
    {'Head': 'Action', 'FieldName': '' } 
  ];

  ngOnInit(): void {
    this.usersService.getUsers().pipe(
      catchError((err) => {
        console.log(err);
        throw err;
      })
    ).subscribe((results) => {
      this.userItems.set(results);
    });
  }

  deleteUser(item: any) {
    this.dialogService.openConfirmationDialog('Do you want to delete this user?', 'Confirmation')
    .afterClosed().subscribe(res => {
      if (res){
        this.usersService.deleteUser(item);
        // todo: call here some notification service
      }
    });
  }
}
