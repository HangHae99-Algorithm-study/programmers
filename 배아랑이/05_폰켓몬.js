// https://school.programmers.co.kr/learn/courses/30/lessons/1845
// 10 min

function solution(nums) {
	var answer = 0;

	// 성공 -> 0.50ms, 30.3MB
	var pieces = new Set(nums).size;

	answer = pieces >= nums.length / 2 ? nums.length / 2 : pieces;

	return answer;
}

// testcase
let nums = [
	[3, 1, 2, 3],
	[3, 3, 3, 2, 2, 4],
	[3, 3, 3, 2, 2, 2]
]

nums.forEach((item) => console.log(solution(item)));
