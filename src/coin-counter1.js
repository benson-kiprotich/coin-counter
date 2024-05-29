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
};
