import { Component, DestroyRef, OnDestroy, OnInit, inject } from '@angular/core';
import { Company } from '../company';
import { CompanyService } from '../company.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'fbc-company-list',
  templateUrl: './company-list.component.html',
  styleUrl: './company-list.component.scss'
})
export class CompanyListComponent implements OnInit {
  destoryRef = inject(DestroyRef);
  // companies: Company[] = [];
  companies$!: Observable<Company[]>;

  constructor(private companyService: CompanyService) {
  }

  ngOnInit(): void {
    this.loadCompanies();
  }

  loadCompanies() {
    this.companies$ = this.companyService.getCompanies()
  }

  deleteCompany(company: Company){
    this.companyService.deleteCompany(company.id)
    .subscribe(
      (deletedCompany) => this.loadCompanies()
    ); // IMPORTANT
  }
}
