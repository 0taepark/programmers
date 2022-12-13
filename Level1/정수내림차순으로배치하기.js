function solution(n) {
  const answer = n
    .toString()
    .split("")
    .sort((a, b) => b - a)
    .join("");
  return Number(answer);
}

console.log(solution(123456789));
