import { CompanyService } from './company.service';
import { Employee } from './employee';

describe('Employee', () => {
  it('should create an instance', () => {
    expect(new Employee()).toBeTruthy();
  });
});
