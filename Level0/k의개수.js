function solution(i, j, k) {
    let arr =[]
    for(; i <= j; i++){
        arr.push(i)
    }
     answer = arr.join('').split('').filter((el) => el == k).length
     
     return answer
}

console.log(solution(1, 13, 1))
console.log(solution(10, 50, 5))
console.log(solution(3, 10 ,2))