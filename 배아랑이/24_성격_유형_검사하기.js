// https://school.programmers.co.kr/learn/courses/30/lessons/118666
// 27 min

function solution(survey, choices) {
  var answer = "";

  const type_cnt = {
    R: 0,
    T: 0,
    C: 0,
    F: 0,
    J: 0,
    M: 0,
    A: 0,
    N: 0,
  };

	// 성공 -> 0.45ms, 33.6MB
  for (let i = 0; i < survey.length; i++) {
    switch (choices[i]) {
      case 1:
        type_cnt[survey[i][0]] += 3;
        break;
      case 2:
        type_cnt[survey[i][0]] += 2;
        break;
      case 3:
        type_cnt[survey[i][0]] += 1;
        break;
      case 5:
        type_cnt[survey[i][1]] += 1;
        break;
      case 6:
        type_cnt[survey[i][1]] += 2;
        break;
      case 7:
        type_cnt[survey[i][1]] += 3;
        break;
      default:
        break;
    }
  }

	// 두번째 풀이 -> 0.36ms, 33.5MB
	choices.forEach((item, idx) =>
    item > 4
      ? (type_cnt[survey[idx][1]] += item - 4)
      : (type_cnt[survey[idx][0]] += 4 - item),
  );

  type_cnt["R"] >= type_cnt["T"] ? (answer += "R") : (answer += "T");
  type_cnt["C"] >= type_cnt["F"] ? (answer += "C") : (answer += "F");
  type_cnt["J"] >= type_cnt["M"] ? (answer += "J") : (answer += "M");
  type_cnt["A"] >= type_cnt["N"] ? (answer += "A") : (answer += "N");

  return answer;
}

const survey = [
  ["AN", "CF", "MJ", "RT", "NA"],
  ["TR", "RT", "TR"],
];

const choices = [
  [5, 3, 2, 7, 5],
  [7, 1, 3],
];

for (let i = 0; i < survey.length; i++) {
  console.log(solution(survey[i], choices[i]));
}
