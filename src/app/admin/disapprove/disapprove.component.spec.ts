import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisapproveComponent } from './disapprove.component';

describe('DisapproveComponent', () => {
  let component: DisapproveComponent;
  let fixture: ComponentFixture<DisapproveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisapproveComponent]
    });
    fixture = TestBed.createComponent(DisapproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
