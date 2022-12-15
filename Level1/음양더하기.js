function solution(absolutes, signs) {
  var answer = 0;
  for (i = 0; i < absolutes.length; i++) {
    if (signs[i] == true) {
      answer += absolutes[i];
    } else if (signs[i] == false) {
      answer -= absolutes[i];
    }
  }

  return answer;
}

console.log(solution([4,7,12],[true,false,true]))
console.log(solution([1,2,3],[false,false,true]))