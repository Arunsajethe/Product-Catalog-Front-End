import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSubproductComponent } from './create-subproduct.component';

describe('CreateSubproductComponent', () => {
  let component: CreateSubproductComponent;
  let fixture: ComponentFixture<CreateSubproductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateSubproductComponent]
    });
    fixture = TestBed.createComponent(CreateSubproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
