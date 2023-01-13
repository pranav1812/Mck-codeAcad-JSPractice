const isPrime= (num)=> {
  let isPrime= true;
  if (num<= 2) return true;
  if (num%2== 0) return false; 
  for (let ind= 2; ind< Math.sqrt(num) +1; ++ind){
    if (num%ind== 0) {
      ifPrime= !isPrime;
      break;
   }
  return isPrime;
  } 
}

console.log(isPrime(13));

const isArmStrong= (num)=> {
  let str= `${num}`;
  // let arr= []
  // for (let i= 0; i< str.length; ++i) {arr.push(Number(str[i]));}
  let cubeAdd= 0;
  for (let i of str) cubeAdd+= Math.pow(Number(i), 3);
  return num=== cubeAdd;
}


console.log(isArmStrong(153));
