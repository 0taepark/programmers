function solution(s){
    const p = s.toUpperCase().split('P').length
    const y = s.toUpperCase().split('Y').length
        
        return p == y ? true : false
    
    }

    console.log(solution("pPoooyY"))
    console.log(solution("Pyy"))