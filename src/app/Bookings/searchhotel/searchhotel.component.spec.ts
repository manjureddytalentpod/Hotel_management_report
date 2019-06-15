import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchhotelComponent } from './searchhotel.component';

describe('SearchhotelComponent', () => {
  let component: SearchhotelComponent;
  let fixture: ComponentFixture<SearchhotelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchhotelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchhotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
