import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-error-dialog',
  imports: [MatDialogModule],
  templateUrl: './error-dialog.html',
  styleUrl: './error-dialog.css'
})
export class ErrorDialog implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ErrorDialog>) {}

  ngOnInit(): void {
  }

  closeDialog(){
    this.dialogRef.close(false);
  }
}
