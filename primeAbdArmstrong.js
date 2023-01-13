const isPrime= (n)=> {
  let isPrime= true;
  for (let i= 2; i< n/2; ++i){
    if (n%i== 0) {
      ifPrime= !isPrime;
      break;
   }
  return isPrime;
  } 
}

const isArmStrong= (n)=> {
  let s= `${n}`;
  let arr= []
  for (let i= 0; i< s.length; ++i) {arr.push(Number(s[i]));}
  let cubeAdd= 0;
  for (let i in arr) cubeAdd+= Math.pow(i, 3);
  return n=== cubeAdd;
}


