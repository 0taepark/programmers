function solution(id_pw, db) {
    // 회원들의 아이디인 id_pw[0]가 포함된 배열을 추출해서 userData에 저장

    // 처음에는 userId = id_pw[0] userPw = id_pw[1]로 저장해 for문을 이용하여 비교하였는데
    // 코드가 길어지는 현상이 생긴다
    
    // 그다음에는 db.flat()을 써서 db안에 배열을 벗겨낸 다음에 userId와 userPw로 저장해
    // id_pw의 값들과 비교하였는데 벗겨낼 필요 없이 아이디가 포함된 배열을 추출하면 코드가 더 간편하다.


    const userData = db.find(([el])=> el == id_pw[0])
    //추출된 배열인 userData의 비밀번호인 userData[1] 가 회원들의 비밀번호 id_pw[1]가 같으면 "login" 그렇지 않으면 "wrong pw"
    if(userData){
       return userData[1] == id_pw[1] ? "login" : "wrong pw"
    }
    //아이디가 맞는 계정이 없으므로 "fail"
    else return "fail"
    
    }

    console.log(solution(["meosseugi", "1234"],[["rardss", "123"], ["yyoom", "1234"], ["meosseugi", "1234"]]))
    console.log(solution(["programmer01", "15789"],[["programmer02", "111111"], ["programmer00", "134"], ["programmer01", "1145"]]))
    console.log(solution(["rabbit04", "98761"],[["jaja11", "98761"], ["krong0313", "29440"], ["rabbit00", "111333"]]))