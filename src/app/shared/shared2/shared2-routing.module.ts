import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchitechtureComponent } from './architechture/architechture.component';
import { AreospaceComponent } from './areospace/areospace.component';
import { BankingComponent } from './banking/banking.component';
import { ConstructionComponent } from './construction/construction.component';
import { EngineeringComponent } from './engineering/engineering.component';
import{FinanceComponent} from './finance/finance.component'
import { FoodIndustryComponent } from './food-industry/food-industry.component';
import { HealthcareComponent } from './healthcare/healthcare.component';
import { HumanResourcesComponent } from './human-resources/human-resources.component';
import { InformationTechnologyComponent } from './information-technology/information-technology.component';
import { LegalComponent } from './legal/legal.component';
import { MiningComponent } from './mining/mining.component';
import { OilGasComponent } from './oil-gas/oil-gas.component';
import { ScienceComponent } from './science/science.component';
import { SupplyChainComponent } from './supply-chain/supply-chain.component';

const routes: Routes = [
  {path:'aero-space', component:AreospaceComponent},
  {path:'architecture-design', component:ArchitechtureComponent},
  {path:'banking', component:BankingComponent},
  {path:'construction', component:ConstructionComponent},
  {path:'engineering', component:EngineeringComponent},
  {path:'finance-accounting', component:FinanceComponent},
  {path:'food-industry', component:FoodIndustryComponent},
  {path:'healthcare-medical', component:HealthcareComponent},
  {path:'human-resources', component:HumanResourcesComponent},
  {path:'information-technology', component:InformationTechnologyComponent},
  {path:'legal', component:LegalComponent},
  {path:'mining-minerals', component:MiningComponent},
  {path:'oil-gas', component:OilGasComponent},
  {path:'science', component:ScienceComponent},
  {path:'supply-chain', component:SupplyChainComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Shared2RoutingModule { }
