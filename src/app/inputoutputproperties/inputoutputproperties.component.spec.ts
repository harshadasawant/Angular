import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputoutputpropertiesComponent } from './inputoutputproperties.component';

describe('InputoutputpropertiesComponent', () => {
  let component: InputoutputpropertiesComponent;
  let fixture: ComponentFixture<InputoutputpropertiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputoutputpropertiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputoutputpropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
