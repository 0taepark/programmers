function solution(age) {
    const abc = ["a","b","c","d","e","f","g","h","i","j"]
        
    
    return age.toString().split("").map((el)=> abc[Number(el)]).join("")
    }
    
    console.log(solution(23))
    console.log(solution(51))
    console.log(solution(100))