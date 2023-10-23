import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavComponent } from './layout/nav/nav.component';
import { HeaderComponent } from './main/header/header.component';
import { HomeComponent } from './main/home/home.component';
import { AboutMeComponent } from './main/about-me/about-me.component';
import { TherapyComponent } from './main/therapy/therapy.component';
import { PracticeComponent } from './main/practice/practice.component';
import { ConnectComponent } from './main/connect/connect.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    HomeComponent,
    AboutMeComponent,
    TherapyComponent,
    PracticeComponent,
    ConnectComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'about-me', component: AboutMeComponent },
      { path: 'therapy', component: TherapyComponent },
      { path: 'practice', component: PracticeComponent },
      { path: 'connect', component: ConnectComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'home', pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
