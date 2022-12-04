function solution(emergency){
    const highest = [...emergency].sort((a,b) => b-a)
    const answer = emergency.map(el => highest.indexOf(el) + 1)

    return answer
}

console.log(solution([3, 76, 24]))
console.log(solution([1, 2, 3, 4, 5, 6, 7]))
console.log(solution([30, 10, 23, 6, 100]))
