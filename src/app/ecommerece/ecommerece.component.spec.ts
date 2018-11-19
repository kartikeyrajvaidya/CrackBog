import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommereceComponent } from './ecommerece.component';

describe('EcommereceComponent', () => {
  let component: EcommereceComponent;
  let fixture: ComponentFixture<EcommereceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcommereceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcommereceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
