function solution(my_string, num1, num2) {
 
const arr = my_string.split('');
const first = arr[num1];
arr[num1] = arr[num2];
arr[num2] = first

return arr.join('')
}

console.log(solution("hello",2,4))