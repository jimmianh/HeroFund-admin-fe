import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CampaignManagementRoutingModule } from './campaign-management-routing.module';
import { CampaignManagementPageComponent } from './campaign-management-page/campaign-management-page.component';
import { CampaignManagementFormComponent } from './campaign-management-form/campaign-management-form.component';
import {IconModule} from "@coreui/icons-angular";
import {CardModule, GridModule, TableModule} from "@coreui/angular";


@NgModule({
  declarations: [
    CampaignManagementPageComponent,
    CampaignManagementFormComponent
  ],
  imports: [
    CommonModule,
    CampaignManagementRoutingModule,
    IconModule,
    TableModule,
    CardModule,
    GridModule
  ]
})
export class CampaignManagementModule { }
