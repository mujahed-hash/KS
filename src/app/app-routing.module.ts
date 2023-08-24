import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:"full"},
  {path:'home', component:HomeComponent},
  {
    path:'', loadChildren:()=>import('./shared/shared.module').then(mod=>mod.SharedModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true, scrollPositionRestoration: 'top',
  scrollOffset:[0,0]} )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
