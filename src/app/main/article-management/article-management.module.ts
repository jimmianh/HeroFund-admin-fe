import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleManagementRoutingModule } from './article-management-routing.module';
import { ArticleManagementFormComponent } from './article-management-form/article-management-form.component';
import { ArticleManagementPageComponent } from './article-management-page/article-management-page.component';
import {IconModule} from "@coreui/icons-angular";
import {CardModule, GridModule, TableModule} from "@coreui/angular";


@NgModule({
  declarations: [
    ArticleManagementFormComponent,
    ArticleManagementPageComponent
  ],
  imports: [
    CommonModule,
    ArticleManagementRoutingModule,
    IconModule,
    TableModule,
    CardModule,
    GridModule
  ]
})
export class ArticleManagementModule { }
