import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { UsersListComponent } from './components/users-list/users-list.component';

import { UsersRoutingModule } from './users-routing.module';
import { SharedModule } from './../../../shared/shared.module';
import { UsersViewComponent } from './components/users-view/users-view.component';
import { UsersFormComponent } from './components/users-form/users-form.component';

@NgModule({
  declarations: [
    UsersListComponent,
    UsersFormComponent,
    UsersViewComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    SharedModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
