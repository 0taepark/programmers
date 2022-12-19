function solution(n) {
  let answer = n.toString().split("").reverse();
  return answer.map((el) => Number(el));
}

console.log(solution(12345))