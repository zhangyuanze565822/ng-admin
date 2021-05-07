import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemManagerRoutingModule } from './system-manager-routing.module';
import { UserManagerComponent } from './pages/user-manager/user-manager.component';
import { ExportListComponent } from './pages/export-list/export-list.component';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    UserManagerComponent,
    ExportListComponent
  ],
  imports: [
    CommonModule,
    SystemManagerRoutingModule,
    SharedModule
  ]
})
export class SystemManagerModule { }
