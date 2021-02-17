import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListLaptopRoutingModule } from './list-laptop-routing.module';
import { ListLaptopComponent } from './list-laptop.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {AppCoreModule} from 'src/app/app-core/index'; 

@NgModule({
  declarations: [ListLaptopComponent],
  imports: [
    CommonModule,
    ListLaptopRoutingModule,
    FlexLayoutModule  ,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    AppCoreModule    

    
  ]
})
export class ListLaptopModule { }
