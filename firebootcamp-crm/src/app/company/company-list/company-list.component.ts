import { Component, OnInit } from '@angular/core';
import { Company } from '../company';
import { CompanyService } from '../company.service';

@Component({
  selector: 'fbc-company-list',
  templateUrl: './company-list.component.html',
  styleUrl: './company-list.component.scss'
})
export class CompanyListComponent implements OnInit {
  companies: Company[] = [];

  constructor(private companyService: CompanyService) {
  }

  ngOnInit(): void {

    this.companyService.getCompanies()
    .subscribe((companies: Company[]) => this.companies = companies, // next
              // ((error) => console.error(error)), // error
              // () => console.log("COMPLETE callback") // complete
              )
  }
}
