import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddLaptopComponent } from "./add-laptop.component";

const routes: Routes = [
  {
    path:'',
    component: AddLaptopComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddLaptopRoutingModule { }
