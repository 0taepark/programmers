function solution(arr, divisor) {
  let newArr = arr.filter((el) => el % divisor == 0).sort((a, b) => a - b);

  return newArr.length !== 0 ? newArr : [-1];
}

console.log(solution([5, 9, 7, 10], 5))
console.log(solution([2, 36, 1, 3], 1))
console.log(solution([3,2,6], 10))