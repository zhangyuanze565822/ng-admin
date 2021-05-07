import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuManagerComponent } from './pages/menu-manager/menu-manager.component';

const routes: Routes = [
  { path: 'menu-manager', component: MenuManagerComponent },
  { path: '', redirectTo: "menu-manager", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingRoutingModule { }
