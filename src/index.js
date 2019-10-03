module.exports = function zeros(expression) {
  // your solution
  function dvfac(x){
    let res;
    if(x<=BigInt(2)) {res = x;}
    else{res = x*dvfac(x- BigInt(2))}
    return res;
  }

  function fac(n){
    let res = (n<BigInt(2))?BigInt(1):fac(n-BigInt(1))*n;
    return res;
  }

  const newRes = [];
  let result;
  const exp = expression.split('*');

  for(let i = 0; i < exp.length; i++){
    if ( exp[i].slice(-2) === '!!'){
      result = dvfac(BigInt(parseFloat(exp[i])));
      newRes.push(result);
    } else {
      result = fac(BigInt(parseFloat(exp[i])));
      newRes.push(result);
    }
  }
  let multiply = newRes.reduce((a,b)=>a*b);
  let  zero = multiply;
  zero = String(zero);
  let zeroCount = 0;
  for(let j = zero.length-1; j >= 0; j--){
    if(zero[j]==='0'){
      zeroCount += 1;
    } else {
      break;
    }
  }
  
  return zeroCount;
}
