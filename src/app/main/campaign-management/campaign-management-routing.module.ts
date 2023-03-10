import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CampaignManagementPageComponent} from "./campaign-management-page/campaign-management-page.component";
import {CampaignManagementFormComponent} from "./campaign-management-form/campaign-management-form.component";

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Quản lý chiến dịch'
    },
    children: [
      {
        path: 'list',
        component: CampaignManagementPageComponent,
        data: {
          title: 'Danh sách các chiến dịch'
        }
      },
      {
        path: 'create',
        component: CampaignManagementFormComponent,
        data: {
          title: 'Tạo chiến dịch'
        }
      },
      {
        path: 'view/:id',
        component: CampaignManagementFormComponent,
        data: {
          title: 'Xem chi tiết chiến dịch'
        }
      },
      {
        path: 'edit/:id',
        component: CampaignManagementFormComponent,
        data: {
          title: 'Chỉnh sửa chiến dịch'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampaignManagementRoutingModule { }
