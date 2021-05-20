import { Component, OnInit, ChangeDetectionStrategy, Input, Output, OnDestroy, EventEmitter, ViewChild, ElementRef, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { NzResizeObserver } from 'ng-zorro-antd/core/resize-observers';
import { headerItemType,btnObjType } from './table';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() tableHeader: Array<headerItemType> = [];
  @Input() tableData: Array<any> = [];
  @Input() pageSize = 10;
  @Input() pageSizeOptions = [10, 20, 50, 100];
  @Input() currentPage = 1;
  @Input() totalNum = 0;
  @ViewChild('table_box', { static: false }) table_box!: ElementRef;
  @Output() pageSizeChangeEvent = new EventEmitter<number>();
  @Output() currentPageChangeEvent = new EventEmitter<number>();
  @Output() dialogClickEvent = new EventEmitter<btnObjType>();

  scrollObj = { x: "0px", y: "0px" };
  destroy$ = new Subject();

  constructor(private nzResizeObserver: NzResizeObserver, private cdr: ChangeDetectorRef) { }
  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.nzResizeObserver.observe(document.body).pipe(debounceTime(200), takeUntil(this.destroy$)).subscribe(() => {
      this.handleTableResize();
    });
  }
  handleTableOperateClick(item:btnObjType){
    this.dialogClickEvent.emit(item);
  }
  handleTableResize() {
    const element: HTMLElement = this.table_box.nativeElement;
    const eleStyleTop = element.getBoundingClientRect().top;
    const viewHeight = document.documentElement.clientHeight || document.body.clientHeight;
    const tableScrollHeight = viewHeight - eleStyleTop - 64 - 55 - 15 - 15 + 'px';
    this.scrollObj = { x: "100%", y: tableScrollHeight };
    this.cdr.detectChanges();
  }
  handlePageSizeChange(pageSize: number) {
    this.pageSizeChangeEvent.emit(pageSize);
  }
  handleCurrentChange(currentPage: number) {
    this.currentPageChangeEvent.emit(currentPage);
  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
