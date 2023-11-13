import { Injectable } from '@angular/core';
import { Company } from './company';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private httpClient: HttpClient) { }

  getCompanies(): Observable<Company[]> {

    // $ suffix just means it's an observable
    var companies$ = this.httpClient.get<Company[]>('https://app-fbc-crm-api-prod.azurewebsites.net/api/company')

    return companies$;
  }

}
