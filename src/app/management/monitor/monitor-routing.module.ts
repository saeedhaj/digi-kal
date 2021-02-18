import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonitorComponent } from "./monitor.component";

const routes: Routes = [
  {
    path:'',
    component:MonitorComponent,
    children:[
      {
        path:'',
        redirectTo:'list-monitor'
      },
      {
        path: 'list-monitor',
        loadChildren:()=>import('./list-monitor/list-monitor.module').then((m)=>m.ListMonitorModule),
      },
      {
        path: 'add-monitor',
        loadChildren:()=>import('./add-monitor/add-monitor.module').then((m)=>m.AddMonitorModule),
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MonitorRoutingModule { }
