import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss']
})
export class DynamicTableComponent implements OnInit {
  @Input() tableColoumFormat: any
  @Input() tableRowData:any;
  @Input() coLists:any;

  constructor() {

  }

  ngOnInit(): void {

    console.log("ApiData", this.tableRowData)
    console.log("tableFormat", this.tableColoumFormat)
    
  }

}
