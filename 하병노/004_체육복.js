// https://school.programmers.co.kr/learn/courses/30/lessons/42862

// 체육복

// 점심시간에 도둑이 들어, 일부 학생이 체육복을 도난당했습니다. 
// 다행히 여벌 체육복이 있는 학생이 이들에게 체육복을 빌려주려 합니다. 
// 학생들의 번호는 체격 순으로 매겨져 있어, 바로 앞번호의 학생이나 바로 뒷번호의 학생에게만 체육복을 빌려줄 수 있습니다. 
// 예를 들어, 4번 학생은 3번 학생이나 5번 학생에게만 체육복을 빌려줄 수 있습니다. 
// 체육복이 없으면 수업을 들을 수 없기 때문에 체육복을 적절히 빌려 최대한 많은 학생이 체육수업을 들어야 합니다.

// 전체 학생의 수 n, 체육복을 도난당한 학생들의 번호가 담긴 배열 lost, 
// 여벌의 체육복을 가져온 학생들의 번호가 담긴 배열 reserve가 매개변수로 주어질 때, 
// 체육수업을 들을 수 있는 학생의 최댓값을 return 하도록 solution 함수를 작성해주세요.

// 제한사항
// 전체 학생의 수는 2명 이상 30명 이하입니다.
// 체육복을 도난당한 학생의 수는 1명 이상 n명 이하이고 중복되는 번호는 없습니다.
// 여벌의 체육복을 가져온 학생의 수는 1명 이상 n명 이하이고 중복되는 번호는 없습니다.
// 여벌 체육복이 있는 학생만 다른 학생에게 체육복을 빌려줄 수 있습니다.
// 여벌 체육복을 가져온 학생이 체육복을 도난당했을 수 있습니다. 
// 이때 이 학생은 체육복을 하나만 도난당했다고 가정하며, 남은 체육복이 하나이기에 다른 학생에게는 체육복을 빌려줄 수 없습니다.




// 여벌이 있는 학생에서 -1 +1 커버
// [1,2,3,4,5] 에서 3만 여벌이 있고 2,4가 도난 당했다면 2나 4중에 한명한테만 줄수 있다.
// 그래서 1,2,3,5 또는 1,3,4,5 이렇게 수업을 들을 수 있으니까 최대 4명까지 수업 가능

// [1,2,3,4,5] 중에 reserve가 [4] 이고 lost가 [1,3] 이라면 3에게만 빌려줄수 있으므로
// 2,3,4,5 

// 근데 보니까 여벌 가져온 학생이 도난 당할 수도 있다
// 그러면 그냥 체육복 한개 가져온 학생으로 취급한다.


// 탐욕 알고리즘 문제를 해결하는 방법
// - 선택 절차(Selection Procedure): 현재 상태에서의 최적의 해답을 선택한다.
// - 적절성 검사(Feasibility Check): 선택된 해가 문제의 조건을 만족하는지 검사한다.
// - 해답 검사(Solution Check): 원래의 문제가 해결되었는지 검사하고, 해결되지 않았다면 선택 절차로 돌아가 위의 과정을 반복한다.




let exN = 5;  // [1,2,3,4,5]
let exLost = [2,4];
let exReserve = [1,3,5];

console.log('답1 : ',solution(exN, exLost, exReserve))

// function solution(n, lost, reserve) {
//     let count = n - lost.length;      // 5명이 총원이면 잃어버린애들이 2일때 가지고 있는애들이 3인 것
//     let tmp_lost = [];
//     lost.sort()
//     reserve.sort()

//     // lost와 reserve 두 개 모두 속한 애는 여벌 옷이 없는 것과 같다.
//     // 따라서 reserve 배열에서 제거하고, count를 1 증가시킨다.
//     for (let i = 0; i < lost.length; i++) {
//         if (reserve.includes(lost[i])) {
//             reserve = reserve.filter(element => element !== lost[i]);  // lost와 reserve 교집합이 아닌애들 
//             count++;    // 수업 참가인원에 더한다.
//             // console.log(reserve)  // []
//         } else {
//             // lost, reverse 두 개 모두에 속하지 않은 원소를 따로 저장해둔다.
//             tmp_lost.push(lost[i]);  // 가져왔는데 잃어버린애
//             // console.log(tmp_lost)
//         }
//     }
//     lost = tmp_lost;   // 4 체육복을 빌려야 하는 애들 의 배열
//     // console.log(lost)   // [2, 4]

//     for (let i = 0; i < lost.length; i++) {
//         // console.log(lost[i],lost[i]-1)  
//         if (reserve.includes(lost[i] - 1)) { // 자기보다 왼쪽에 있는 경우
//             reserve = reserve.filter((e) => e !== lost[i] - 1);
//             // console.log(reserve)
//             count++;
//             console.log(count)
//         }
//         else if (reserve.includes(lost[i] + 1)) { // 자기보다 오른쪽에 있는 경우
//             reserve = reserve.filter((e) => e !== lost[i] + 1);
//             // console.log(reserve)
//             count++;
//             // console.log(count)
//         }
//     }
    
//     return count;
// }


function solution(n, lost, reserve) {
    const students = {};
    let answer = 0;
    for(let i = 1; i <= n; i++){
        students[i] = 1;
    }
    console.log('학생들은 모두 체육복 하나씩 가지고 있다. ',students)  // { '1': 1, '2': 1, '3': 1, '4': 1, '5': 1 }  key는 학생번호 , value는 보유한 체육복
    console.log()
    
    lost.forEach(number => students[number] -= 1);
    console.log('lost 학생들은 -1 : ', students)
    console.log()   // lost 학생들 번호에서 1을 빼면 
    reserve.forEach(number => students[number] += 1);
    console.log('reserve 학생들은 +1 : ', students)
    console.log()   // reserve 학생들 번호에서 1을 빼면 

    for(let i = 1; i <= n; i++){
        console.log(`${i}번 학생 조사 시작 : `,students)
        if(students[i] === 2 && students[i-1] === 0){   
                students[i-1]++;
                students[i]--;
        } else if(students[i] === 2 && students[i+1] === 0){
                students[i+1]++;
                students[i]--;
        }
        console.log(`${i}번 학생 조사 종료 : `,students)
        console.log()
    }
    
    console.log('최종 체육복 보유 현황 : ', students)

    for(let key in students){
        if(students[key] >= 1){
            if(students[key]===0) {
                console.log(`${key}번 학생은 체육복을` ,students[key], '개 가졌네, 얜 체육수업 못함')
            }else if (students[key]===1) {
                console.log(`${key}번 학생은 체육복을` ,students[key], '개 가졌네, 체육수업 쌉가능')
            }else {
                console.log(`${key}번 학생은 체육복을` ,students[key], '개나 가졌네, 체육수업 쌉가능')
            }
            answer++
        }
    }
    return answer;
}


// console.log('답2 : ',solution(5, [2,4], [3]))
// console.log('답3 : ',solution(3, [3], [1]))