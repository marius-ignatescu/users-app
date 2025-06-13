import { NgFor, NgIf } from '@angular/common';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/table';

@Component({
  selector: 'app-table',
  imports: [NgFor, NgIf],
  templateUrl: './table.html',
  styleUrl: './table.css'
})
export class TableComponent implements OnInit {
  @Input() HeadArray :any[] = [];
  @Input() GridArray :any[] = []; 
  @Output() onDelete = new EventEmitter<any>();
dataSource$: any;
  constructor() { }
  ngOnInit(): void {
  }
  delete(item: any) {
    this.onDelete.emit(item);
  }
}
