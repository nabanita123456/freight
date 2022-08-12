
import { MainRoutingModule } from './main-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

const materialModules = [MatIconModule];
@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    materialModules,
    MainRoutingModule
  ],
  exports: [
    materialModules
  ]
})
export class MainModule { }
