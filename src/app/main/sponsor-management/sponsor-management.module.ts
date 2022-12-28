import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SponsorManagementRoutingModule } from './sponsor-management-routing.module';
import { SponsorManagementPageComponent } from './sponsor-management-page/sponsor-management-page.component';
import { SponsorManagementFormComponent } from './sponsor-management-form/sponsor-management-form.component';
import {IconModule} from "@coreui/icons-angular";
import {CardModule, GridModule, TableModule} from "@coreui/angular";


@NgModule({
  declarations: [
    SponsorManagementPageComponent,
    SponsorManagementFormComponent
  ],
  imports: [
    CommonModule,
    SponsorManagementRoutingModule,
    IconModule,
    CardModule,
    TableModule,
    GridModule
  ]
})
export class SponsorManagementModule { }
