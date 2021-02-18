import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListMonitorRoutingModule } from './list-monitor-routing.module';
import { ListMonitorComponent } from './list-monitor.component';
import { AppCoreModule } from "src/app/app-core";
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [ListMonitorComponent],
  imports: [
    CommonModule,
    ListMonitorRoutingModule,
    AppCoreModule,
    FlexLayoutModule  ,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    
  ]
})
export class ListMonitorModule { }
