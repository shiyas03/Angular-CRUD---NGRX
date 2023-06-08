import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboradComponent } from './dashborad/dashborad.component';
import { NewUserComponent } from './new-user/new-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { LoginComponent } from './login/login.component';
import { AdminAuthGuard } from 'src/app/guards/admin-auth.guard';


const routes: Routes = [
  {
    path: '', component: DashboradComponent
  },
  {
    path: 'new', component: NewUserComponent
  },
  {
    path: 'edit', component: EditUserComponent
  },
  {
    path: 'login', component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
