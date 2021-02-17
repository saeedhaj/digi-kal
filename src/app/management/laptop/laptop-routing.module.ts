import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaptopComponent } from "./laptop.component";

const routes: Routes = [
  {
    path:'',
    component:LaptopComponent,
    children:[
      {
        path:'',
        redirectTo:'list-laptop'
      },
      {
        path: 'list-laptop',
        loadChildren:()=>import('./list-laptop/list-laptop.module').then((m)=>m.ListLaptopModule),
      },
      {
        path: 'add-laptop',
        loadChildren:()=>import('./add-laptop/add-laptop.module').then((m)=>m.AddLaptopModule),
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LaptopRoutingModule { }
