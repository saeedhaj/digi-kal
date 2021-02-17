import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListLaptopComponent } from "./list-laptop.component";

const routes: Routes = [
  {
    path:'',
    component:ListLaptopComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListLaptopRoutingModule { }
