import { Injectable } from '@angular/core';
import { Company } from './company';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, finalize } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  API_BASE = 'https://app-fbc-crm-api-prod.azurewebsites.net/api';

  constructor(private httpClient: HttpClient) { }

  getCompanies(): Observable<Company[]> {
    // return this.httpClient.get<Company[]>(this.API_BASE + '/company/')
    return this.httpClient.get<Company[]>(`${this.API_BASE}/company/`)
    .pipe(
      catchError(error => this.handleError(error)),
      finalize(() => console.log("FINALIZE - Observable Completed"))
    )
  }

  getCompany(companyId: number): Observable<Company> {
    return this.httpClient.get<Company>(`${this.API_BASE}/company/${companyId}`).pipe(
      catchError(error => this.handleError(error)),
    );
  }

  updateCompany(company: Company): Observable<Company> {
    return this.httpClient.put<Company>(`${this.API_BASE}/company/${company.id}`, company).pipe(
      catchError(error => this.handleError(error)),
    );
  }

  deleteCompany(id: number): Observable<Company> {
    return this.httpClient.delete<Company>(`${this.API_BASE}/company/${id}`)
    .pipe(
      catchError(error => this.handleError(error)),
    )
  }

  handleError(error: Error) {
    console.error('Error handler', error);
    return new Observable<any>(); //TODO: Update - I should not be using "any"
  }

}
