import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnchordetailsComponent } from './anchordetails.component';

describe('AnchordetailsComponent', () => {
  let component: AnchordetailsComponent;
  let fixture: ComponentFixture<AnchordetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnchordetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnchordetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
