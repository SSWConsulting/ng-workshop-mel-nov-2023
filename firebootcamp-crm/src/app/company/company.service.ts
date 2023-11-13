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

  handleError(error: Error) {
    console.error('Error handler', error);
    return new Observable<Company[]>();
  }

}
