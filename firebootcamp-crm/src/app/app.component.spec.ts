import { Store } from '@ngrx/store';
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AppState } from './models/appState';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

const initialState: AppState = {
  companies: []
};

describe('AppComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers:[
        provideMockStore({ initialState })
      ]
    }).compileComponents();

  });

  it('add 1+1 - PASS', () => {
    expect(1 + 1).toEqual(2);
  });

  it('title is "Melbourne ☕️"', () => {
    const component = new AppComponent(null as any as Store<AppState>);
    expect(component.title).toEqual('Melbourne')
  });

  it('should show the company count as 0', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    let el = fixture.debugElement.query(By.css('#company-count')).nativeElement;

    expect(el.textContent).toEqual('0')
  })
});
