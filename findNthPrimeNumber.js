const nthPrime = function(desiredCount) {
  let count = 3;
  let number = 5;
  let desiredPrime = 0;
  let halfNumber = 0;
  if(desiredCount >= 1) {
    while(count <= desiredCount) {
      let factor = 2;
      halfNumber = Math.ceil(number/2);
      while(factor < halfNumber) {
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
