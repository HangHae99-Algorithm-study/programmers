// https://school.programmers.co.kr/learn/courses/30/lessons/17681
// 15 min

function solution(n, arr1, arr2) {
	var answer = [];

	// 성공 -> 0.20ms, 30MB
	for (let i = 0; i < n; i++) {
		const num_2 = (arr1[i] | arr2[i]).toString(2).padStart(n, '0');
		answer.push(num_2.split('').map((item) => item === '1' ? '#' : ' ').join(''));
	}

	return answer;
}

// testcase
let n = [5, 6];
let arr1 = [
	[9, 20, 28, 18, 11],
	[46, 33, 33, 22, 31, 50]
];

let arr2 = [
	[30, 1, 21, 17, 28],
	[27, 56, 19, 14, 14, 10]
]

for (let i = 0; i < n.length; i++) {
	console.log(solution(n[i], arr1[i], arr2[i]));
}
