import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzTableModule } from 'ng-zorro-antd/table';
import { TableComponent } from './components/table/table.component';


@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    NzTableModule,
  ],
  exports: [TableComponent]
})
export class SharedModule { }
