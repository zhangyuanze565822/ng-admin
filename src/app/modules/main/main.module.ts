import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzIconModule } from 'ng-zorro-antd/icon';


@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    // mian and menu dependency
    NzMenuModule,
    NzToolTipModule,
    NzLayoutModule,
    NzIconModule,
    RouterModule.forChild([]),
    //
    SharedModule,
  ]
})
export class MainModule { }
