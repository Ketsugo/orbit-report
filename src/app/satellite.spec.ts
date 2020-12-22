import { Satellite } from './satellite';

describe('Satellite', () => {
  it('should create an instance', () => {
    expect(new Satellite("test", "test type", "12-31-1969", "test orbit", true)).toBeTruthy();
  });
});
