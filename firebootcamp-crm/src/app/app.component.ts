import { Component } from '@angular/core';
import { CompanyService } from './company/company.service';

@Component({
  selector: 'fbc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // template:'<div> Hello World </div>' // DONT DO THAT
})
export class AppComponent {

  title = 'Melbourne ☕';
  myDate = new Date();

  companyCount$ = this.companyService.companyCount();

  constructor(
    private companyService: CompanyService,
  ) {
  }

  // Long way - don't use
  // valueChanged(event: any) {
  //   var newValue = event.target.value;
  //   this.title = newValue;
  // }
}
