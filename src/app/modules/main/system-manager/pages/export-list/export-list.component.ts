import { Component, OnInit } from '@angular/core';
import { listHeader } from './table.header';
import { BaseComponent } from './../../../shared/components/base/base.component';
import { FetchDataService } from './../../services/fetch-data.service';

@Component({
  templateUrl: './export-list.component.html',
  styleUrls: ['./export-list.component.less']
})

export class ExportListComponent extends BaseComponent implements OnInit {
  listHeader = listHeader;
  constructor(private fetchUtil: FetchDataService) {
    super()
  }
  ngOnInit(): void {
    this.fetchData();
  }
  fetchData(params = {}) {
    const queryParams = Object.assign(params, { pageSize: this.pageSize, currentPage: this.currentPage })
    this.fetchUtil.getShopCount().subscribe((res: any) => {
      if (res.status === 1) {
        this.totalNum = res.count
      }
    })
    this.fetchUtil.getShopList(queryParams).subscribe((res: any) => {
      this.listOfData = res;
    });
  }

}

