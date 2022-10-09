// https://school.programmers.co.kr/learn/courses/30/lessons/120956
// 40 min

function solution(babbling) {
  var answer = 0;

	// 성공 -> 0.26ms, 33.6MB
	babbling.forEach((item) => {
    const check = item.split(/aya|ye|woo|ma/g).join("");
    const double = item.split(/ayaaya|yeye|woowoo|mama/g).length;
		console.log([check, double]);
    if (check === "" && double === 1) {
      answer += 1;
    }
  });

  return answer;
}

const babbling = [
	["aya", "yee", "u", "maa"],
	["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"]
]

babbling.forEach((item) => console.log(solution(item)));