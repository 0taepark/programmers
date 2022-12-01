function solution(my_str , n) {
    var result = []
    for( let i=0 ; i<my_str.length ; i+=n ){
        result.push(my_str.slice( i , i+n+1 ))

    }
    return result
}

console.log(solution("abc1Addfggg4556b",6))