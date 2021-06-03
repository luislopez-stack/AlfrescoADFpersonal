import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstDatatableComponent } from './first-datatable.component';

describe('FirstDatatableComponent', () => {
  let component: FirstDatatableComponent;
  let fixture: ComponentFixture<FirstDatatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstDatatableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
