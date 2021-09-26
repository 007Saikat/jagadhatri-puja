import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { LoginService } from './services/login.service';
import { HomeComponent } from './home/home.component';
import { AuthguardService } from './services/authguard.service';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [LoginService,AuthguardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
