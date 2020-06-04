import { Component, OnInit } from '@angular/core';
import { TenderService } from '../services/tender.service';
import { Observable } from 'rxjs';
import { Tender } from '../models/tender';
import { Company } from '../models/company';
import { Router } from '@angular/router';


@Component({
  selector: 'app-addcompany',
  templateUrl: './addcompany.component.html',
  styleUrls: ['./addcompany.component.css']
})
export class AddcompanyComponent implements OnInit {
  companies: Company[];
  constructor(private tenderService: TenderService, private router: Router) {
    // to validate tender number
    // this.tenderService.getTenders().subscribe(tenderData => {
    //   this.tenders = tenderData;
    //   const result = this.tenders.find( ({ tenderNumber }) => tenderNumber === '4334/114/46744' );
    //   console.log('MY RESULT IS ', result);
    // });
  }


  ngOnInit(): void {
  }
  createCompany(data: Company) {
    this.tenderService.createCompany(data.tenderNumber, data).subscribe(resp => {
       if (data){
        this.router.navigate(['/viewcompanies']);
       }
     });
  }
}
