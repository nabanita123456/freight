import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FreightDashboardComponent } from './freight-dashboard/freight-dashboard.component';



const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: FreightDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
