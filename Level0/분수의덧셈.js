function solution(denum1, num1, denum2, num2) {
    const denum3= denum1*num2 + denum2*num1;
    const num3= num1*num2;
    const getGCD = (x, y) => (y === 0 ? x : getGCD(y, x % y));
    const gcd = getGCD(denum3, num3);
    return [denum3/gcd,num3/gcd];
}
 console.log(solution(1,2,3,4))