import { MoneyconverterPipe } from './moneyconverter.pipe';

describe('MoneyconverterPipe', () => {
  it('create an instance', () => {
    const pipe = new MoneyconverterPipe();
    expect(pipe).toBeTruthy();
  });
});
