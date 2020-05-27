import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourProcessComponent } from './your-process.component';

describe('YourProcessComponent', () => {
  let component: YourProcessComponent;
  let fixture: ComponentFixture<YourProcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourProcessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
