function solution(str1, str2) {
    const answer = str1.includes(str2) ? 1 : 2
    
    return answer;
}

console.log(solution("ab6CDE443fgh22iJKlmn1o","6CD"))