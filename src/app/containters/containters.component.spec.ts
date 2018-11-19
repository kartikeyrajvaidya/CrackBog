import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContaintersComponent } from './containters.component';

describe('ContaintersComponent', () => {
  let component: ContaintersComponent;
  let fixture: ComponentFixture<ContaintersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContaintersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContaintersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
