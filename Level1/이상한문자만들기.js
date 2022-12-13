function solution(s) {
  const arr = s.split(" ");
  const answer = arr
    .map((el) =>
      el
        .split("")
        .map((el, index) =>
          index % 2 == 0 ? el.toUpperCase() : el.toLowerCase()
        )
        .join("")
    )
    .join(" ");

  return answer;
}

console.log(solution("try hello world"));
