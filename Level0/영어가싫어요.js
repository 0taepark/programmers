function solution(numbers) {
    const str = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]

    for (let i=0 ; i<str.length; i++){
        numbers = numbers.replaceAll(str[i], str.indexOf(str[i]))
    }
    return Number(numbers)
}
console.log(solution("fourzerosixsevenonetwotwotwo"))