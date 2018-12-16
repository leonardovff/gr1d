import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {
    path: 'login', 
    component: LoginComponent, 
    canActivate: [LoginGuard]
  },
  {
    path: '',
    loadChildren: './modules/main/main.module#MainModule',
    canActivate: [AuthGuard],
    pathMatch: 'prefix',
  },
  { path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
