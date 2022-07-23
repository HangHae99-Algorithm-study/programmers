// https://school.programmers.co.kr/learn/courses/30/lessons/87389
// 2 min

function solution(n) {
    var answer = 0;

    for (let i = 0; i < n; i++) {
        if (n % i === 1) {
            return i;
        }
    }
}

// testcase
console.log(solution(10));
console.log(solution(12));
