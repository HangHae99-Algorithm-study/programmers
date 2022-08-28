// https://school.programmers.co.kr/learn/courses/30/lessons/12953#
// 45 min

function solution(arr) {
	var answer = 0;

	// 실패
	// 첫번째 풀이
	var gcd_num = Math.min(...arr);

	for (let i = 0; i < arr.length - 1; i++) {
		if (gcd(arr[i], arr[i + 1]) < gcd_num) {
			gcd_num = gcd(arr[i], arr[i + 1]);
		}
	}

	answer = gcd_num;
	arr.forEach((item) => answer *= item / gcd_num);


	// =====================================================================
	// 성공 -> 105.42ms, 32.6MB
	// 두번째 풀이
	var lcm = arr[0] * arr[1] / gcd(arr[0], arr[1]);
	for (let i = 1; i < arr.length; i++) {
		lcm = lcm * arr[i] / gcd(lcm, arr[i]);
	}

	answer = lcm;

	return answer;
}

function gcd(a, b) {
	for (let i = a; i > 0; i--) {
		if (a % i === 0 && b % i === 0) {
			return i;
		}
	}
}

// testcase
let arr = [
	[2, 6, 8, 14],
	[1, 2, 3],
	[12, 18, 51],
	[3, 4, 9, 16]
];

arr.forEach((item) => console.log(solution(item)));