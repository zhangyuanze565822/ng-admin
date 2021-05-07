import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserManagerComponent } from './pages/user-manager/user-manager.component';
import { ExportListComponent } from './pages/export-list/export-list.component';


const routes: Routes = [
  { path: 'user-manager', component: UserManagerComponent },
  { path: 'export-list', component: ExportListComponent },
  { path: '', redirectTo: "user-manager", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemManagerRoutingModule { }
