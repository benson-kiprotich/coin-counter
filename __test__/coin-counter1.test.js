/* eslint-disable no-undef */
import { coinCounter1, coinCounter2 } from './../src/coin-counter1';

describe('Coint Counter part 1', () => {
  test('Calculate change for $4.99', () => {
    expect(coinCounter1(499)).toEqual('19 quarters 2 dimes 4 pennies ');
    expect(coinCounter1('test')).toEqual('Please enter a number.');
  });
});

describe('Coint Counter part 2', () => {
  test('Calculate change for $504', () => {
    expect(coinCounter2(504)()).toEqual(
      '20 quarters 0 dimes 0 nickels 4 pennies'
    );
  });
});
