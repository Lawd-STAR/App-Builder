import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { LearningAppService } from './learning-app.service';

describe('LearningAppService', () => {
  let service: LearningAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(LearningAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
