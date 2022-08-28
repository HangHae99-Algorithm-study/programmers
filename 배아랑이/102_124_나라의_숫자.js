// https://school.programmers.co.kr/learn/courses/30/lessons/12899
// fail

function solution(n) {
	var answer = '';

	// 참고한 풀이
	// 아에 배열로 선언하여 인덱싱
	// 3의 배수일 때 나누고 몫에서 1을 뺌
	var n_list = ['4', '1', '2']

	while (n) {
		let tmp = n % 3;
		answer = n_list[tmp] + answer;
		n = tmp === 0 ? n/3 - 1 : parseInt(n/3);
	}

	return answer;
}

// testcase
let n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

n.forEach((item) => console.log('answer', solution(item)));
