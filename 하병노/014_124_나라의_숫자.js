// https://school.programmers.co.kr/learn/courses/30/lessons/12899

// 124 나라가 있습니다. 124 나라에서는 10진법이 아닌 다음과 같은 자신들만의 규칙으로 수를 표현합니다.



// for (let i= 1; i < 11; i++) {
//     console.log("10진법 : ",i);
//     console.log("3진법 : ",i.toString(3));
//     console.log("3진법으로 나타낸 수를 각각 치환할 수 있다면? : ",i.toString(3).replace(/0/g, 1));
// }



function solution(n) {
    let answer = '';
    let remainder = 0;

    while (n>0) {
        remainder = n % 3;
        n = Math.floor(n / 3);
        console.log('n :',n)
        if (remainder === 0) {
            n -= 1;
            remainder = 4;
        }
        answer = remainder + answer
    }
    return answer;
}





console.log(solution(1))
console.log(solution(2))
console.log(solution(3))
console.log(solution(4))