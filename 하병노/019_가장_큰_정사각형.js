// https://school.programmers.co.kr/learn/courses/30/lessons/12905

function solution(board) {
  let answer = 0;
  if (board.length <= 1 || board[0].length <= 1) {
    console.log()
    console.log("크기가 1xN 또는 Nx1 일 때는 최대넓이 정사각형이 1이다.")
    return 1;
  }
  for (let i = 1; i < board.length; i++) {
    console.log("board의 원소를 하나씩 꺼내서 " , board[i-1])
    for (let j = 1; j < board[0].length; j++) {
      console.log("각각의 원소를 검사해보자 ", board[i-1][j-1])
      if (board[i][j] >= 1) {
        console.log(`board[${i}][${j}] 즉 ${board[i-1][j-1]} 는 1 보다 크다 `)
        board[i][j] = Math.min(board[i - 1][j - 1], board[i - 1][j], board[i][j - 1]) + 1;
        console.log("board[i][j] = Math.min(board[i - 1][j - 1], board[i - 1][j], board[i][j - 1]) + 1;")
        console.log(`board[${i}][${j}] = Math.min(board[${i} - 1][${j} - 1], board[${i} - 1][${j}], board[${i}][${j} - 1]) + 1;`)
        answer = answer > board[i][j] ? answer : board[i][j];
      }
    }
  }
  
  return answer ** 2;
}

// console.log(
//   solution([
//     [0, 1, 1, 1],
//     [1, 1, 1, 1],
//     [1, 1, 1, 1],
//     [0, 0, 1, 0],
//   ])
// );
console.log(
  solution([
    [0, 0, 1, 1],
    [1, 1, 1, 1],
  ])
);
// console.log(
//   solution([
//     [1, 1, 1, 1],
//   ])
// );
