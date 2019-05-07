import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import {HttpClientModule} from '@angular/common/http';
import {ApiHandlerService} from './services/api-handler.service';
import {UserService} from './services/user.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


// const routes: Routes = [
//   {path: '', redirectTo = 'index', component: LoginComponent},
//   {path: 'login', component: LoginComponent},
//   {path: 'home' , component: HomeComponent}
//   ];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: 'index', component: LoginComponent},
      {path: '', component: LoginComponent},
      {path: 'home', component: HomeComponent},
      {path: 'signup', component: SignupComponent}
    ]),
  ],
  providers: [
    ApiHandlerService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
