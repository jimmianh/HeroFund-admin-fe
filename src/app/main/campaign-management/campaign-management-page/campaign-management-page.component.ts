import { Component } from '@angular/core';
import {cilPenAlt, cilSpreadsheet, cilTrash} from "@coreui/icons";

@Component({
  selector: 'app-campaign-management-page',
  templateUrl: './campaign-management-page.component.html',
  styleUrls: ['./campaign-management-page.component.scss']
})
export class CampaignManagementPageComponent {
  icons = { cilSpreadsheet, cilPenAlt, cilTrash, };
}
