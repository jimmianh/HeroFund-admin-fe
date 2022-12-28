import { Component } from '@angular/core';
import {cilPenAlt, cilSpreadsheet, cilTrash} from "@coreui/icons";

@Component({
  selector: 'app-categories-management-page',
  templateUrl: './categories-management-page.component.html',
  styleUrls: ['./categories-management-page.component.scss']
})
export class CategoriesManagementPageComponent {
  icons = { cilSpreadsheet, cilPenAlt, cilTrash, };
}
