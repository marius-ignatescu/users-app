import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialog } from '../components/confirm-dialog/confirm-dialog';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }

  openConfirmationDialog(msg: string, title: string){
    return this.dialog.open(ConfirmDialog,{
      width: '350px',
      panelClass: 'confirm-dialog-container',
      disableClose: true,
      data: {
        message : msg,
        title: title
      }
    });
  }
}
