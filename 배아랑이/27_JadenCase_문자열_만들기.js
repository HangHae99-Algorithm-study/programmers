// https://school.programmers.co.kr/learn/courses/30/lessons/12951
// 20 min

function solution(board) {
  // 실패 -> 테스트 케이스 2, 4, 5, 8, 9, 11, 12, 13, 14, 17 통과X, 런타임 에러
  // const answer = board
  //   .split(" ")
  //   .map(
  //     (item) =>
  //       item[0].toUpperCase() + item.slice(1, item.length).toLowerCase(),
  //   )
  //   .join(" ");

	// 성공 -> 0.08ms, 33.6MB
  const answer = board
    .toLowerCase()
    .split(" ")
    .map((item) =>
      item[0] ? item[0].toUpperCase() + item.slice(1, item.length) : "",
    )
    .join(" ");

  return answer;
}

const s = ["3peoPle unFollowed me", "for the last week", "a aa "];

s.forEach((item) => console.log(solution(item)));
