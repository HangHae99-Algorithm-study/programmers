// https://school.programmers.co.kr/learn/courses/30/lessons/12903
// 5 min

function solution(s) {
	var answer = '';

	// 성공 -> 0.11ms, 30.1MB
	if (s.length % 2 === 0) {
		answer = s.slice(s.length / 2 - 1, s.length / 2 + 1);
	} else {
		answer = s[parseInt(s.length / 2)];
	}

	return answer;
}

// testcase
let s = ["abcde", "qwer"];

for (let i = 0; i < s.length; i++) {
	console.log(solution(s[i]));
}