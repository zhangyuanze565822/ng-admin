import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BaseComponent {
  listOfData = [];
  totalNum = 0;
  pageSize = 20;
  currentPage = 1;
  constructor() { }

  handlePageSizeChange(pageSize: number) {
    this.pageSize = pageSize;
    this.fetchData()
  }
  handleCurrentChange(currentPage: number) {
    this.currentPage = currentPage;
    this.fetchData()
  }
  fetchData() { }

}
