import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListLaptopRoutingModule } from './list-laptop-routing.module';
import { ListLaptopComponent } from './list-laptop.component';


@NgModule({
  declarations: [ListLaptopComponent],
  imports: [
    CommonModule,
    ListLaptopRoutingModule
  ]
})
export class ListLaptopModule { }
