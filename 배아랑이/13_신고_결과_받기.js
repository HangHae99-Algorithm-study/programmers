// https://school.programmers.co.kr/learn/courses/30/lessons/92334
// fail

function solution(id_list, report, k) {
	var answer = [];

	// 실패
	// list = [신고 당한 횟수, 신고한 사람]
	var list = Array.from({length: id_list.length}, (item) => [0, []]);
	console.log(list)

	const stop_person = [];
	report = [...new Set(report)];

	for (let i = 0; i < report.length; i++) {
		const blame = report[i].split(' ');
		list[id_list.indexOf(blame[1])][0]++; 							// 신고 당한 횟수
		list[id_list.indexOf(blame[0])][1].push(blame[0]); 	// 신고한 사람

		// console.log(blame, list);
		if (list[id_list.indexOf(blame[1])][0] >= k) {
			stop_person.push(id_list[i]);
		}
	}
	console.log(list);
	console.log(stop_person);

	for (let i = 0; i < list.length; i++) {
		let count = 0;
		for (let j = 0; j < list[i][1].length; j++) {
			for (let l = 0; l < stop_person.length; l++) {
				if (list[i][1][j] === stop_person[l]) {
					count++;
				}
			}
		}
		answer.push(count);
	}

	return answer;
}

// testcase
let id_list = [
	["muzi", "frodo", "apeach", "neo"],
	["con", "ryan"]
];

let report = [
	["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
	["ryan con", "ryan con", "ryan con", "ryan con"]
];

let k = [2, 3];

for (let i = 0; i < id_list.length; i++) {
	console.log(solution(id_list[i], report[i], k[i]));
}
