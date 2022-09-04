// https://school.programmers.co.kr/learn/courses/30/lessons/12911
// 6 min

function solution(n) {

	// 성공 -> 0.07ms, 33.4MB
	const n_2 = [...n.toString(2)].filter((item) => item === '1').length;
	console.log(n.toString(2).match(/1/g).length);

	while(true) {
		n++;
		if (n_2 === [...n.toString(2)].filter((item) => item === '1').length) {
			break;
		}
	}

	// 참고한 풀이 -> 0.08ms, 33.4MB
	// const n_base2 = n.toString(2).match(/1/g).length;

	// while (true) {
	// 	n++;
	// 	if (n.toString(2).match(/1/g).length === n_base2) {
	// 		break;
	// 	}
	// }

  return n;
}

// testcase
console.log(solution(78));
console.log(solution(15));
