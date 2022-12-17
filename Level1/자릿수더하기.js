function solution(n) {
  let arr = n.toString().split("");
  let answer = 0;
  for (let i = 0; i < arr.length; i++) {
    answer += Number(arr[i]);
  }
  return answer;
}

console.log(solution(123))
console.log(solution(987))