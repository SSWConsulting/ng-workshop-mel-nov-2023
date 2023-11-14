import { Component, OnInit } from '@angular/core';
import { Company } from '../company';
import { CompanyService } from '../company.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../models/appState';
import {
  selectCompanies,
  selectCompaniesCount,
} from '../../state/company.selectors';
import { loadCompanies } from '../../state/company.actions';

@Component({
  selector: 'fbc-company-list',
  templateUrl: './company-list.component.html',
  styleUrl: './company-list.component.scss',
})
export class CompanyListComponent implements OnInit {
  companies$ = this.store.select(selectCompanies);
  companyCount$ = this.store.select(selectCompaniesCount);

  constructor(
    private companyService: CompanyService,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.store.dispatch(loadCompanies());
  }

  // loadCompanies() {
  //   this.companies$ = this.companyService.getCompanies()
  // }

  deleteCompany(company: Company) {
    this.companyService
      .deleteCompany(company.id)
      .subscribe(() => this.store.dispatch(loadCompanies()));
  }
}
