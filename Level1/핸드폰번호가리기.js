function solution(phone_number) {
  let result = "";
  for (let i = 0; i < phone_number.length; i++) {
    if (i < phone_number.length - 4) {
      result += "*";
    } else {
      result += phone_number[i];
    }
  }
  return result;
}

console.log(solution("01033334444"));
console.log(solution("027778888"));
