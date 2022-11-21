function solution(my_string) {
    return new_string = [...new Set(my_string)].join('')
}

console.log(solution("We are the world"))