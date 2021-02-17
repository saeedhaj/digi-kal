import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementRoutingModule } from './management-routing.module';
import { ManagementComponent } from "./management.component";
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [ManagementComponent],
  imports: [
    CommonModule,
    ManagementRoutingModule,
    FlexLayoutModule  ,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  
  ]
})
export class ManagementModule { }
