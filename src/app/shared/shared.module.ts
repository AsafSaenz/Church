import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { NavbarComponent } from './navbar/navbar.component';
import { ComponentsModule } from './components/components.module';
import { RouterModule } from '@angular/router';
import { LandingComponent } from '../landing/landing.component';
import { HomeComponent } from '../home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    LandingComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    ComponentsModule,
    RouterModule,NgbModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    LandingComponent,
    HomeComponent,
  ],
})
export class SharedModule {}
