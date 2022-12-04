function solution(order) {
    let arr = order.toString().split('')
    return arr.filter(n => n === "3" || n === "6" || n === "9").length
}

console.log(solution(29423))