import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManagementRoutingModule } from './user-management-routing.module';
import { UserManagementPageComponent } from './user-management-page/user-management-page.component';
import { UserManagementFormComponent } from './user-management-form/user-management-form.component';
import {NzTableModule} from "ng-zorro-antd/table";
import {NzButtonModule} from "ng-zorro-antd/button";
import {DocsComponentsModule} from "../../../components";
import {CardModule, GridModule, TableModule} from "@coreui/angular";

@NgModule({
  declarations: [
    UserManagementPageComponent,
    UserManagementFormComponent,
  ],
  imports: [
    CommonModule,
    UserManagementRoutingModule,
    NzTableModule,
    NzButtonModule,
    DocsComponentsModule,
    TableModule,
    CardModule,
    GridModule,
  ]
})
export class UserManagementModule { }
