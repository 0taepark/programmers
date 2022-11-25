function solution(array) {
    const max = Math.max(...array);
    const maxIndex = array.indexOf(max);

    return [max, maxIndex]
}
console.log(solution([9, 10, 11, 8]))