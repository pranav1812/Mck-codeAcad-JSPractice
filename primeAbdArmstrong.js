const isPrime= (n)=> {
  let isPrime= true;
  if (n<= 2) return true;
  if (n%2== 0) return false; 
  for (let i= 2; i< n/2; ++i){
    if (n%i== 0) {
      ifPrime= !isPrime;
      break;
   }
  return isPrime;
  } 
}

console.log(isPrime(13));

const isArmStrong= (n)=> {
  let s= `${n}`;
  // let arr= []
  // for (let i= 0; i< s.length; ++i) {arr.push(Number(s[i]));}
  let cubeAdd= 0;
  for (let i of s) cubeAdd+= Math.pow(Number(i), 3);
  return n=== cubeAdd;
}


console.log(isArmStrong(153));
