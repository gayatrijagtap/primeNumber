const nthPrime = function(desiredCount) {
  let count = 3;
  let number = 5;
  let desiredPrime = 0;
  let sqrtOfNum = 0;
  if(desiredCount >= 1) {
    while(count <= desiredCount) {
      let factor = 2;
      sqrtOfNumber = Math.ceil(Math.sqrt(number));
      while(factor <= sqrtOfNumber) {
        if(number%factor == 0) {
          factor = number;
        }
        factor = factor + 1;
      }
      if(factor == (number + 1)) {
        number++;
      }else{
        desiredPrime = number;
        number++;
        count++;
      }
    }
    return(desiredPrime);
  }else{
    return("invalid input");
  }
}
console.log(nthPrime(+process.argv[2]));
