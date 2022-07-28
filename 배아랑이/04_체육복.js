// https://school.programmers.co.kr/learn/courses/30/lessons/42862
// 50 min

function solution(n, lost, reserve) {
	var answer = n - lost.length;

	// 실패 -> 7, 13, 14 테스트케이스 통과 X (sort 안했을 떄)
	// 첫번째 풀이
	// lost의 값을 lost_check가 복사하기 때문에 lost_check를 수정하면 lost도 수정된다.
	var lost_check = lost;

	// 여벌 체육복을 가져온 학생이 체육복을 도난당한 상황 확인
	for (let i = 0; i < lost.length; i++) {
		if (reserve.includes(lost[i])) {
			reserve.splice(reserve.indexOf(lost[i]), 1);
			lost_check.splice(lost_check.indexOf(lost[i]), 1);
			answer++;
			// console.log('same', lost_check, reserve);
		}
	}

	// 도난당한 학생의 번호 앞뒤가 여벌이 있는지 확인
	for (let i = 0; i < lost_check.length; i++) {
		if (reserve.includes(lost_check[i] - 1)) {
			reserve.splice(reserve.indexOf(lost_check[i] - 1), 1);
			answer++;
			// console.log('front', reserve);
		} else if (reserve.includes(lost_check[i] + 1)) {
			reserve.splice(reserve.indexOf(lost_check[i] + 1), 1);
			answer++;
			// console.log('back', reserve);
		}
	}


	// =====================================================================
	// 성공 -> 0.15ms, 29.8MB
	// 두번째 풀이
	var lost_check = [];

	// 정렬 안하면 13, 14 테스트 케이스 통과 X
	// n = 5, lost = [2, 4], reserve = [3, 1] -> result = 5
	// 두번째 풀이에서 왜 sort() 안하면 통과 안되는지 모르겠음.
	// 해당 item의 앞번호에 있는 번호인데
	reserve.sort();
	lost.sort();

	// 여벌 체육복을 가져온 학생이 체육복을 도난당한 상황 확인
	for (let i = 0; i < lost.length; i++) {
		if (!reserve.includes(lost[i])) {
			lost_check.push(lost[i]);
		} else {
			reserve.splice(reserve.indexOf(lost[i]), 1);
			answer++;
			// console.log(lost[i], lost_check, reserve);
		}
	}

	// 도난당한 학생의 번호 앞뒤가 여벌이 있는지 확인
	for (let i = 0; i < lost_check.length; i++) {
		if (reserve.includes(lost_check[i] - 1)) {
			reserve.splice(reserve.indexOf(lost_check[i] - 1), 1);
			answer++;
			// console.log('front', reserve);
		} else if (reserve.includes(lost_check[i] + 1)) {
			reserve.splice(reserve.indexOf(lost_check[i] + 1), 1);
			answer++;
			// console.log('back', reserve);
		}
	}

	// =====================================================================
	// 동욱님 풀이 참고하자

	return answer;
}

// testcase
let n = [5, 5, 3, 5, 5, 5];
let lost = [
	[2, 4],
	[2, 4],
	[3],
	[1, 2],
	[1, 2, 3, 4],
	[2, 4]
];
let reserve = [
	[1, 3, 5],
	[3],
	[1],
	[2, 3],
	[2, 3, 4, 5],
	[3, 1]
];

for (let i = 0; i < n.length; i++) {
	console.log(solution(n[i], lost[i], reserve[i]));
}