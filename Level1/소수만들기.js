function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function solution(nums) {
  let answer = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (isPrime(nums[i] + nums[j] + nums[k])) {
          answer.push(nums[i] + nums[j] + nums[k]);
        }
      }
    }
  }
  return answer.length;
}

console.log(solution([1,2,3,4]))
console.log(solution([1,2,7,6,4]))
console.log(solution([1,4,5,2,6,7,8,10]))