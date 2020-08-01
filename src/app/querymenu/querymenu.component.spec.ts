import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuerymenuComponent } from './querymenu.component';

describe('QuerymenuComponent', () => {
  let component: QuerymenuComponent;
  let fixture: ComponentFixture<QuerymenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuerymenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuerymenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
