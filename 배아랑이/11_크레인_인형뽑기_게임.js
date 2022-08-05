// https://school.programmers.co.kr/learn/courses/30/lessons/64061
// 15 min

function solution(board, moves) {
	var answer = 0;
	var list = [];

	for (let i = 0; i < moves.length; i++) {
		for (let j = 0; j < board.length; j++) {
			// console.log(board[j][moves[i]]);
			if (board[j][moves[i]-1] !== 0) {
				// console.log(i, j, board[j][moves[i]-1]);
				if (list[list.length - 1] === board[j][moves[i]-1]) {
					list.pop();
					answer += 2;
				} else {
					list.push(board[j][moves[i]-1]);
				}
				board[j][moves[i]-1] = 0;
				break;
			}
		}
		console.log(list);
	}


	return answer;
}

// testcase
let board = [
	[0, 0, 0, 0, 0],
	[0, 0, 1, 0, 3],
	[0, 2, 5, 0, 1],
	[4, 2, 4, 4, 2],
	[3, 5, 1, 3, 1]
];
let moves = [1, 5, 3, 5, 1, 2, 1, 4];

console.log(solution(board, moves));
