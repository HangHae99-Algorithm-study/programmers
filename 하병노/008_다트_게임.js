// https://school.programmers.co.kr/learn/courses/30/lessons/17682

// 기회는 3번
// 기회마다 최소 0 에서 최대 10점
// 점수와 함께 S, D, T, 영역이 존재
// 각각 1제곱 2제곱 3제곱 됨
// 다른 옵션으로 *, # 존재
// * 는 해당 점수와 바로전에 얻은 점수를 각 2배로 만듬
// # 은 해당 점수 마이너스
// * 는 첫번째 기회에서도 나올 수 있다. 이경우 해당 점수만 2배됨
// * 의 효과는 다른 * 과도 중첩 가능 점수 4배
// * 가 # 과도 중첩가능 이 경우 점수는 -2배 
// Single(S), Double(D), Triple(T)은 점수마다 하나씩 존재한다.
// 스타상(*), 아차상(#)은 점수마다 둘 중 하나만 존재할 수 있으며, 존재하지 않을 수도 있다.

console.log(solution('1S2D*3T'))    // 37
console.log(solution('1S*2T*3S'))   // 23
console.log(solution('1T2D3D#'))    // -4
console.log(solution('1D#2S*3S'))   // 5
console.log(solution('1D2S3T*'))    // 59

// function solution(dartResult) {

//     let result = 0; 
//     // split 을 써보면 어떨까?

//     let answer =  dartResult.replace(/S/g, 1).replace(/D/g, 2).replace(/T/g, 3).split('*')
//     console.log(answer)

//     for (let i = 0; i < answer.length; i++) {
//         if (answer[i].length === 2) {
//             result += answer[i][0]**answer[i][1] *2
//         } else if (answer[i].length > 2 && answer[i].length %2 === 0) {
//             for (let j=0; j< answer[i].length; j++) {
//                 result += answer[j][0]**answer[j][1] *2
//             }
//         }
//     }

//     return result;
// }


function solution(dartResult) {
    let answer = [];
    let tmp = 0;
    
    for(let i=0; i<dartResult.length; i++) {
        if(dartResult[i].match(/[0-9]/)) {
            if(dartResult[i]==='1' && dartResult[i+1]==='0') {
                tmp=10;
                i++;
            }
            else tmp=dartResult[i];
        }

        else if(dartResult[i] === 'S') answer.push(Math.pow(tmp, 1));
        else if(dartResult[i] === 'D') answer.push(Math.pow(tmp, 2));
        else if(dartResult[i] === 'T') answer.push(Math.pow(tmp, 3));
        
        else if(dartResult[i] ==='*') {
            answer[answer.length-1] *= 2;
            answer[answer.length-2] *= 2;
        }
        else if(dartResult[i] === '#') answer[answer.length-1] *= (-1);
    }
    
    return answer.reduce((acc, v) => acc+v);
}