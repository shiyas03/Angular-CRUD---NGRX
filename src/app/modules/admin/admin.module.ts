import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboradComponent } from './dashborad/dashborad.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { StoreModule } from '@ngrx/store';
import { userReducer } from '../store/user.reducer';
import { userEffects } from '../store/user.effects';
import { EffectsModule } from '@ngrx/effects';
import { NewUserComponent } from './new-user/new-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';


@NgModule({
  declarations: [
    DashboradComponent,
    HeaderComponent,
    LoginComponent,
    NewUserComponent,
    EditUserComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature('users',userReducer),
    EffectsModule.forFeature([userEffects])
  ]
})
export class AdminModule { }
