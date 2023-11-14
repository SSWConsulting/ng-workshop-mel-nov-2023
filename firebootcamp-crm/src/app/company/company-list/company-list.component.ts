import { Component, OnInit } from '@angular/core';
import { Company } from '../company';
import { CompanyService } from '../company.service';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../models/appState';

@Component({
  selector: 'fbc-company-list',
  templateUrl: './company-list.component.html',
  styleUrl: './company-list.component.scss',
})
export class CompanyListComponent implements OnInit {
  companies$ = this.store.select(state => state.companies);
  companyCount$ = this.companyService.companyCount();

  constructor(
    private companyService: CompanyService,
    private store: Store<AppState>,
  ) {}

  ngOnInit(): void {
    // this.loadCompanies();
  }

  // loadCompanies() {
  //   this.companies$ = this.companyService.getCompanies()
  // }

  deleteCompany(company: Company) {
    this.companyService
      .deleteCompany(company.id)
      .subscribe(company => alert(`${company.name} was deleted`));
  }
}
