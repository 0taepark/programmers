function solution(s) {
    let answer = 0
    const arr = s.split(' ')
    for(let i=0 ; i<arr.length; i++){
        while(arr.includes('Z')){
            arr.splice(arr.indexOf('Z') - 1, 2)
        }
        for (let i=0 ; i<arr.length; i++){
            answer += Number(arr[i])
        }
        return answer
    }
}

console.log(solution("-1 -2 -3 Z"))