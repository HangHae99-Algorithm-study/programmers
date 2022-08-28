// https://school.programmers.co.kr/learn/courses/30/lessons/12939
// 5 min

function solution(s) {
	var answer = '';

	// 성공 -> 0.29ms, 30.2MB
	var s_num = s.split(' ').map((item) => Number(item)).sort((a, b) => a - b);
	answer = s_num[0] + ' ' + s_num[s_num.length - 1];

	// 두번째 풀이 -> 0.23ms, 30.4MB
	// Math.min(), Math.max() 사용
	var s_num = s.split(' ').map((item) => Number(item));
	answer = Math.min(...s_num) + ' ' + Math.max(...s_num);

	// 문자열에 바로 ... 사용해도 숫자로 사용 가능
	answer = Math.min(...s) + ' ' + Math.max(...s);

	return answer;
}

// testcase
let s = ["1 2 3 4", "-1 -2 -3 -4", "-1 1"]

s.forEach((item) => console.log(solution(item)));
