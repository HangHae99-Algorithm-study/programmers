// https://school.programmers.co.kr/learn/courses/30/lessons/131128
// 40 min

function solution(X, Y) {
  var answer = "";

  // 실패 -> 11-15 테스트케이스 통과 X
  const min_len = X.length < Y.length ? ["X", X.length] : ["Y", Y.length];

  for (let i = 0; i < min_len[1]; i++) {
    if (min_len[0] === "X") {
      if (Y.includes(X[i])) {
        const idx = Y.indexOf(X[i]);
        Y = Y.substr(0, idx) + Y.substr(idx + 1, Y.length);
        answer += X[i];
      }
    } else {
      if (X.includes(Y[i])) {
        const idx = X.indexOf(Y[i]);
        X = X.substr(0, idx) + X.substr(idx + 1, X.length);
        answer += Y[i];
      }
    }
  }

	// 성공! -> 1699.71ms, 215MB
  X = [...X];
  Y = [...Y];
  console.log(X, Y);

  for (let i = 0; i < 10; i++) {
    const X_cnt = X.filter((item) => +item === i).length;
    const Y_cnt = Y.filter((item) => +item === i).length;
		answer += i.toString().repeat(Math.min(X_cnt, Y_cnt));
  }

  if (answer === "") {
    return "-1";
  } else if (answer.match(/[^0]/g) === null) {
    return "0";
  } else {
    return [...answer].sort().reverse().join("");
  }
}

const x = ["100", "100", "100", "12321", "5525"];

const y = ["2345", "203045", "123450", "42531", "1255"];

for (let i = 0; i < x.length; i++) {
  console.log(solution(x[i], y[i]));
}
