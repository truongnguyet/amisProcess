import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFieldComponent } from './list-field.component';

describe('ListFieldComponent', () => {
  let component: ListFieldComponent;
  let fixture: ComponentFixture<ListFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
