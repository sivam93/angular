import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FedetailsComponent } from './fedetails.component';

describe('FedetailsComponent', () => {
  let component: FedetailsComponent;
  let fixture: ComponentFixture<FedetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FedetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
