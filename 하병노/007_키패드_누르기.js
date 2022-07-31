// https://school.programmers.co.kr/learn/courses/30/lessons/67256

// function solution(numbers, hand) {
//     let answer = '';

//     // let keyPad = [
//     //     [{1:'L'}, {2:'LR'}, {3:'R'}],
//     //     [{4:'L'}, {5:'LR'}, {6:'R'}],
//     //     [{7:'L'}, {8:'LR'}, {9:'R'}],
//     //     [{Star:'L'}, {0:'LR'},{Hash:'R'}]
//     // ]
//         // 위치 찾아주는 함수
//         function findKey(key) {
//             let keypad = [[1, 2, 3], [4, 5, 6], [7, 8, 9], ['*', 0, '#']];
//             for (let i = 0; i < 4; i++) {
//                 for (let j = 0; j < 3; j++) {
//                     if (keypad[i][j] === key) {
//                         return [i, j];
//                     }
//                 }
//             }
//         }


//     let keyPad = [
//         [[1,'L'], [2,'LR'], [3,'R']],
//         [[4,'L'], [5,'LR'], [6,'R']],
//         [[7,'L'], [8,'LR'], [9,'R']],
//         [['Star','L'], [0,'LR'],['Hash','R']]
//     ];

//     let numLog = [];

    

//     for (let i=0; i< numbers.length; i++) {
//         if (numbers[i] === 1 |numbers[i] === 4 | numbers[i] === 7) {
//             if (numbers[i] === 1) {
//                 answer += keyPad[0][0][1]
//             } else if (numbers[i] === 4) {
//                 answer += keyPad[1][0][1]
//             } else if (numbers[i] === 7) {
//                 answer += keyPad[2][0][1]
//             }

//         } else if (numbers[i] === 3 |numbers[i] === 6 | numbers[i] === 9) {
//             if (numbers[i] === 4) {
//                 answer += 'R'
//             } else if (numbers[i] === 6) {
//                 answer += 'R'
//             } else if (numbers[i] === 9) {
//                 answer += 'R'

//         } else {
//             let r = findKey('*');
//             let l = findKey('#');
//             let middle = findKey(i);
//             // 손위치와 눌러야할 키패드 거리 구하기
//             let rr = Math.abs(r[0] - middle[0]) + Math.abs(r[1] - middle[1]);
//             let ll = Math.abs(l[0] - middle[0]) + Math.abs(l[1] - middle[1]);
//             if (rr === ll) { // 거리가 같다면 오른손잡이 -> 'R', 왼손잡이 -> 'L'
//                 hand === 'right' ? (right = i, answer += 'R') : (left = i, answer += 'L');
//             }else if(rr > ll) { // 오른손의 거리가 더 멀다면
//                 answer += 'L';
//                 left = i;
//             }else { // 왼손의 거리가 더 멀다면
//                 answer += 'R';
//                 right = i;
//             }
//         }
        
//     }

    

// //     return answer;
// // }



function solution(numbers, hand) {
    
    // 위치 찾아주는 함수
    function findKey(key) {
        let keypad = [[1, 2, 3], [4, 5, 6], [7, 8, 9], ['*', 0, '#']];
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 3; j++) {
                if (keypad[i][j] === key) {
                    return [i, j];
                }
            }
        }
    }
    
    var answer = '';
    let left = '*';
    let right = '#';
    for (let i of numbers) {
        if (i === 1 || i === 4 || i === 7) {
            answer += 'L';
            left = i;
        }else if (i === 3 || i === 6 || i === 9) {
            answer += 'R';
            right = i - 2;
        }else {
            let r = findKey(right);
            let l = findKey(left);
            let middle = findKey(i);
            // 손위치와 눌러야할 키패드 거리 구하기
            let rr = Math.abs(r[0] - middle[0]) + Math.abs(r[1] - middle[1]);
            let ll = Math.abs(l[0] - middle[0]) + Math.abs(l[1] - middle[1]);
            if (rr === ll) { // 거리가 같다면 오른손잡이 -> 'R', 왼손잡이 -> 'L'
                hand === 'right' ? (right = i, answer += 'R') : (left = i, answer += 'L');
            }else if(rr > ll) { // 오른손의 거리가 더 멀다면
                answer += 'L';
                left = i;
            }else { // 왼손의 거리가 더 멀다면
                answer += 'R';
                right = i;
            }
        }
    }
    
    return answer;
}


console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right"))


