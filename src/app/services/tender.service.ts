import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Tender } from '../models/tender';
import { Company } from '../models/company';
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
  companyUrl = 'http://127.0.0.1:5000/api/companies';
  tendersUrl = 'http://127.0.0.1:5000/api/tenders';
  googleReq = 'https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=%2B270100300080&inputtype=phonenumber&fields=business_status,formatted_address,name,permanently_closed,opening_hours&key=' + googleAPIKey;
  constructor(private http: HttpClient) {

   }
  getTenders(): Observable<Tender[]> {
    return this.http.get<Tender[]>(this.tendersUrl);
  }
  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(this.companyUrl);
  }
  createTender(data) {
    return this.http.post('http://127.0.0.1:5000/api/tender/create',  data);
  }
  createCompany(tenderNumb, formdata) {
    const url = `http://127.0.0.1:5000/api/tender/${tenderNumb}/company`;
    return this.http.post(url, formdata);
  }

  deleteTender(data): Observable<Tender[]> {
    // const EncodedText = data.replace(/\//g, '%2F');
    const url = `http://127.0.0.1:5000/api/tender/${data}`;
    return this.http.delete<Tender[]>(url);
  }
  deleteCompany(data): Observable<Company[]> {
    // const EncodedText = data.replace(/\//g, '%2F');
    const url = `http://127.0.0.1:5000/api/company/${data}`;
    return this.http.delete<Company[]>(url);
  }

  getCompany() {
     const proxyurl = 'https://cors-anywhere.herokuapp.com/';
     fetch(proxyurl + this.googleReq)
     .then(response => response.json())
     .then(contents => console.log(contents));
}
}
