// https://school.programmers.co.kr/learn/courses/30/lessons/12909
// 15 min

function solution(s) {
  let cnt = 0;

  // 실패 -> 정확성 테스트 2, 4, 5, 6, 11, 18 통과 X
  // s.split("").forEach((item, idx) => {
  // 	if (item === "(") {
  // 		cnt++;
  // 	} else if (item === ")") {
  // 		idx !== 0 ? cnt-- : cnt;
  // 	}
  // 	console.log(cnt, answer);
  // });

  // 실패 -> 정확성 테스트 4, 5, 11, 18 통과 X / 효율성 테스트 시간초과
  // for (i = 0; i < s.length; i++) {
  //   if (i === 0 && s[i] === ")") {
  //     return false;
  //   } else if (s[i] === "(") {
  //     cnt++;
  //   } else {
  //     cnt--;
  //   }
  // }

	// 성공 -> 3.43ms, 37MB
  for (i = 0; i < s.length; i++) {
		if (s[i] === "(") {
      cnt++;
    } else if (s[i] === ")" && cnt > 0) {
      cnt--;
    } else {
      return false;
    }
  }

  return cnt === 0 ? true : false;
}

const s = ["()()", "(())()", ")()(", "(()(", "((())))", "()))((()"];

s.forEach((item) => console.log(solution(item)));
