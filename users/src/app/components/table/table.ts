import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, Input, Output, EventEmitter, OnInit, TemplateRef, ContentChild } from '@angular/core';
import { Router } from '@angular/router';
import {
  CdkTableModule,
  CdkColumnDef,
  CdkCellDef,
  CdkHeaderCellDef,
  CdkRowDef,
  CdkHeaderRowDef
} from '@angular/cdk/table';

@Component({
  selector: 'app-table',
  imports: [NgFor, NgIf, CdkTableModule, CommonModule],
  templateUrl: './table.html',
  styleUrl: './table.css'
})
export class TableComponent implements OnInit {
  @Input() HeadArray: any[] = [];
  @Input() GridArray: any[] = [];
  @Input() Route: string = '';
  //@Input() actionTemplate!: TemplateRef<any>;
  @Output() onDelete = new EventEmitter<any>();
  // Grab the <ng-template slot="actions"> from parent
  @ContentChild('actionTemplate') actionTemplate!: TemplateRef<any>;

  dataSource$: any;
  constructor(private router: Router) { }

  displayedColumns: string[] = [];

  ngOnInit(): void {
  // Generate displayedColumns based on HeadArray
    this.displayedColumns = this.HeadArray.map(h => h.FieldName || 'actions');
  }

  delete(item: any) {
    this.onDelete.emit(item);
  }

  showDetails(id: string): void {
    this.router.navigate([this.Route, id]);
  }

  trackById(index: number, item: any): any {
    return item.id;
  }
}
