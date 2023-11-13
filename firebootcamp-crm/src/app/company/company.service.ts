import { Injectable } from '@angular/core';
import { Company } from './company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor() { }

  getCompanies(): Company[] {
    return [
      { name: 'Company A', email:'companyA@ssw.com.au', phone: 12345 },
      { name: 'Company B', email:'companyB@ssw.com.au', phone: 34567 },
      { name: 'Company C', email:'companyC@ssw.com.au', phone: 45678 },
    ];
  }

}
