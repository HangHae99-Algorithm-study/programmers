// https://school.programmers.co.kr/learn/courses/30/lessons/12900

// 타일을 가로로 배치하면 n칸 중 2칸사용
// 타일을 세로로 배치하면 n칸 중 1칸사용
                                                                            // 1
// n = 1 이면 세워서 1개만 가능 따라서                                        1가지
// n = 2 이면 세로로 2개 가로로 2개 따라서                                    2가지
// n = 3 이면 세로로 3개 연달아, 가로(1)세로(2), 세로(2),가로(1)              3가지
// n = 4 이면 세로(4), 가로(1)세로(2), 세로(2)가로(1), 가로(2), 세로가로세로  5가지
// n = 5 .............. 8가지

// 1, 2, 3, 5, 8.... 피보나치 수열


function solution(n) {
  const dp = new Array(n+1).fill(0);
  console.log(dp)
  dp[0] = 1;  dp[1] = 1;
  console.log(dp)
  console.log()

  for(let i = 2; i <= n; i++) {
    dp[i] = (dp[i-2] + dp[i-1]) % 100000000;
    console.log(`dp[i] = (dp[i-2] + dp[i-1]) % 100000000 : ${dp[i]} = ${dp[i-2]} + ${dp[i-1]} %  100000000`)
    console.log(`dp[i] = (dp[i-2] + dp[i-1]) % 100000000 : ${dp[i]} = ${(dp[i-2] + dp[i-1]) % 100000000}`)
    console.log(dp)
  }  

  return dp[n];
}



// console.log(solution(4)) //5
// console.log(solution(5)) //8
// console.log(solution(6)) //13

console.log(solution(100))