import { Component} from '@angular/core';
import { cilPenAlt, cilSpreadsheet, cilTrash} from "@coreui/icons";


@Component({
  selector: 'app-user-management-page',
  templateUrl: './user-management-page.component.html',
  styleUrls: ['./user-management-page.component.scss']
})
export class UserManagementPageComponent {
  icons = { cilSpreadsheet, cilPenAlt, cilTrash };
}
