function solution(s) {
  let answer = [];
  s = s.split(" ").sort((a, b) => a - b);
  answer.push(s.shift());
  answer.push(s.pop());

  return answer.join(" ");
}

console.log(solution("1 2 3 4"))
console.log(solution("-1 -2 -3 -4"))
console.log(solution("-1 -1"))