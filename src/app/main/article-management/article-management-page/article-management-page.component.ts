import { Component } from '@angular/core';
import {cilPenAlt, cilSpreadsheet, cilTrash} from "@coreui/icons";

@Component({
  selector: 'app-article-management-page',
  templateUrl: './article-management-page.component.html',
  styleUrls: ['./article-management-page.component.scss']
})
export class ArticleManagementPageComponent {
  icons = { cilSpreadsheet, cilPenAlt, cilTrash, };
}
