import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddMonitorRoutingModule } from './add-monitor-routing.module';
import { AddMonitorComponent } from './add-monitor.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FlexLayoutModule } from "@angular/flex-layout";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [AddMonitorComponent],
  imports: [
    CommonModule,
    AddMonitorRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ]
})
export class AddMonitorModule { }
