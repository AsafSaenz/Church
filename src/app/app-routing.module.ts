import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';


const routes: Routes =[
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  { path: 'home',             component: HomeComponent },
  // { path: 'user-profile',     component: ProfileComponent },
  // { path: 'signup',           component: SignupComponent },
  { path: 'landing',          component: LandingComponent },
  // { path: 'nucleoicons',      component: NucleoiconsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
