import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryStaticsComponent } from './country-statics.component';

describe('CountryStaticsComponent', () => {
  let component: CountryStaticsComponent;
  let fixture: ComponentFixture<CountryStaticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryStaticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryStaticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
