import { Component } from '@angular/core';
import {cilPenAlt, cilSpreadsheet, cilTrash} from "@coreui/icons";

@Component({
  selector: 'app-faq-management-page',
  templateUrl: './faq-management-page.component.html',
  styleUrls: ['./faq-management-page.component.scss']
})
export class FaqManagementPageComponent {
  icons = { cilSpreadsheet, cilPenAlt, cilTrash, };
}
