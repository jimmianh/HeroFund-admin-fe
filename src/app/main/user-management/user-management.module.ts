import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManagementRoutingModule } from './user-management-routing.module';
import { UserManagementPageComponent } from './user-management-page/user-management-page.component';
import { UserManagementFormComponent } from './user-management-form/user-management-form.component';
import {MatColumnDef, MatHeaderCell, MatTableModule} from "@angular/material/table";
import {NzToolTipModule} from "ng-zorro-antd/tooltip";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzDividerModule} from "ng-zorro-antd/divider";
import {NzTableModule, NzTablePaginationType} from "ng-zorro-antd/table";
import {NzRadioModule} from "ng-zorro-antd/radio";
import {NzFormControlComponent, NzFormModule} from "ng-zorro-antd/form";


@NgModule({
  declarations: [
    UserManagementPageComponent,
    UserManagementFormComponent,
    NzFormControlComponent
  ],
  imports: [
    CommonModule,
    UserManagementRoutingModule,
    MatTableModule,
    NzToolTipModule,
    NzIconModule,
    NzDividerModule,
    NzTableModule,
    NzRadioModule,
    NzFormModule,
  ]
})
export class UserManagementModule { }
