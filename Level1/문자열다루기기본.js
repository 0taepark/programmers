function solution(s) {
  if (s.length !== 4 && s.length !== 6) {
    return false;
  }
  for (let i = 0; i < s.length; i++) {
    //
    if (isNaN(s[i]) === true) {
      return false;
    }
  }
  return true;
}

console.log(solution("a234"));
console.log(solution("1234"));
console.log(solution("10e1"));
