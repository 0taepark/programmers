function solution(id_pw, db) {
    let result
    const userId = id_pw[0]
    const userPw = id_pw[1]
    
    for (let i=0 ; i<db.length ; i++){
    if(userId == db[i][0] && userPw == db[i][1])  {
        result = "login"
    }
    
    else if(userId == db[i][0] && userPw !==db[i][1]){
        result = "wrong pw"
    }
    else if(userId !== db[i][0] && userPw !== db[i][1]){
        result = "fail"
    }
    }
        return  result
    }

    console.log(solution(["meosseugi", "1234"],[["rardss", "123"], ["yyoom", "1234"], ["meosseugi", "1234"]]))
    console.log(solution(["programmer01", "15789"],[["programmer02", "111111"], ["programmer00", "134"], ["programmer01", "1145"]]))
    console.log(solution(["rabbit04", "98761"],[["jaja11", "98761"], ["krong0313", "29440"], ["rabbit00", "111333"]]))