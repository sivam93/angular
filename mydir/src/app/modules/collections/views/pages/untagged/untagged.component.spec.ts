import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UntaggedComponent } from './untagged.component';

describe('UntaggedComponent', () => {
  let component: UntaggedComponent;
  let fixture: ComponentFixture<UntaggedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UntaggedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UntaggedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
