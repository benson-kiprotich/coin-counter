const coinCounter1 = require('./../src/coin-counter1');

describe('Coint Counter part 1', () => {
  test('Calculate change for $4.99', () => {
    expect(coinCounter1(499)).toEqual('19 quarters 2 dimes 4 pennies ');
    expect(coinCounter1('test')).toEqual('Please enter a number.');
  });
});
