import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesSectionComponent } from './countries-section.component';

describe('CountriesSectionComponent', () => {
  let component: CountriesSectionComponent;
  let fixture: ComponentFixture<CountriesSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountriesSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountriesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
