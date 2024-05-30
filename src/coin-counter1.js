export function coinCounter1(num) {
  if (isNaN(num)) {
    return 'Please enter a number.';
  }
  if (num === 0) {
    return '';
  } else if (num / 25 >= 1) {
    const quarters = Math.floor(num / 25);
    return `${quarters} quarters ` + coinCounter1(num - quarters * 25);
  } else if (num / 10 >= 1) {
    const dimes = Math.floor(num / 10);
    return `${dimes} dimes ` + coinCounter1(num - dimes * 10);
  } else if (num / 5 >= 1) {
    const nickels = Math.floor(num / 5);
    return `${nickels} nickels ` + coinCounter1(num - nickels * 5);
  } else {
    const pennies = num;
    return `${pennies} pennies ` + coinCounter1(0);
  }
}
