// https://school.programmers.co.kr/learn/courses/30/lessons/60057
// fail -> 추가시간에 풀음

function solution(s) {
  var answer_list = [];

	// 성공
	// s의 길이가 1인 경우!!!! -> 테스트케이스 5번 통과
	if (s.length === 1) {
		return 1;
	}

	// 실패
	// 테스트 케이스 5번 통과 X
  for (let i = 1; i <= s.length / 2; i++) {
		let s_zip = '';
    for (let j = 0; j < s.length; j+=i) {
			if (s.slice(j, j+i) === s.slice(j+i, j+(i*2))) {
				let count = 1;
				while(j < s.length) {
					if (s.slice(j, j+i) === s.slice(j+i, j+(i*2))) {
						count++;
					} else {
						break;
					}
					j += i;
				}

				// console.log(count);
				s_zip += count.toString() + s.slice(j, j+i);
			} else {
				s_zip += s.slice(j, j+i);
			}
    }
		// console.log(s_zip);
		answer_list.push(s_zip.length);
  }
	// console.log(answer_list);

  return Math.min(...answer_list);
}

// testcase
let a = [
  "aabbaccc",
  "ababcdcdababcdcd",
	"a",
  "abcabcdede",
  "abcabcabcabcdededededede",
  "xababcdcdababcdcd",
];

for (let i = 0; i < a.length; i++) {
  console.log(solution(a[i]));
}
