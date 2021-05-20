import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    NzFormModule,
    NzInputModule,
    NzButtonModule,
  ]
})
export class SharedModule { }
