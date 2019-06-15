import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterhotelComponent } from './filterhotel.component';

describe('FilterhotelComponent', () => {
  let component: FilterhotelComponent;
  let fixture: ComponentFixture<FilterhotelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterhotelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterhotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
