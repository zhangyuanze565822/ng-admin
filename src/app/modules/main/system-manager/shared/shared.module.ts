import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule as parentSharedModule } from './../../shared/shared.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    parentSharedModule
  ],
  exports:[parentSharedModule]
})
export class SharedModule { }
