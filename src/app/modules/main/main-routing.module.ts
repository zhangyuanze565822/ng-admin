import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{
  path: '',
  component: MainComponent,
  children: [
    { path: 'home', component: HomeComponent },
    { path: 'system-setting', loadChildren: () => import('./setting/setting.module').then(m => m.SettingModule) },
    { path: 'system-manager', loadChildren: () => import('./system-manager/system-manager.module').then(m => m.SystemManagerModule) },
    { path: '', redirectTo: "home", pathMatch: "full" },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
