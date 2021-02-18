import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppChatRoutingModule } from './app-chat-routing.module';
import { AppChatComponent } from './app-chat.component';
import {MatSidenavModule} from '@angular/material/sidenav';


@NgModule({
  declarations: [AppChatComponent],
  imports: [
    CommonModule,
    AppChatRoutingModule,
    MatSidenavModule
  ]
})
export class AppChatModule { }
