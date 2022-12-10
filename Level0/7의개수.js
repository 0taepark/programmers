function solution(array) {
    return array.join('').split('').filter((el) => el === "7").length
 }

 console.log(solution([7, 77, 17]))
 console.log(solution([10, 29]))