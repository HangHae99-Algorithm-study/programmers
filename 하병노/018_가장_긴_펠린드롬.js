// https://school.programmers.co.kr/learn/courses/30/lessons/12904?language=javascript

function solution(s) {
  let len = s.length
  let answer = -1
  for (let i = 0; i < len; i++) {
    if (answer > -1) break
    for (let t = 0; t <= i; t++) {
      if (s[t]===s[len-i+t-1]&&is_palindrome(s.slice(t, len - i + t))) {
        answer = len - i
        break
      }
    }
  }

  return answer;
}
function is_palindrome(s) {
  let chk = true
  for (let i = 1; i < s.length; i++) {
    if (s[i] != s[s.length - 1 - i]) {
      chk = false
      break
    }
  }
  return chk
}






const s = ["abcdcba", '토마토맛토마토', '기러기', '안녕안녕']

for (let i = 0; i < s.length; i++) {
  console.log(solution(s[i]))
}