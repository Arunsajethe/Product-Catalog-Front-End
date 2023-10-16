import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WirelineComponent } from './wireline.component';

describe('WirelineComponent', () => {
  let component: WirelineComponent;
  let fixture: ComponentFixture<WirelineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WirelineComponent]
    });
    fixture = TestBed.createComponent(WirelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
