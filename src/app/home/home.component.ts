import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { TenderService } from '../services/tender.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('section1') section1: ElementRef;
  isShown = true;
  showForm = false;
  isValidTender = false;
  isTender = true;

  tenderNumber: string;
  tenderDescription: string;
  datas: any;
  category; datePublished; closingDate; tenderStatus; nameOfInstitution; officalLocation;
  InstitutionContactPerson; InstitutionPersonEmail; InstitutionPersonPhone;
  constructor(private tenderService: TenderService) {

  }

  ngOnInit(): void {

  }
  open = () => {
    console.log('Hide me');
    this.isShown = false;
    this.showForm = true;
  }

  veryfyTender = () => {
    this.tenderService.getTenders(this.tenderNumber).subscribe((resp) => {
       this.datas = resp;
       this.tenderNumber = this.datas.tenderNumber;
       this.tenderDescription = this.datas.tenderDescription;
       this.category = this.datas.category;
       this.datePublished = this.datas.datePublished;
       this.closingDate = this.datas.closingDate;
       this.tenderStatus = this.datas.tenderStatus;

       this.nameOfInstitution = this.datas.nameOfInstitution;
       this.officalLocation = this.datas.officalLocation;
       this.InstitutionContactPerson = this.datas.InstitutionContactPerson;
       this.InstitutionPersonEmail = this.datas.InstitutionPersonEmail;
       this.InstitutionPersonPhone = this.datas.InstitutionPersonPhone;
       this.isValidTender = true;
       this.showForm = false;
       this.isTender = false;
    });
  }

  // checkTenderStatus(tenderobj) {
  //   const { id, ...rest } = tenderobj;
  //   if (rest.tenderStatus === 'Open') {
  //     openTender(tenderobj);
  //   }
  //   if (rest.tenderStatus === 'Awarded') {
  //     closedTender(tenderobj);
  //   }
  //   if (rest.tenderStatus === 'Pending') {
  //     openTender(tenderobj);
  //   }
  // }
}
