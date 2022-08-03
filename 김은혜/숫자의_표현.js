// 1부터 하나씩 더한 수를 더해준다.
// 더한 수가 n이 되면 멈추고 cnt를 적립한다.
// 더한 수가 n을 초과하는 값이면 멈추고 다음으로 간다.
// 2부터 하나씩 더하기 시작한다.

function solution(n) {
  let answer = 0;
  let cnt = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = i; j <= n; j++) {
      answer += j;
      if (answer === n) {
        cnt++;
        answer = 0;
        break;
      } else if (answer > n) {
        answer = 0;
        break;
      }
    }
  }
  return cnt;
}
