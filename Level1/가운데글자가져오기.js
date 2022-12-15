function solution(s) {
  let mid = Math.floor(s.length / 2);

  return s.length % 2 == 1 ? s[mid] : s.slice(mid - 1, mid + 1);
}

console.log(solution("abcde"))
console.log(solution("qwer"))