function solution(n, numlist) {
    
    return numlist.filter(number => number % n === 0 )
}
console.log(solution(3,[4, 5, 6, 7, 8, 9, 10, 11, 12]))