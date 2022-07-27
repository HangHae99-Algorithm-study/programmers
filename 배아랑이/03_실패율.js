// https://school.programmers.co.kr/learn/courses/30/lessons/42889
// 36 min

function solution(N, stages) {
	var answer = [];
	var stages_player = stages.length; // 스테이지 플레이어
	var fail_rate = []; // 실패율

	// 성공 -> 109.87ms, 40MB
	// 첫번째 풀이
	for (let i = 0; i < N; i++) {
		var count = 0;

		// count = 해당 스테이지를 통과하지 못한 플레이어 수
		for (let j = 0; j < stages.length; j++) {
			if (stages[j] === i + 1) {
				count++;
			}
		}

		// 남아있는 플레이어 수가 0이면 실패율을 0으로 정함.
		if (stages_player <= 0) {
			fail_rate.push(0);
		} else {
			fail_rate.push(count / stages_player);
			stages_player -= count;
		}
	}
	console.log(fail_rate);

	for (let i = 0; i < fail_rate.length; i++) {
		const max_idx = fail_rate.indexOf(Math.max(...fail_rate));
		// console.log(Math.max(...fail_rate), max_idx);

		if (max_idx >= 0) {
			answer.push(max_idx + 1);
			fail_rate[max_idx] = -1;
		}
	}


	// =====================================================================
	// 1361.21ms, 39.4MB -> 더 느리다
	// 참고한 풀이
	// answer.push([index, fail_rate]) -> 배열로 answer에 넣음
	
	for (let i = 0; i < N; i++) {
		const count = stages.filter((item) => item === i + 1).length;
		answer.push([i + 1, count / stages_player]);
		stages_player -= count;
	}

	// fail_rate 기준 내림차순 정렬
	answer = answer.sort((a, b) => b[1] - a[1]);
	answer = answer.map((item) => item[0]);

	return answer;
}

// testcase
let N = [5, 4, 5];
let stages = [
	[2, 1, 2, 6, 2, 4, 3, 3],
	[4, 4, 4, 4, 4],
	[1, 1, 1, 1]
];

for (let i = 0; i < N.length; i++) {
	console.log(solution(N[i], stages[i]));
}