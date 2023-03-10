import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ArticleManagementPageComponent} from "./article-management-page/article-management-page.component";
import {ArticleManagementFormComponent} from "./article-management-form/article-management-form.component";

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Quản lý bài viết'
    },
    children: [
      {
        path: 'list',
        component: ArticleManagementPageComponent,
        data: {
          title: 'Danh sách bài viết'
        }
      },
      {
        path: 'create',
        component: ArticleManagementFormComponent,
        data: {
          title: 'Tạo bài viết'
        }
      },
      {
        path: 'view/:id',
        component: ArticleManagementFormComponent,
        data: {
          title: 'Xem bài viết'
        }
      },
      {
        path: 'edit/:id',
        component: ArticleManagementFormComponent,
        data: {
          title: 'Chỉnh sửa bài viết'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleManagementRoutingModule { }
