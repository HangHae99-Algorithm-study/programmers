// https://school.programmers.co.kr/learn/courses/30/lessons/42748
// 10 min

function solution(array, commands) {
	var answer = [];

	// 성공 -> 0.13ms, 30MB
	for (let i = 0; i < commands.length; i++) {
		let cut_list = array.slice(commands[i][0] - 1, commands[i][1]);
		answer.push(cut_list.sort((a, b) => a - b)[commands[i][2] - 1]);
	}

	return answer;
}

// testcase
let array = [1, 5, 2, 6, 3, 7, 4];
let commands = [
	[2, 5, 3],
	[4, 4, 1],
	[1, 7, 3]
];

console.log(solution(array, commands));
