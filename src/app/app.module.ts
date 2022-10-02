import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { materialize } from 'rxjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';


import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HistoryComponent } from './components/history/history.component';
import { InfoComponent } from './components/info/info.component';
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { HomeInfoComponent } from './components/home-info/home-info.component';
import { HomeHistoryComponent } from './components/home-history/home-history.component';


import { SwiperModule } from 'swiper/angular';
import { SlideComponent } from './components/slide/slide.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    SidenavComponent,
    ProfileComponent,
    HistoryComponent,
    InfoComponent,
    CarrouselComponent,
    HomeInfoComponent,
    HomeHistoryComponent,
    SlideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatGridListModule,
    MatButtonModule,
    MatListModule,
    SwiperModule,
    MatCardModule,
    MatStepperModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
