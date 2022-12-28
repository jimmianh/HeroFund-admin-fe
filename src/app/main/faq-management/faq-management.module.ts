import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FAQManagementRoutingModule } from './faq-management-routing.module';
import { FaqManagementPageComponent } from './faq-management-page/faq-management-page.component';
import { FaqManagementFormComponent } from './faq-management-form/faq-management-form.component';
import {IconModule} from "@coreui/icons-angular";
import {CardModule, GridModule, TableModule} from "@coreui/angular";


@NgModule({
  declarations: [
    FaqManagementPageComponent,
    FaqManagementFormComponent
  ],
  imports: [
    CommonModule,
    FAQManagementRoutingModule,
    IconModule,
    TableModule,
    CardModule,
    GridModule
  ]
})
export class FAQManagementModule { }
