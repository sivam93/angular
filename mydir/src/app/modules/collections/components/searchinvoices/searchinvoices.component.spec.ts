import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchinvoicesComponent } from './searchinvoices.component';

describe('SearchinvoicesComponent', () => {
  let component: SearchinvoicesComponent;
  let fixture: ComponentFixture<SearchinvoicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchinvoicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchinvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
