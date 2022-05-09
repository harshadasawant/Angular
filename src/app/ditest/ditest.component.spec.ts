import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DITestComponent } from './ditest.component';

describe('DITestComponent', () => {
  let component: DITestComponent;
  let fixture: ComponentFixture<DITestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DITestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DITestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
