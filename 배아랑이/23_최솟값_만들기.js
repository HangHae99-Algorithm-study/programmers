// https://school.programmers.co.kr/learn/courses/30/lessons/12941?language=javascript
// 3 min

function solution(A, B) {
  var answer = 0;

  // 성공 -> 0.97ms, 30.2MB
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  for (let i = 0; i < A.length; i++) {
    answer += A[i] * B[i];
  }

  return answer;
}

// testcase
let A = [
  [1, 4, 2],
  [5, 4, 4],
];

let B = [
  [1, 2],
  [3, 4],
];

for (let i = 0; i < A.length; i++) {
  console.log(solution(A[i], B[i]));
}
