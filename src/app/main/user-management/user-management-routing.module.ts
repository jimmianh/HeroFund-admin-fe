import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserManagementPageComponent} from "./user-management-page/user-management-page.component";
import {UserManagementFormComponent} from "./user-management-form/user-management-form.component";
import {RangesComponent} from "../../views/forms/ranges/ranges.component";

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Người dùng'
    },
    children: [
      {
        path: 'list',
        component: UserManagementPageComponent,
        data: {
          title: 'Danh sách người dùng'
        }
      },
      {
        path: 'create',
        component: UserManagementFormComponent,
        data: {
          title: 'Tạo kênh thanh toán'
        }
      },
      {
        path: 'view/:id',
        component: UserManagementFormComponent,
        data: {
          title: 'Xem kênh thanh toán'
        }
      },
      {
        path: 'edit/:id',
        component: UserManagementFormComponent,
        data: {
          title: 'Chỉnh sửa kênh thanh toán'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserManagementRoutingModule { }
