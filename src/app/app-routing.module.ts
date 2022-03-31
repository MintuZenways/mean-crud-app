import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { EditComponent } from './edit/edit.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';


const routes: Routes = [
  { path:'login', component: LoginComponent} ,
  { path:'users', component: UsersComponent} ,
  { path:'edit/:id', component: EditComponent} ,
  { path: 'first', loadChildren: () => import('./first/first.module').then(m => m.FirstModule) },
  { path: 'second', loadChildren: () => import('./second/second.module').then(m => m.SecondModule), canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
