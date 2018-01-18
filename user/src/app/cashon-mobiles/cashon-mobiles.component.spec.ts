import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashonMobilesComponent } from './cashon-mobiles.component';

describe('CashonMobilesComponent', () => {
  let component: CashonMobilesComponent;
  let fixture: ComponentFixture<CashonMobilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashonMobilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashonMobilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
