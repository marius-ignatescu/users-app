import { ErrorHandler, Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LogErrorService } from './log-error-service';
import { LogError } from '../model/logerror';
import * as StackTrace from 'stacktrace-js';
import { ErrorDialog } from '../components/error-dialog/error-dialog';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class GlobalErrorHandlerService implements ErrorHandler {

  constructor(private dialog: MatDialog) { }

  router = inject(Router);
  logErrorService = inject(LogErrorService);
  logError: LogError = {
    Message: '',
    Time: '',
    Route: '',
    User: ''
  };

  handleError(error: any): void {
    // Send the log to the server
    StackTrace.fromError(error).then(stackframes => {
      const stringifiedStack = stackframes
        .map(sf => sf.toString())
        .join('\n');

      this.logError.Message = stringifiedStack;
      this.logError.Time = new Date().toDateString();
      this.logError.Route = this.router.url;
      this.logError.User = 'user';
      this.logErrorService.logError(this.logError);
      //this.router.navigate(['/error-page']);

      this.displayError(this.logError);
    });
  }

  displayError(error: any): void {
    // Display error to the user
    this.dialog.open(ErrorDialog, {
      panelClass: 'confirm-dialog-container',
      disableClose: true,
      data: {
        message: error.Message,
        title: "Error"
      }
    });
  }
}
