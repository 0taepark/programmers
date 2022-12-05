function solution(s) {
    let arr = s.split('')
    let answer = []

    for(let i=0; i<arr.length; i++){
        let count = arr.filter((e) => e === arr[i])
        if(count.length === 1){
            answer.push(arr[i])
        }
    }
    return answer.sort().join('')
}

console.log(solution("abcabcadc"))
console.log(solution("abdc"))