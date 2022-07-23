// https://school.programmers.co.kr/learn/courses/30/lessons/12921
// 12 min

function solution(n) {
	var answer = 0;

	for (let i = 2; i <= n; i++) {
		if (is_prime(i))
			answer++;
	}

	// 참고한 풀이
	// Set() 사용 -> 더 빠름
	const s = new Set();
	s.add(2);

	for (let i = 3; i <= n; i += 2) {
		s.add(i);
	}

	for (let i = 3; i <= Math.sqrt(n); i++) {
		if (s.has(i)) {
			for (let j = i * 2; j <= n; j += i) {
				s.delete(j);
			}
		}
	}
	console.log(s);

	answer = s.size;

	return answer;
}

function is_prime(num) {
	for (let i = 2; i <= Math.sqrt(num); i++) {
		if (num % i === 0) {
			return false;
		}
	}
	return true;
}

// testcase
console.log(solution(10));
console.log(solution(5));
