import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './modules/user/home/home.component';
import { HeaderComponent } from './modules/user/header/header.component';
import { ProfileComponent } from './modules/user/profile/profile.component';
import { LoginComponent } from './modules/user/login/login.component';
import { RegistrationComponent } from './modules/user/registration/registration.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { profileReducer } from './modules/store/user.reducer';
import { userEffects } from './modules/store/user.effects';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ProfileComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    EffectsModule.forRoot([userEffects]),
    StoreModule.forRoot({ profile : profileReducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
