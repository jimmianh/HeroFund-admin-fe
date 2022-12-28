import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesManagementRoutingModule } from './categories-management-routing.module';
import { CategoriesManagementPageComponent } from './categories-management-page/categories-management-page.component';
import { CategoriesManagementFormComponent } from './categories-management-form/categories-management-form.component';
import {IconModule} from "@coreui/icons-angular";
import {ButtonModule, CardModule, FormModule, GridModule, TableModule} from "@coreui/angular";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    CategoriesManagementPageComponent,
    CategoriesManagementFormComponent
  ],
  imports: [
    CommonModule,
    CategoriesManagementRoutingModule,
    IconModule,
    TableModule,
    CardModule,
    GridModule,
    FormModule,
    ButtonModule,
    HttpClientModule
  ]
})
export class CategoriesManagementModule { }
