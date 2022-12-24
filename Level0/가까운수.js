function solution(array, n) {
  const num = Math.min(...array.map((a) => Math.abs(n - a)));
  answer = array.sort((a, b) => a - b).find((a) => Math.abs(n - a) === num);

  return answer
}

console.log(solution([3, 10, 28], 20))
console.log(solution([10, 11, 12], 13))