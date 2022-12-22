function solution(number) {
  let answer = 0;

  for (let i = 0; i < number.length; i++) {
    for (let j = i + 1; j < number.length; j++) {
      let num = (number[i] + number[j]) * -1;
      let count = number.slice(j + 1).filter((el) => el === num).length;

      answer += count;
    }
  }
  return answer;
}

console.log(solution([-2, 3, 0, 2, -5]))
console.log(solution([-3, -2, -1, 0, 1, 2, 3]))
console.log(solution([-1, 1, -1, 1]))