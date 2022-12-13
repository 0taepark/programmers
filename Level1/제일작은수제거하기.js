function solution(arr) {
  if (arr.length === 1) return [-1];
  else {
    let smallest = [...arr].sort((a, b) => a - b)[0];
    return arr.filter((n) => n !== smallest);
  }
}

console.log(solution([4,3,2,1]))
console.log(solution([10]))