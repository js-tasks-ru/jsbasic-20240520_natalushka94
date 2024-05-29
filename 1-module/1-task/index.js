function factorial(n) {
  let result = n;
  let i = 1;
  if (n < 0) {
    return;
  }
  else if (n === 0) {
    return 1;
  }
  else {
    while ((n - i) >= 1) {
      result = result * (n - i);
      i++;
    }
  }
  return result;
}
