import { Component, Input } from '@angular/core';
import { Company } from '../company';
import { Observable } from 'rxjs';

@Component({
  selector: 'fbc-company-table',
  templateUrl: './company-table.component.html',
  styleUrl: './company-table.component.scss'
})
export class CompanyTableComponent {

  // @Input()
  // companies$!: Observable<Company[]>;

  @Input()
  companies: Company[] = [];

  deleteCompany(company: Company) {
    // call our service somehow 
    // probably send something to the parent component
  }

}
