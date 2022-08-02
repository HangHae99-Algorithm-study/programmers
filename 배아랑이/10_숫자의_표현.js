// https://school.programmers.co.kr/learn/courses/30/lessons/12924
// 20 min

function solution(n) {
	var answer = 0;
	var sum = 0;

	// 효율성 테스트 3, 4, 5, 6 통과 X
	// else if에 break를 넣으니까 성공!
	// 성공 -> 3.48ms, 32.5MB
	for (let i = 1; i <= n; i++) {
		sum = 0;
		for (let j = i; j <= n; j++) {
			sum += j;

			if (sum > n) {
				break;
			} else if (sum === n) {
				answer++;
				break;
			}
		}
	}

	return answer;
}

// testcase
console.log(solution(15));
console.log(solution(9999));
console.log(solution(10000));
