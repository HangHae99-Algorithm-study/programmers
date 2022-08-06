// https://school.programmers.co.kr/learn/courses/30/lessons/92334
// 35 min

function solution(id_list, report, k) {

	// 성공 -> 648.35ms, 89MB
	var answer = Array.from({ length: id_list.length }, () => 0);
	var check_num = Array.from({ length: id_list.length }, () => [0, []]);
	
	report = [...new Set(report)].map((item) => item.split(' '));   // 중복 제거
	// console.log(report);

	report.forEach((item) => {
			check_num[id_list.indexOf(item[1])][0]++;                   // 신고당한 횟수
			check_num[id_list.indexOf(item[1])][1].push(item[0])        // 신고한 사람
	});
	// console.log(check_num);
	
	check_num = check_num.filter((item) => item[0] >= k);           // k번 이상 신고당한 사람
	// console.log(check_num);
	
	for (let i=0; i<check_num.length; i++) {
			for (let j=0; j<check_num[i][1].length; j++) {
					answer[id_list.indexOf(check_num[i][1][j])]++;
			}
	}
	
	return answer;
}

// testcase
let id_list = [
	["muzi", "frodo", "apeach", "neo"],
	["con", "ryan"]
];

let report = [
	["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"],
	["ryan con", "ryan con", "ryan con", "ryan con"]
]

let k = [2, 3];

for (let i=0; i<k.length; i++) {
	console.log(solution(id_list[i], report[i], k[i]));
}
