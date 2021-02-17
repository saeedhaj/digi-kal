import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddLaptopRoutingModule } from './add-laptop-routing.module';
import { AddLaptopComponent } from './add-laptop.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FlexLayoutModule } from "@angular/flex-layout";
import { ReactiveFormsModule } from "@angular/forms";


@NgModule({
  declarations: [AddLaptopComponent],
  imports: [
    CommonModule,
    AddLaptopRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ]
})
export class AddLaptopModule { }
