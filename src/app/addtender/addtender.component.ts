import { Component, OnInit } from '@angular/core';
import { Tender } from '../models/tender';
import { Router } from '@angular/router';
import { TenderService } from '../services/tender.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-addtender',
  templateUrl: './addtender.component.html',
  styleUrls: ['./addtender.component.css']
})
export class AddtenderComponent implements OnInit {
  // tenders: Tender[] = [];
    tenderNumbers: any;
    tenderDescriptions: any;
    categorys: any;
    tenderStatuss: any;
    InstitutionContactPersons: any;
    InstitutionPersonEmails: any;
    InstitutionPersonPhones: any;
    datePublisheds: any;
    closingDates: any;

  constructor(private tenderService: TenderService) {
    this.tenderNumbers = '';
    this.tenderDescriptions = '';
    this.categorys = '';
    this.tenderStatuss = '';
    this.InstitutionContactPersons = '';
    this.InstitutionPersonEmails = '';
    this.InstitutionPersonPhones = '';
    this.datePublisheds = '';
    this.closingDates = '';

    this.tenderService.getCompany();
   }
  ngOnInit(): void {

  }

   // Add New user
   createTender(data) {
          this.tenderNumbers = data.tenderNumber;
          this.tenderDescriptions = data.tenderDescription;
          this.categorys = data.category;
          this.tenderStatuss = data.tenderStatus;
          this.InstitutionContactPersons = data.InstitutionContactPerson;
          this.InstitutionPersonEmails = data.InstitutionPersonEmail;
          this.InstitutionPersonPhones = data.InstitutionPersonPhone;
          this.datePublisheds = data.datePublished;
          this.closingDates = data.closingDate;

    //  const newTender = JSON.stringify(data);
    //  this.tenderService.createTender(newTender).subscribe((resp) => {
    //    console.log('Response from post req: ',  resp);
    // });
  }


  // const tender = {
  //   tenderNumber: data.tenderNumber,
  //   tenderDescription: data.tenderDescription,
  //   category: data.category,
  //   tenderStatus: data.tenderStatus,
  //   InstitutionContactPerson: data.InstitutionContactPerson,
  //   InstitutionPersonEmail: data.InstitutionPersonEmail,
  //   InstitutionPersonPhone: data.InstitutionPersonPhone,
  //   datePublished: data.datePublished,
  //   closingDate: data.closingDate
  //  };
  // deleteEmployee(id: number) {
  //   this.tenderService.deleteTender(id)
  //     .subscribe(
  //       data => {
  //         console.log(data);
  //         this.reloadData();
  //       },
  //       error => console.log(error));
  // }


//
//   // Post Request to Tender API
//   console.log(olu);
//   const xhr = new XMLHttpRequest();
//   xhr.open('POST', 'https://vtender-api.herokuapp.com/api/v1/tenders', true);
//   xhr.setRequestHeader('Content-type', 'application/json');
//   xhr.send(olu);
//   xhr.onload = (data) => {
//     console.log('Response from server ', data);
//   };
// });


}
