import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentChannelManagementRoutingModule } from './payment-channel-management-routing.module';
import { PaymentChannelManagementPageComponent } from './payment-channel-management-page/payment-channel-management-page.component';
import { PaymentChannelManagementFormComponent } from './payment-channel-management-form/payment-channel-management-form.component';
import {IconModule} from "@coreui/icons-angular";
import {CardModule, GridModule, TableModule} from "@coreui/angular";


@NgModule({
  declarations: [
    PaymentChannelManagementPageComponent,
    PaymentChannelManagementFormComponent
  ],
  imports: [
    CommonModule,
    PaymentChannelManagementRoutingModule,
    IconModule,
    CardModule,
    TableModule,
    GridModule
  ]
})
export class PaymentChannelManagementModule { }
