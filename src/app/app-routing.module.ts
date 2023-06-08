import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessAuthGuard } from './guards/user-auth.guard'

import { HomeComponent } from './modules/user/home/home.component';
import { LoginComponent } from './modules/user/login/login.component';
import { ProfileComponent } from './modules/user/profile/profile.component';
import { RegistrationComponent } from './modules/user/registration/registration.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent, canActivate: [AccessAuthGuard],
    children:
      [
        {
          path: 'profile', component: ProfileComponent
        }
      ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'admin', loadChildren: () => import('./modules/admin/admin.module').then((m) => m.AdminModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
