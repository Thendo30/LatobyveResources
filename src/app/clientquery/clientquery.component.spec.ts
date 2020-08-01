import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientqueryComponent } from './clientquery.component';

describe('ClientqueryComponent', () => {
  let component: ClientqueryComponent;
  let fixture: ComponentFixture<ClientqueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientqueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientqueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
