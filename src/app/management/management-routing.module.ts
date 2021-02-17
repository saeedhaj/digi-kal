import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagementComponent } from "./management.component";

const routes: Routes = [
  {
    path:'',
    component:ManagementComponent,
    children:[
      {
        path: '',
        redirectTo:'laptop',
      },
      {
        path: 'laptop',
        loadChildren:()=>import('./laptop/laptop.module').then((m)=>m.LaptopModule),
      },
      {
        path: 'monitor',
        loadChildren:()=>import('./monitor/monitor.module').then((m)=>m.MonitorModule),
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementRoutingModule { }