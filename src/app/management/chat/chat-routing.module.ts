import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from "./chat.component";

const routes: Routes = [
  {
    path:'',
    component:ChatComponent,
    children:[
      {
        path:'',
        redirectTo:'app-chat'
      },
      {
        path: 'app-chat',
        loadChildren:()=>import('./app-chat/app-chat.module').then((m)=>m.AppChatModule),
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatRoutingModule { }
