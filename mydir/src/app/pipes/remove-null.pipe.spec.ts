import { RemoveNullPipe } from './remove-null.pipe';

describe('RemoveNullPipe', () => {
  it('create an instance', () => {
    const pipe = new RemoveNullPipe();
    expect(pipe).toBeTruthy();
  });
});
