function solution(my_string) {
    let arr = my_string.split('')

    for(let i=0 ; i<arr.length; i++){
       arr[i] === arr[i].toUpperCase() ? arr[i] = arr[i].toLowerCase() : arr[i] = arr[i].toUpperCase()
    }
    return arr.join('')
}

console.log(solution("Park YoungTae"))