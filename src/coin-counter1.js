const coinCounter1 = (amount) => {
  // Define coin values
  const coinValues = {
    quarters: 25,
    dimes: 10,
    nickels: 5,
    pennies: 1,
  };

  // Base case: when amount becomes zero, return an object with all coins set to zero
  if (amount === 0) {
    return {
      quarters: 0,
      dimes: 0,
      nickels: 0,
      pennies: 0,
    };
  }

  // Initialize an object to store the result
  let result = {};

  // Find the largest coin that is less than or equal to the amount
  for (const coin in coinValues) {
    const coinValue = coinValues[coin];

    if (amount >= coinValue) {
      // Calculate the number of coins needed
      const numCoins = Math.floor(amount / coinValue);
      // Recursively calculate change for the remaining amount after subtracting the current coin value
      const remainingChange = calculateChangeRecursively(
        amount - numCoins * coinValue
      );
    }
  }

  return result;
};
