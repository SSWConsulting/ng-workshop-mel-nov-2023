import { Injectable } from '@angular/core';
import { Company } from './company';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, finalize, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  private API_BASE = 'https://app-fbc-crm-api-prod.azurewebsites.net/api';

  private companies$ = new BehaviorSubject<Company[]>([]);

  constructor(private httpClient: HttpClient) {
    this.loadCompanies();
  }

  companyCount(): Observable<number> {
    return this.companies$.pipe(map((companies) => companies.length));
  }

  private loadCompanies(): void {
    this.httpClient
      .get<Company[]>(`${this.API_BASE}/company/`)
      .pipe(
        catchError((error) => this.handleError(error)),
        finalize(() => console.log('FINALIZE - Observable Completed'))
      )
      .subscribe((companies) => this.companies$.next(companies));
  }

  getCompanies(): Observable<Company[]> {
    return this.companies$;
  }

  getCompany(companyId: number): Observable<Company> {
    return this.httpClient
      .get<Company>(`${this.API_BASE}/company/${companyId}`)
      .pipe(catchError((error) => this.handleError(error)));
  }

  addCompany(company: Company): Observable<Company> {
    return this.httpClient
      .post<Company>(`${this.API_BASE}/company/`, company)
      .pipe(
        catchError((error) => this.handleError(error)),
        tap((_) => this.loadCompanies())
      );
  }

  updateCompany(company: Company): Observable<Company> {
    return this.httpClient
      .put<Company>(`${this.API_BASE}/company/${company.id}`, company)
      .pipe(
        catchError((error) => this.handleError(error)),
        tap((_) => this.loadCompanies())
      );
  }

  deleteCompany(id: number): Observable<Company> {
    return this.httpClient
      .delete<Company>(`${this.API_BASE}/company/${id}`)
      .pipe(
        catchError((error) => this.handleError(error)),
        tap((_) => this.loadCompanies())
      );
  }

  handleError(error: Error) {
    console.error('Error handler', error);
    return new Observable<any>(); //TODO: Update - I should not be using "any"
  }
}
