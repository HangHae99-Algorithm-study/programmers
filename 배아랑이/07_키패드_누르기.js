// https://school.programmers.co.kr/learn/courses/30/lessons/67256
// 45 min

function solution(numbers, hand) {
	var answer = '';

	// 성공 -> 1.14ms, 30.2MB
	var keypad = [
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9],
		[10, 11, 12]
	];

	// 초기 값 행열 넣음
	var left = [3, 0];		// *
	var right = [3, 2];		// #

	for (let i = 0; i < numbers.length; i++) {
		// 0이면 11로 바꿈(keypad 참고)
		if (numbers[i] === 0) {
			numbers[i] = 11;
		}

		let tmp = '';

		for (let j = 0; j < keypad.length; j++) {
			if (numbers[i] === keypad[j][0]) {
				left = [j, 0];
				tmp = 'L';
				break;
			} else if (numbers[i] === keypad[j][2]) {
				right = [j, 2];
				tmp = 'R';
				break;
			}
		}

		// 중앙값 -> 2, 5, 8, 0
		if (tmp === '') {
			// parseInt(5/3) -> 1 -> 행으로 여김
			// 행의 차이, 열의 차이의 더함
			const dist_left = Math.abs(parseInt(numbers[i] / 3) - left[0]) + Math.abs(1 - left[1]);
			const dist_right = Math.abs(parseInt(numbers[i] / 3) - right[0]) + Math.abs(1 - right[1]);
			// console.log('divide', left, right, dist_left, dist_right);

			// 왼손의 거리, 오른손의 거리 -> 차이를 비교
			if (dist_left === dist_right) {
				// 왼손잡이, 오른손잡이에 따라 손 결정
				if (hand === 'left') {
					left = [parseInt(numbers[i] / 3), 1];
					tmp += 'L';
				} else {
					right = [parseInt(numbers[i] / 3), 1];
					tmp += 'R';
				}
			} else if (dist_left < dist_right) {
				left = [parseInt(numbers[i] / 3), 1];
				tmp += 'L';
			} else {
				right = [parseInt(numbers[i] / 3), 1];
				tmp += 'R';
			}
		}

		answer += tmp;
	}

	return answer;
}

// testcase
let numbers = [
	[1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5],
	[7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2],
	[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
]

let hand = ["right", "left", "right"];

for (let i = 0; i < numbers.length; i++) {
	console.log(solution(numbers[i], hand[i]));
}
