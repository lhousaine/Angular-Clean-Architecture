import { TestBed } from '@angular/core/testing';
import {UserMockRepository} from './user-mock.repository';


describe('UserMock.RepositoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({providers:[UserMockRepository]}));

  it('should be created', () => {
    const service: UserMockRepository = TestBed.get(UserMockRepository);
    expect(service).toBeTruthy();
  });
});
