import { Component, OnDestroy } from '@angular/core';
import { ToastService } from '../../services/toast-service';
import { NgIf } from '@angular/common';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-toast',
  imports: [NgIf],
  templateUrl: './toast.html',
  styleUrl: './toast.css'
})
export class ToastComponent implements OnDestroy {
  message: string = '';
  visible = false;
  loading = false;

  private sub?: Subscription;

  constructor(private toastService: ToastService) {
    this.toastService.toast$.subscribe(({ message, loading }) => {
      this.message = message;
      this.loading = loading;
      this.visible = true;

      if (!loading) {
        if (this.sub) this.sub.unsubscribe();
        this.sub = timer(3000).subscribe(() => this.visible = false);
      }
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}