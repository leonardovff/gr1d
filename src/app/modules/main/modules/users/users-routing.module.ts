import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersListComponent } from './components/users-list/users-list.component';
import { UsersViewComponent } from './components/users-view/users-view.component';
import { UsersFormComponent } from './components/users-form/users-form.component';

const routes: Routes = [
  {
    path: '', 
    component: UsersListComponent,
    children: [
      {
        path: ':id/edit',
        component: UsersFormComponent
      },
      {
        path: ':id',
        component: UsersViewComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {

}