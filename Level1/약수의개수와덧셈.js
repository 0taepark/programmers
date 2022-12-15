function solution(left, right) {
  var answer = 0;

  for (left; left <= right; left++) {
    let number = 0;
    for (j = 1; j <= left; j++) {
      if (left % j == 0) {
        number++;
      }
    }
    if (number % 2 == 1) {
      answer -= left;
    } else {
      answer += left;
    }
  }
  return answer;
}

console.log(solution(13, 17))
console.log(solution(24, 27))