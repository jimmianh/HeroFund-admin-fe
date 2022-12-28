import { Component} from '@angular/core';
import { cilPenAlt, cilSpreadsheet, cilTrash} from "@coreui/icons";
import usersData from "./data";


@Component({
  selector: 'app-user-management-page',
  templateUrl: './user-management-page.component.html',
  styleUrls: ['./user-management-page.component.scss']
})
export class UserManagementPageComponent {
  listUser = usersData
  icons = { cilSpreadsheet, cilPenAlt, cilTrash, };
}
