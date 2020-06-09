import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeProcessComponent } from './practice-process.component';

describe('PracticeProcessComponent', () => {
  let component: PracticeProcessComponent;
  let fixture: ComponentFixture<PracticeProcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PracticeProcessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticeProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
