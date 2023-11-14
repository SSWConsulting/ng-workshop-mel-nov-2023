import { Component } from '@angular/core';
import { AppState } from './models/appState';
import { Store } from '@ngrx/store';
import { selectCompaniesCount } from './state/company.selectors';

@Component({
  selector: 'fbc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // template:'<div> Hello World </div>' // DONT DO THAT
})
export class AppComponent {

  title = 'Melbourne ☕';
  myDate = new Date();

  companyCount$ = this.store.select(selectCompaniesCount);

  constructor(
    private store: Store<AppState>,
  ) {
  }

  // Long way - don't use
  // valueChanged(event: any) {
  //   var newValue = event.target.value;
  //   this.title = newValue;
  // }
}
