import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashWorkComponent } from './dash-work.component';

describe('DashWorkComponent', () => {
  let component: DashWorkComponent;
  let fixture: ComponentFixture<DashWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
