import { Component } from '@angular/core';

@Component({
  selector: 'fbc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // template:'<div> Hello World </div>' // DONT DO THAT
})
export class AppComponent {

  title = 'Melbourne ☕';
  myDate = new Date();

  // Long way - don't use
  // valueChanged(event: any) {
  //   var newValue = event.target.value;
  //   this.title = newValue;
  // }
}
