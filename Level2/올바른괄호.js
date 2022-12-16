function solution(s) {
  tmp = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(") {
      tmp.push(s[i]);
    } else if (s[i] == ")" && tmp[tmp.length - 1] == "(") {
      tmp.pop();
    } else return false;
  }
  if (tmp.length != 0) return false;
  else return true;
}

console.log(solution("()()"))
console.log(solution("(())()"))
console.log(solution(")()("))
console.log(solution("(()("))