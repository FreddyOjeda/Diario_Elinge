import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HistoryComponent } from './components/history/history.component';
import { InfoComponent } from './components/info/info.component';
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { HomeHistoryComponent } from './components/home-history/home-history.component';
import { HomeInfoComponent } from './components/home-info/home-info.component';

const routes: Routes = [
  {path:'', component: DashboardComponent},
  {path:'profile', component: ProfileComponent},
  {path:'trayectory', component: HistoryComponent},
  {path:'info', component: InfoComponent},
  {path:'carrousel', component:CarrouselComponent},
  {path:'HI', component:HomeInfoComponent},
  {path:'HH', component:HomeHistoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
