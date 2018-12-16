import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { UsersListComponent } from './components/users-list/users-list.component';

import { UsersRoutingModule } from './users-routing.module';
import { SharedModule } from './../../../shared/shared.module';

@NgModule({
  declarations: [
    UsersListComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    SharedModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
