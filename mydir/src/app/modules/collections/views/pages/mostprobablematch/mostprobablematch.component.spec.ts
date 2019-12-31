import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostprobablematchComponent } from './mostprobablematch.component';

describe('MostprobablematchComponent', () => {
  let component: MostprobablematchComponent;
  let fixture: ComponentFixture<MostprobablematchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostprobablematchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostprobablematchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
