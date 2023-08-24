import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServicesComponent } from './services/services.component';
import {MatCardModule} from '@angular/material/card'; 
import {MatButtonModule} from '@angular/material/button'; 
import {MatGridListModule} from '@angular/material/grid-list'; 
import {CarouselModule} from 'primeng/carousel';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import {SidebarModule} from 'primeng/sidebar';
import {ButtonModule} from 'primeng/button';
import { SharedModule } from './shared/shared.module';
import { CommoduleModule } from './commodule/commodule.module';
const UXModule= [MatCardModule,
  MatButtonModule,MatGridListModule,SidebarModule,ButtonModule,
  CarouselModule]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    UXModule,
    NgbModule,
    SharedModule,
    CommoduleModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[
    MatButtonModule,
  ]
})
export class AppModule { }
