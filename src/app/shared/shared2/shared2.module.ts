import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Shared2RoutingModule } from './shared2-routing.module';
import { AreospaceComponent } from './areospace/areospace.component';
import { ArchitechtureComponent } from './architechture/architechture.component';
import { BankingComponent } from './banking/banking.component';
import { ConstructionComponent } from './construction/construction.component';
import { EngineeringComponent } from './engineering/engineering.component';
import { FinanceComponent } from './finance/finance.component';
import { FoodIndustryComponent } from './food-industry/food-industry.component';
import { HealthcareComponent } from './healthcare/healthcare.component';
import { HumanResourcesComponent } from './human-resources/human-resources.component';
import { InformationTechnologyComponent } from './information-technology/information-technology.component';
import { LegalComponent } from './legal/legal.component';
import { MiningComponent } from './mining/mining.component';
import { OilGasComponent } from './oil-gas/oil-gas.component';
import { ScienceComponent } from './science/science.component';
import { SupplyChainComponent } from './supply-chain/supply-chain.component';


@NgModule({
  declarations: [
    AreospaceComponent,
    ArchitechtureComponent,
    BankingComponent,
    ConstructionComponent,
    EngineeringComponent,
    FinanceComponent,
    FoodIndustryComponent,
    HealthcareComponent,
    HumanResourcesComponent,
    InformationTechnologyComponent,
    LegalComponent,
    MiningComponent,
    OilGasComponent,
    ScienceComponent,
    SupplyChainComponent
  ],
  imports: [
    CommonModule,
    Shared2RoutingModule
  ]
})
export class Shared2Module { }
