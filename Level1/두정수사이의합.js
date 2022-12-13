function solution(a, b) {
  let arr = [];
  if (a == b) {
    return a;
  }
  if (a > b) {
    const temp = b;
    b = a;
    a = temp;
  }
  for (let i = a; i <= b; i++) {
    arr.push(i);
  }
  return arr.reduce((a, b) => a + b);
}
