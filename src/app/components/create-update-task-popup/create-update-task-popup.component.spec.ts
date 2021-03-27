import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUpdateTaskPopupComponent } from './create-update-task-popup.component';

describe('CreateUpdateTaskPopupComponent', () => {
  let component: CreateUpdateTaskPopupComponent;
  let fixture: ComponentFixture<CreateUpdateTaskPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUpdateTaskPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUpdateTaskPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
