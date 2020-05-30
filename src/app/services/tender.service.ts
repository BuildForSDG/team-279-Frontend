import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Tender } from '../models/tender';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export const googleAPIKey = environment.googleAPIKey;

@Injectable({
  providedIn: 'root'
})
export class TenderService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  tendersUrl = 'https://team-279-api.herokuapp.com/api/tenders';
  googleReq = 'https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=%2B270100300080&inputtype=phonenumber&fields=business_status,formatted_address,name,permanently_closed,opening_hours&key=' + googleAPIKey;
  constructor(private http: HttpClient) {

   }
   getTenders(data: any) {
    return this.http.get(this.tendersUrl + data);
  }

   createTender(tender: any): Observable<Tender> {
    return this.http.post<Tender>(this.tendersUrl, JSON.stringify(tender), this.httpOptions);
  }

// deleteTender(data) {
//     return this.http.get(this.tendersUrl + data);
//   }
getTenderList() {
     const post = {
      tenderNumber: 'Hellooooo123',
      tenderDescription: 'Hellooooo123',
      category: 'Hellooooo123',
      tenderStatus: 'Hellooooo123',
      InstitutionContactPerson: 'Hellooooo123',
      InstitutionPersonEmail: 'Hellooooo123',
      InstitutionPersonPhone: 'Hellooooo123',
      datePublished: 'Hellooooo123',
      closingDate: 'Hellooooo123',
    };
     return post;
  }
getCompany() {
     const proxyurl = 'https://cors-anywhere.herokuapp.com/';
     fetch(proxyurl + this.googleReq)
     .then(response => response.json())
     .then(contents => console.log(contents));
}
}
