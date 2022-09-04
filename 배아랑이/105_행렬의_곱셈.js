// https://school.programmers.co.kr/learn/courses/30/lessons/12949
// 45 min

function solution(arr1, arr2) {

	// 성공 -> 21.39ms, 39.5MB
  var answer = Array.from({ length: arr1.length }, () =>
    Array.from({ length: arr2[0].length }, () => 0),
  );

  var arr2_re = Array.from({ length: arr2[0].length }, () =>
    Array.from({ length: arr2.length }, () => 0),
  );

	// reverse arr2
  for (let i = 0; i < arr2_re.length; i++) {
    for (let j = 0; j < arr2_re[0].length; j++) {
      arr2_re[i][j] = arr2[j][i];
    }
  }
  // console.log(arr2_re);

  for (let i = 0; i < answer.length; i++) {
    for (let j = 0; j < answer[0].length; j++) {
      // console.log(arr1[i], arr2_re[j]);
      arr1[i].map((item, idx) => (answer[i][j] += item * arr2_re[j][idx]));
    }
  }

  return answer;
}

// testcase
let arr1 = [
  [
    [1, 4],
    [3, 2],
    [4, 1],
  ],
  [
    [2, 3, 2],
    [4, 2, 4],
    [3, 1, 4],
  ],
  [
    [2, 3, 2, 1],
    [4, 2, 4, 1],
    [3, 1, 4, 1],
    [1, 1, 1, 1],
  ],
];

let arr2 = [
  [
    [3, 3],
    [3, 3],
  ],
  [
    [5, 4, 3],
    [2, 4, 1],
    [3, 1, 1],
  ],
  [
    [5, 4, 3],
    [2, 4, 1],
    [3, 1, 1],
    [1, 1, 1],
  ],
];

for (let i = 0; i < arr1.length; i++) {
  console.log(solution(arr1[i], arr2[i]));
}
