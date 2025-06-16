import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

interface ToastMessage {
  message: string;
  loading: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private toastSubject = new Subject<ToastMessage>();
  toast$ = this.toastSubject.asObservable();

  showLoading(message: string) {
    this.toastSubject.next({ message, loading: true });
  }

  showSuccess(message: string) {
    this.toastSubject.next({ message, loading: false });
  }
}