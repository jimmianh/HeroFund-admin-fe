import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentManagementRoutingModule } from './comment-management-routing.module';
import { CommentManagementPageComponent } from './comment-management-page/comment-management-page.component';
import { CommentManagementDetailComponent } from './comment-management-detail/comment-management-detail.component';
import {IconModule} from "@coreui/icons-angular";
import {CardModule, GridModule, TableModule} from "@coreui/angular";


@NgModule({
  declarations: [
    CommentManagementPageComponent,
    CommentManagementDetailComponent
  ],
  imports: [
    CommonModule,
    CommentManagementRoutingModule,
    IconModule,
    TableModule,
    CardModule,
    GridModule
  ]
})
export class CommentManagementModule { }
