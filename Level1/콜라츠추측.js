function solution(num) {
  let count = 0;
  while (num !== 1 && count < 500) {
    num % 2 === 0 ? (num = num / 2) : (num = num * 3 + 1);
    count++;
  }
  if (num === 1) {
    return count;
  } else {
    return -1;
  }
}

console.log(solution(6))
console.log(solution(16))
console.log(solution(626331))