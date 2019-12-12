import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrefferedShopsComponent } from './preffered-shops.component';

describe('PrefferedShopsComponent', () => {
  let component: PrefferedShopsComponent;
  let fixture: ComponentFixture<PrefferedShopsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrefferedShopsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrefferedShopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
