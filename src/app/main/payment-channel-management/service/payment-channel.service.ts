import {Injectable} from '@angular/core';
import {catchError, Observable, throwError} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PaymentChannelService {

  constructor(private http: HttpClient) {
  }

  getListPaymentChannel() {
    let token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInBob25lIjoiMDk2OTQ1MTY5MSIsInByb2ZpbGVJZCI6MSwiZXhwIjoxNjcyMjk4NDAyLCJpYXQiOjE2NzIyMTIwMDIsImF1dGhvcml0aWVzIjpbeyJhdXRob3JpdHkiOiJST0xFX0FETUlOIn1dfQ.vn1KaN0pxm3CJyrhilCrbxnrys6KhoXuY0gc8rKlxBo";
    const headers = new HttpHeaders({'Authorization': 'Bearer ' + token});
    return this.http
      .get<any>(environment.baseUrl + `/api/v1/admin/channels`, {headers})
      .pipe(catchError((httpError: any) => {
        return throwError(httpError);
      }));
  }

}
