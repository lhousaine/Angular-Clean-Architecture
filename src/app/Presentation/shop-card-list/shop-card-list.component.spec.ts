import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopCardListComponent } from './shop-card-list.component';

describe('ShopCardListComponent', () => {
  let component: ShopCardListComponent;
  let fixture: ComponentFixture<ShopCardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopCardListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
