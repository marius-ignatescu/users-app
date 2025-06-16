import { Component, inject, OnInit, signal } from '@angular/core';
import { UsersService } from '../services/users-service';
import { UserItem } from '../model/user.type';
import { catchError } from 'rxjs';
import { TableComponent } from "../components/table/table";
import { DialogService } from '../services/dialog-service';

@Component({
  selector: 'app-user',
  imports: [TableComponent],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css'
})
export class User implements OnInit {
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
