import { Component } from '@angular/core';
import {cilPenAlt, cilSpreadsheet, cilTrash} from "@coreui/icons";

@Component({
  selector: 'app-payment-channel-management-page',
  templateUrl: './payment-channel-management-page.component.html',
  styleUrls: ['./payment-channel-management-page.component.scss']
})
export class PaymentChannelManagementPageComponent {
  icons = { cilSpreadsheet, cilPenAlt, cilTrash, };
}
