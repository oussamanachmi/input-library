import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnInputsComponent } from './on-inputs.component';

describe('OnInputsComponent', () => {
  let component: OnInputsComponent;
  let fixture: ComponentFixture<OnInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnInputsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
