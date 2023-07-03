import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { FeedComponent } from './feed/feed.component';
import { ProfileComponent } from './home/profile/profile.component';
import { LandingpageComponent } from './feed/landingpage/landingpage.component';
import { TweetsComponent } from './home/tweets/tweets.component';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './home/settings/settings.component';
import { TrendsComponent } from './home/trends/trends.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    FeedComponent,
    ProfileComponent,
    LandingpageComponent,
    TweetsComponent,
    HomeComponent,
    SettingsComponent,
    TrendsComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
