const nationalCodeValidation = (input) => {
  if (!/^\d{10}$/.test(input)
      || input==='0000000000'
      || input==='1111111111'
      || input==='2222222222'
      || input==='3333333333'
      || input==='4444444444'
      || input==='5555555555'
      || input==='6666666666'
      || input==='7777777777'
      || input==='8888888888'
      || input==='9999999999'
  ) return false;

  let check = +input[9];
  let sum =
    Array(9)
      .fill()
      .map((_, i) => +input[i] * (10 - i))
      .reduce((x, y) => x + y) % 11;
  return (sum < 2 && check === sum) || (sum >= 2 && check + sum === 11);
};

export default nationalCodeValidation;
