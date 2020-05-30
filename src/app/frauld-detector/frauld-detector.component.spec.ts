import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrauldDetectorComponent } from './frauld-detector.component';

describe('FrauldDetectorComponent', () => {
  let component: FrauldDetectorComponent;
  let fixture: ComponentFixture<FrauldDetectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrauldDetectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrauldDetectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
