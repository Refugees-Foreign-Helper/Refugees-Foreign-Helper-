import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AlertModule } from 'ngx-bootstrap';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SpeechRecognitionService } from './speech-recognition.service';

//Components
import { AppComponent } from './app.component';
// import { LoginComponent } from './login/index';
import { MainComponent } from './main/main.component';
import { SignupComponent } from './signup/signup.component';
import { PostComponent } from './post/post.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { LanguageComponent } from './language/language.component';
import { TestComponent } from './test/test.component';
//import { BootstrapCompComponent } from './bootstrap-comp/bootstrap-comp.component';

const appRoutes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'login',  component: NavbarComponent },
  {path:'main', component:MainComponent},
  {path:'post', component:PostComponent},
  {path:'navbar', component:NavbarComponent},
  {path:'profile', component:ProfileComponent},
  {path:'language', component:LanguageComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    // LoginComponent,
    MainComponent,
    SignupComponent,
    PostComponent,
    NavbarComponent,
    ProfileComponent,
    LanguageComponent,
    TestComponent,
  //  BootstrapCompComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserModule,
    RouterModule.forRoot(
    appRoutes,
     { enableTracing: true })
  ],
  providers: [SpeechRecognitionService],
  bootstrap: [
  AppComponent, 
  MainComponent,
  PostComponent,
  NavbarComponent,
  ProfileComponent
  ]
})
export class AppModule { 

}
