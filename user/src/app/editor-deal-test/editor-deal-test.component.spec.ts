import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorDealTestComponent } from './editor-deal-test.component';

describe('EditorDealTestComponent', () => {
  let component: EditorDealTestComponent;
  let fixture: ComponentFixture<EditorDealTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorDealTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorDealTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
