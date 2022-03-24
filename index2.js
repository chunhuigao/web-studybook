var replaceNonCoprimes = function (nums) {
  
  const len = nums.length;

  for (let i = len-2; i >=0 ; i--) {
    const n1 = nums[i]
    const n2 = nums[i + 1]
    if(!isPrime(n1) && !isPrime(n2)){

    }else{

    }
  }
}

function isPrime(number) {
  if (number === 2) {
    return true
  } else if (number % 2 === 0) {
    return false
  }
  var squareRoot = Math.sqrt(number)
  for (var i = 3; i <= squareRoot; i += 2) {
    if (number % i === 0) {
      return false
    }
  }
  return true
}
