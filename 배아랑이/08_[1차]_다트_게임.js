// https://school.programmers.co.kr/learn/courses/30/lessons/17682
// 40 min

function solution(dartResult) {
	var answer = 0;

	// 성공 -> 0.17ms, 30MB
	var dart_list = [];

	for (let i = 0; i < dartResult.length - 1; i++) {
		// 숫자 10인지 확인 -> dart_list에 값 넣기
		if (dartResult[i + 1] === '0') {
			dart_list.push(Number(dartResult.slice(i, i + 2)));
			i++;
		} else {
			dart_list.push(Number(dartResult[i]));
		}

		// D, T일 때 계산
		if (dartResult[i + 1] === 'D') {
			dart_list[dart_list.length - 1] = dart_list[dart_list.length - 1] ** 2;
		} else if (dartResult[i + 1] === 'T') {
			dart_list[dart_list.length - 1] = dart_list[dart_list.length - 1] ** 3;
		}

		// console.log(i, dart_list);

		// *(스타상)일 때 -> 첫번째 다트인지 확인
		if (dartResult[i + 2] === '*') {
			if (i !== 0) {
				dart_list[dart_list.length - 2] = dart_list[dart_list.length - 2] * 2;
			}
			dart_list[dart_list.length - 1] = dart_list[dart_list.length - 1] * 2;
			i += 2;
		} else if (dartResult[i + 2] === '#') {
			dart_list[dart_list.length - 1] = dart_list[dart_list.length - 1] * -1;
			i += 2;
		} else {
			i += 1;
		}

	}

	answer = dart_list.reduce((a, b) => a + b);

	return answer;
}

// testcase
let dartResult = ['1S2D*3T', '1D2S#10S', '1D2S0T', '1S*2T*3S', '1D#2S*3S', '1T2D3D#', '1D2S3T*'];

dartResult.forEach((item) => console.log(solution(item)));
