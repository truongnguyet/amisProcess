import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmProcessComponent } from './confirm-process.component';

describe('ConfirmProcessComponent', () => {
  let component: ConfirmProcessComponent;
  let fixture: ComponentFixture<ConfirmProcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmProcessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
