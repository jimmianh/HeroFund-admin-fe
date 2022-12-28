import { Component } from '@angular/core';
import {cilPenAlt, cilSpreadsheet, cilTrash} from "@coreui/icons";

@Component({
  selector: 'app-transaction-management-page',
  templateUrl: './transaction-management-page.component.html',
  styleUrls: ['./transaction-management-page.component.scss']
})
export class TransactionManagementPageComponent {
  icons = { cilSpreadsheet, cilPenAlt, cilTrash, };
}
