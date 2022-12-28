import { Component } from '@angular/core';
import {cilPenAlt, cilSpreadsheet, cilTrash} from "@coreui/icons";

@Component({
  selector: 'app-sponsor-management-page',
  templateUrl: './sponsor-management-page.component.html',
  styleUrls: ['./sponsor-management-page.component.scss']
})
export class SponsorManagementPageComponent {
  icons = { cilSpreadsheet, cilPenAlt, cilTrash, };
}
