import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingRoutingModule } from './setting-routing.module';
import { MenuManagerComponent } from './pages/menu-manager/menu-manager.component';


@NgModule({
  declarations: [
    MenuManagerComponent
  ],
  imports: [
    CommonModule,
    SettingRoutingModule
  ]
})
export class SettingModule { }
