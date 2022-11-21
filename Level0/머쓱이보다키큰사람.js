function solution (array, height) {
    return array.filter(el => el > height).length;
}

console.log(solution([187,173,171,167], 170))

