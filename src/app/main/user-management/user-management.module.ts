import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManagementRoutingModule } from './user-management-routing.module';
import { UserManagementPageComponent } from './user-management-page/user-management-page.component';
import { UserManagementFormComponent } from './user-management-form/user-management-form.component';
import {ButtonModule, CardModule, FormModule, GridModule, TableModule, UtilitiesModule} from "@coreui/angular";
import {DocsComponentsModule} from "../../../components";
import {IconModule} from "@coreui/icons-angular";


@NgModule({
  declarations: [
    UserManagementPageComponent,
    UserManagementFormComponent,

  ],
  imports: [
    CommonModule,
    UserManagementRoutingModule,
    UtilitiesModule,
    DocsComponentsModule,
    TableModule,
    GridModule,
    CardModule,
    IconModule,
    FormModule,
    ButtonModule,
  ]
})
export class UserManagementModule { }
