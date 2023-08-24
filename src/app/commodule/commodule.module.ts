import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { BrowserModule } from '@angular/platform-browser';
import {SidebarModule} from 'primeng/sidebar';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { ButtonModule } from 'primeng/button';

const UXModule= [SidebarModule]

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    UXModule,
    RouterModule,
    ButtonModule
  ],
  exports:[
    NavbarComponent,
    RouterModule

  ]
})
export class CommoduleModule { }
