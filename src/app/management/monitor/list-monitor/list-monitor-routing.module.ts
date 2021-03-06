import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListMonitorComponent } from "./list-monitor.component";

const routes: Routes = [
  {
    path:'',
    component:ListMonitorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListMonitorRoutingModule { }
