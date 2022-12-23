function solution(sizes) {
  let max = [];
  let min = [];

  for (let i = 0; i < sizes.length; i++) {
    max.push(Math.max(...sizes[i]));
    min.push(Math.min(...sizes[i]));
  }
  max.sort((a, b) => b - a);
  min.sort((a, b) => b - a);
  answer = max[0] * min[0];
  return answer;
}

console.log(solution([[60, 50], [30, 70], [60, 30], [80, 40]]))
console.log(solution([[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]]))
console.log(solution([[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]]))