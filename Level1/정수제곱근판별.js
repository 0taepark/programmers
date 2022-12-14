function solution(n) {
  let sqrt = parseInt(Math.sqrt(n));
  return sqrt * sqrt == n ? (sqrt + 1) * (sqrt + 1) : -1;
}

console.log(solution(121))
console.log(solution(3))