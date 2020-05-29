import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogFieldComponent } from './dialog-field.component';

describe('DialogFieldComponent', () => {
  let component: DialogFieldComponent;
  let fixture: ComponentFixture<DialogFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
