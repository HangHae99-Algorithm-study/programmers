// https://school.programmers.co.kr/learn/courses/30/lessons/17682

const solution = (dartResult) => {
  let score = 0;
  let answer = [];
  let temp = 0; // 숫자 담을 변수

  for (let i = 0; i < dartResult.length; i++) {
    if (dartResult[i] >= 0 && dartResult[i] <= 9) {
      //숫자일 경우
      if (dartResult[i] == 1 && dartResult[i + 1] == 0) {
        // 10일 경우 10으로 만들어주고 0을 건너뛰기 위해 i++ 해줌.
        temp = 10;
        i++;
      } else {
        // 0이 아닐 경우 그대로 temp에 넣어줌.
        temp = dartResult[i];
      }
    } else if (dartResult[i] === 'S') {
      // 1제곱
      answer.push(temp);
    } else if (dartResult[i] === 'D') {
      // 2제곱
      answer.push(Math.pow(temp, 2));
    } else if (dartResult[i] === 'T') {
      // 3제곱
      answer.push(Math.pow(temp, 3));
    } else if (dartResult[i] === '#') {
      answer[answer.length - 1] *= -1; // 아차상, 해당 점수 -
    } else if (dartResult[i] === '*') {
      // 스타상, (직전 + 해당) *2
      answer[answer.length - 1] *= 2;
      answer[answer.length - 2] *= 2;
    }
  }
  for (let i = 0; i < answer.length; i++) {
    // 보너스, 옵션 적용된 점수들 합치기
    score += Number(answer[i]);
  }

  return score;
};

console.log(solution('1S2D*3T')); // 37
console.log(solution('1D2S#10S')); // 9
console.log(solution('1D2S0T')); // 3
console.log(solution('1S*2T*3S')); // 23
console.log(solution('1D#2S*3S')); // 5
console.log(solution('1T2D3D#')); // -4
console.log(solution('1D2S3T*')); // 59
