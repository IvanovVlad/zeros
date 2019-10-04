function coefFact(num, coef) {
  if (num <= 3) {
    return num
  }
  else {
    if (coef == 1 || (coef == 2 && num % 2 != 0)) {
      let tmp = 1;
      for (let i = 1 + coef; i <= num; i += coef)
        tmp = tmp * i;
      return tmp;
    }
    else {
      let tmp = 2;
      for (let i = 4; i <= num; i += coef) {
        tmp = tmp * i;
      }
      return tmp;
    }
  }

}
function calculate(expr) {
  let result = BigInt(1);
    let substring = expr;
    if (expr.includes('*')) {
      substring = expr.split('*')
      for (let i = 0; i < substring.length; i++) {
        if (substring[i].includes('!!')) {
          substring[i] = substring[i].replace('!!', '');
          result *= BigInt(coefFact(Number(substring[i]), 2));
        }
        else {
          substring[i] = substring[i].replace('!', '');
          result *= BigInt(coefFact(Number(substring[i]), 1));
        }
      }
    }
    else{
      if (substring.includes('!!')) {
          substring = substring.replace('!!', '');
          result *= BigInt(coefFact(Number(substring), 2));
        }
        else {
          substring = substring.replace('!', '');
          result *= BigInt(coefFact(Number(substring), 1));
        }
    }
    return result;
}

module.exports = function zeros(expression) {
  let result = String(calculate(expression));
  console.log(result);
  let counter = 0;
  let i = result.length-1;
  console.log(result[i])
  while(result[i] === '0')
  {
    counter++;
    i--;
  }
  
  return counter;
}