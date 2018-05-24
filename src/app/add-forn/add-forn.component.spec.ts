import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFornComponent } from './add-forn.component';

describe('AddFornComponent', () => {
  let component: AddFornComponent;
  let fixture: ComponentFixture<AddFornComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFornComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFornComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
