import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostprobablematchdetailsComponent } from './mostprobablematchdetails.component';

describe('MostprobablematchdetailsComponent', () => {
  let component: MostprobablematchdetailsComponent;
  let fixture: ComponentFixture<MostprobablematchdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostprobablematchdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostprobablematchdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
