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
  tenders: Tender[];
  tenderAdded = false;
  tenderToEdit: {
    tenderNumber: '',
    tenderDescription: '',
    category: '',
    tenderStatus: '',
    InstitutionContactPerson: '',
    InstitutionPersonEmail: '',
    InstitutionPersonPhone: '',
    datePublished: '',
    closingDate: ''
   };
  constructor(private tenderService: TenderService) {

   }
  ngOnInit(){
    this.getAllTenders();
  }
  getAllTenders() {
    this.tenderService.getTenders().subscribe(tenderData => {
      this.tenders = tenderData;
      console.log(this.tenders);
    });
  }
   // Add New user
   createTender(data: Tender) {
    this.tenderService.createTender(data).subscribe(res => {
      this.tenderAdded = true;
      this.getAllTenders();
      console.log('Tender has been added ', res);
    });
  }
  editTender(data){
    this.tenderToEdit.tenderNumber = data.tenderNumber;
  //   tenderDescription: data.tenderDescription,
  //   category: data.category,
  //   tenderStatus: data.tenderStatus,
  //   InstitutionContactPerson: data.InstitutionContactPerson,
  //   InstitutionPersonEmail: data.InstitutionPersonEmail,
  //   InstitutionPersonPhone: data.InstitutionPersonPhone,
  //   datePublished: data.datePublished,
  //   closingDate: data.closingDate
  //  };
    console.log('ID to update ', this.tenderToEdit.tenderNumber );
  }
  delete(data: Tender) {
   if (confirm('Are you sure to delete')){
    this.tenderService.deleteTender(data).subscribe((res) => {
      this.getAllTenders();
      console.log(`Tender number ${data} deleted ` + res);
    });
   }
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
