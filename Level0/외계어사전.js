function solution(spell, dic) {
  let arr = [];
  for (let i = 0; i < dic.length; i++) {
    if (
      spell.sort((a, b) => (a < b ? -1 : 1)).join("") ==
      dic[i]
        .split("")
        .sort((a, b) => (a < b ? -1 : 1))
        .join("")
    ) {
      arr.push(dic[i]);
    }
  }
  return arr.length == 1 ? 1 : 2;
}

console.log(solution(["p", "o", "s"], ["sod", "eocd", "qixm", "adio", "soo"]))
console.log(solution(["z", "d", "x"], ["def", "dww", "dzx", "loveaw"]))
console.log(solution(["s", "o", "m", "d"], ["moos", "dzx", "smm", "sunmmo", "som"]))