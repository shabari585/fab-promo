import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingMobilesComponent } from './upcoming-mobiles.component';

describe('UpcomingMobilesComponent', () => {
  let component: UpcomingMobilesComponent;
  let fixture: ComponentFixture<UpcomingMobilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcomingMobilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingMobilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
