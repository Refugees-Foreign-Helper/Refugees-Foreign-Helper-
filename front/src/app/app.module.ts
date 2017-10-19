import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AlertModule } from 'ngx-bootstrap';

//Components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/index';
import { MainComponent } from './main/main.component';
import { SignupComponent } from './signup/signup.component';
import { PostComponent } from './post/post.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';

const appRoutes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'login',  component: LoginComponent },
  {path:'main', component:MainComponent},
  {path:'post', component:PostComponent},
  {path:'navbar', component:NavbarComponent},
  {path:'profile', component:ProfileComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    SignupComponent,
    PostComponent,
    NavbarComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot(),
     RouterModule.forRoot(
      appRoutes,
      { enableTracing: true })
  ],
  providers: [],
  bootstrap: [
  AppComponent, 
  MainComponent,
  PostComponent,
  NavbarComponent
  ]
})
export class AppModule { 
}
