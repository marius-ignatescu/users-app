import { NgFor, NgIf } from '@angular/common';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  imports: [NgFor, NgIf],
  templateUrl: './table.html',
  styleUrl: './table.css'
})
export class TableComponent implements OnInit {
  @Input() HeadArray: any[] = [];
  @Input() GridArray: any[] = [];
  @Input() Route: string = '';
  @Output() onDelete = new EventEmitter<any>();
  dataSource$: any;
  constructor(private router: Router) { }
  ngOnInit(): void {
  }
  delete(item: any) {
    this.onDelete.emit(item);
  }
  showDetails(id: string): void {
    this.router.navigate([this.Route, id]);
  }
}
