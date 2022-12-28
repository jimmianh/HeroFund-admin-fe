import {Component, OnInit} from '@angular/core';
import {cilPenAlt, cilSpreadsheet, cilTrash} from "@coreui/icons";
import {CategoriesService} from "../service/categories.service";
import {take} from "rxjs";

@Component({
  selector: 'app-categories-management-page',
  templateUrl: './categories-management-page.component.html',
  styleUrls: ['./categories-management-page.component.scss']
})
export class CategoriesManagementPageComponent implements OnInit{
  icons = { cilSpreadsheet, cilPenAlt, cilTrash, };
  listCategories : any[] = [];
  constructor(private categoriesService: CategoriesService) {
  }


  ngOnInit() : void {
    this.categoriesService.getCategoriesList().pipe(take(1)).subscribe(res => {
      console.log(res);
      this.listCategories = res
    });
  }
}
