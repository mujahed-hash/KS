import { NgModule } from '@angular/core';

import { SharedRoutingModule } from './shared-routing.module';
import { SoftwareComponent } from './software/software.component';
import { StaffingComponent } from './staffing/staffing.component';
import { MininavComponent } from './mininav/mininav.component';
import {MatButtonModule} from '@angular/material/button';
import { DirectComponent } from './direct/direct.component'; 
import { CommoduleModule } from '../commodule/commodule.module';
import { CommonModule } from '@angular/common';
import { Shared2Module } from './shared2/shared2.module';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';

@NgModule({
  declarations: [
    SoftwareComponent,
    StaffingComponent,
    MininavComponent,
    DirectComponent,
    PrivacyComponent,
    TermsComponent,

  ],
  imports: [
    SharedRoutingModule,
    MatButtonModule,
    CommoduleModule,
    CommonModule,
    Shared2Module
  ],
  exports:
  [
    StaffingComponent,
    SoftwareComponent,
  ]
})
export class SharedModule { }
