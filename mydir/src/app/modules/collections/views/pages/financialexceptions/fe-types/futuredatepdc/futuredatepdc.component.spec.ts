import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuturedatepdcComponent } from './futuredatepdc.component';

describe('FuturedatepdcComponent', () => {
  let component: FuturedatepdcComponent;
  let fixture: ComponentFixture<FuturedatepdcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuturedatepdcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuturedatepdcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
