import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountrycodeComponent } from './countrycode.component';

describe('CountrycodeComponent', () => {
  let component: CountrycodeComponent;
  let fixture: ComponentFixture<CountrycodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountrycodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountrycodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
