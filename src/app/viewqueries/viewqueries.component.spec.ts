import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewqueriesComponent } from './viewqueries.component';

describe('ViewqueriesComponent', () => {
  let component: ViewqueriesComponent;
  let fixture: ComponentFixture<ViewqueriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewqueriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewqueriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
