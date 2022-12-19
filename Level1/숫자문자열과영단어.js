function solution(s) {
  const str = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  for (let i = 0; i < 10; i++) {
    s = s.replaceAll(str[i], str.indexOf(str[i]));
  }

  return Number(s);
}

console.log(solution("one4seveneight"))
console.log(solution("23four5six7"))
console.log(solution("2three45sixseven"))
console.log(solution("123"))