import { Component } from '@angular/core';

@Component({
  selector: 'fbc-company-list',
  templateUrl: './company-list.component.html',
  styleUrl: './company-list.component.scss'
})
export class CompanyListComponent {

  companies: any = [
    { name: 'Company A', email:'companyA@ssw.com.au', phone: 12345 },
    { name: 'Company B', email:'companyB@ssw.com.au', phone: 34567 },
    { name: 'Company C', email:'companyC@ssw.com.au', phone: 45678 }
  ]
}
