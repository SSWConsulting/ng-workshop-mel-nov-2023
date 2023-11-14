import { Component, OnInit } from '@angular/core';
import { AppState } from './models/appState';
import { Store } from '@ngrx/store';
import { selectCompaniesCount } from './state/company.selectors';
import { Observable } from 'rxjs';
import { Company } from './company/company';

@Component({
  selector: 'fbc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // template:'<div> Hello World </div>' // DONT DO THAT
})
export class AppComponent implements OnInit{

  title = 'Melbourne';
  myDate = new Date();

  companyCount$!: Observable<number>;

  constructor(
    private store: Store<AppState>,
  ) {
  }

  ngOnInit(): void {
    this.companyCount$ = this.store.select(selectCompaniesCount);
  }

  // Long way - don't use
  // valueChanged(event: any) {
  //   var newValue = event.target.value;
  //   this.title = newValue;
  // }
}
