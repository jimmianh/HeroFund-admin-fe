import { Component } from '@angular/core';
import {cilPenAlt, cilSpreadsheet, cilTrash} from "@coreui/icons";

@Component({
  selector: 'app-comment-management-page',
  templateUrl: './comment-management-page.component.html',
  styleUrls: ['./comment-management-page.component.scss']
})
export class CommentManagementPageComponent {
  icons = { cilSpreadsheet, cilPenAlt, cilTrash, };
}
