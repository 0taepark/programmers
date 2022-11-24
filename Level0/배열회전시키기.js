function solution(numbers, direction) {
    direction === "right" ? numbers.unshift(numbers.pop()) : numbers.push(numbers.shift())
    return numbers
}

console.log(solution([1, 2, 3, 4, 5],"right"))