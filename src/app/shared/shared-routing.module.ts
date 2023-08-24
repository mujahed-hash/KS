import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CyberComponent } from './cyber/cyber.component';
import { DirectComponent } from './direct/direct.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { SoftwareComponent } from './software/software.component';
import { StaffingComponent } from './staffing/staffing.component';
import { TermsComponent } from './terms/terms.component';

const routes: Routes = [
  {path:'software', component:SoftwareComponent},
  {path:'cyber-security', component:CyberComponent},
  {path:'staffing', component:StaffingComponent},
  {path:'direct-hire', component:DirectComponent},
  {
    path:'', loadChildren:()=>import('./shared2/shared2.module').then(mod=>mod.Shared2Module)
  },
  {path:'terms-of-use', component:TermsComponent},
  {path:'privacy-policy', component:PrivacyComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
