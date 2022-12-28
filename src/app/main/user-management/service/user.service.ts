import { Injectable } from '@angular/core';
import {catchError, Observable, throwError} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}


}
