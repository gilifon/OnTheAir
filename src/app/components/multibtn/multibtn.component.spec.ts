import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultibtnComponent } from './multibtn.component';

describe('MultibtnComponent', () => {
  let component: MultibtnComponent;
  let fixture: ComponentFixture<MultibtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultibtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultibtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
