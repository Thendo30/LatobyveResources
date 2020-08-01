import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaccountdetailsComponent } from './editaccountdetails.component';

describe('EditaccountdetailsComponent', () => {
  let component: EditaccountdetailsComponent;
  let fixture: ComponentFixture<EditaccountdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditaccountdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaccountdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
