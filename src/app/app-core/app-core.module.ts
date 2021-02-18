import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppCoreRoutingModule } from './app-core-routing.module';
import { AppCoreComponent } from './app-core.component';
import { DataTableModule } from "./data-table/data-table.module";


@NgModule({
  declarations: [AppCoreComponent],
  imports: [
    CommonModule,
    AppCoreRoutingModule,
    DataTableModule,
  
  ],
  exports: [DataTableModule]
})
export class AppCoreModule { }