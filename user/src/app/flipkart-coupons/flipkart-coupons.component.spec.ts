import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipkartCouponsComponent } from './flipkart-coupons.component';

describe('FlipkartCouponsComponent', () => {
  let component: FlipkartCouponsComponent;
  let fixture: ComponentFixture<FlipkartCouponsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlipkartCouponsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlipkartCouponsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
