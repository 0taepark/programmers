function solution(letter) {
    const morse = { 
        '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
        '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
        '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
        '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
        '-.--':'y','--..':'z'
    }
    const arr = letter.split(' ')
    
    return arr.map((e) => morse[e]).join('')
    }

    console.log(solution(".... . .-.. .-.. ---"))
    console.log(solution(".--. -.-- - .... --- -."))