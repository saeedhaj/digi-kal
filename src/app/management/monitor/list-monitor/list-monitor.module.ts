import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListMonitorRoutingModule } from './list-monitor-routing.module';
import { ListMonitorComponent } from './list-monitor.component';


@NgModule({
  declarations: [ListMonitorComponent],
  imports: [
    CommonModule,
    ListMonitorRoutingModule
  ]
})
export class ListMonitorModule { }
