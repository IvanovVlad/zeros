let nol = BigInt(0);
let odin = BigInt(1);
let dva = BigInt(2);
let n;
function factorial(num) {
  n = BigInt(num);
   if (n == nol)
      { return odin; }
    else
      { return n * factorial( n - odin ); }
}
function factorial2(nat) {
  let n = BigInt(nat);
    if (n == nol || n == odin){
        return odin; 
    }
    return n * factorial2(n - dva); 
}

module.exports = function zeros(expression) {
	console.log(expression)
  let arrayOfFactorials;
  let result = BigInt(1);
  if (expression.includes('*')){
    arrayOfFactorials = expression.split('*');
    for (let i = 0; i < arrayOfFactorials.length; i++)
    {
      if (arrayOfFactorials[i].includes('!!'))
      {
        arrayOfFactorials[i] = arrayOfFactorials[i].replace('!!', '');
        arrayOfFactorials[i] = factorial2(arrayOfFactorials[i]);
        result *= arrayOfFactorials[i];
      }
      else{
        arrayOfFactorials[i] = arrayOfFactorials[i].replace('!', '');
        arrayOfFactorials[i] = factorial(arrayOfFactorials[i]);
        result *= arrayOfFactorials[i];
      }
    }
  }
  else{
    arrayOfFactorials = expression;
    if (arrayOfFactorials.includes('!!'))
      {
        arrayOfFactorials = arrayOfFactorials.replace('!!', '');
        arrayOfFactorials = factorial2(arrayOfFactorials);
        result = arrayOfFactorials;
      }
      else{
        arrayOfFactorials = arrayOfFactorials.replace('!', '');
        arrayOfFactorials = factorial(arrayOfFactorials);
        result = arrayOfFactorials;
      }
  }
  result = String(result);
  let counter = 0;
  let i = result.length-1;
  while(result[i] === '0')
  {
    counter++;
    i--;
  }
  return counter;
}