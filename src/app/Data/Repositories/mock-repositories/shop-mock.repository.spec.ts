import { TestBed } from '@angular/core/testing';
import {ShopMockRepository} from './shop-mock.repository';


describe('ShopMock.RepositoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShopMockRepository = TestBed.get(ShopMockRepository);
    expect(service).toBeTruthy();
  });
});
