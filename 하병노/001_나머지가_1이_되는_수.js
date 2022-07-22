// https://school.programmers.co.kr/learn/courses/30/lessons/87389

// 나머지가 1이 되는 수 찾기

// 자연수 n이 매개변수로 주어집니다. n을 x로 나눈 나머지가 1이 되도록 하는 가장 작은 자연수 x를 return 하도록
// solution 함수를 완성해주세요. 답이 항상 존재함은 증명될 수 있습니다.

// 제한사항
// 3 ≤ n ≤ 1,000,000



// 정리
// n을 x로 나눈 나머지가 1이 되는 수 중에서 가장 작은수 를 구한다.
// 1 부터 n 까지 모든 수를 다 나눠서 나머지를 비교하다가 최초로 1이 나오면 그걸 밷으면 될듯

function solution(n) {
    for (let x = 1; x < n; x++) {
        if (n % x === 1) {
            return  x;
        }
    }
}

console.log(solution(10));


// while문도 써보자

function anotherSolution(n) {
    let x = 1;
    while (x++) {
        if (n % x === 1) {
            return x;
        }
    }
}

console.log(anotherSolution(10));
