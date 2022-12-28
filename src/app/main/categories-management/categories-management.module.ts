import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesManagementRoutingModule } from './categories-management-routing.module';
import { CategoriesManagementPageComponent } from './categories-management-page/categories-management-page.component';
import { CategoriesManagementFormComponent } from './categories-management-form/categories-management-form.component';
import {IconModule} from "@coreui/icons-angular";
import {CardModule, GridModule, TableModule} from "@coreui/angular";


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
    GridModule
  ]
})
export class CategoriesManagementModule { }
