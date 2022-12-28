import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionManagementRoutingModule } from './transaction-management-routing.module';
import { TransactionManagementPageComponent } from './transaction-management-page/transaction-management-page.component';
import { TransactionManagementDetailComponent } from './transaction-management-detail/transaction-management-detail.component';
import {CardModule, GridModule, TableModule} from "@coreui/angular";
import {IconModule} from "@coreui/icons-angular";


@NgModule({
  declarations: [
    TransactionManagementPageComponent,
    TransactionManagementDetailComponent
  ],
  imports: [
    CommonModule,
    TransactionManagementRoutingModule,
    GridModule,
    CardModule,
    TableModule,
    IconModule
  ]
})
export class TransactionManagementModule { }
