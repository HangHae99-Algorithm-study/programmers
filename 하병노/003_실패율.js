// https://school.programmers.co.kr/learn/courses/30/lessons/42889

// 실패율 = 스테이지에 도달했지만 클리어 못한 플레이어 수 / 스테이지에 도달한 플레이어 수
// N 은 전체 스테이지 갯수
// stages 는 스테이지의 번호가 담긴 배열

// 실패율이 높은 스테이지 부터 내림차순으로 스테이지의 번호가 return 되도록 하자

// 제한사항
// - 스테이지의 개수 N은 1 이상 500 이하의 자연수이다.
// - stages의 길이는 1 이상 200,000 이하이다.
// - stages에는 1 이상 N + 1 이하의 자연수가 담겨있다.
//   -각 자연수는 사용자가 현재 도전 중인 스테이지의 번호를 나타낸다.
//   -단, N + 1 은 마지막 스테이지(N 번째 스테이지) 까지 클리어 한 사용자를 나타낸다.
// - 만약 실패율이 같은 스테이지가 있다면 작은 번호의 스테이지가 먼저 오도록 하면 된다.
// - 스테이지에 도달한 유저가 없는 경우 해당 스테이지의 실패율은 0 으로 정의한다.

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3])); // 1탄깬사람, 하나도못깬사람, 1탄깬사람, 다깬사람....

// stage 배열의 각 요소들에 중복된 N 값이 각각 몇개씩인지 센다. 즉, 스테이지에 도달했지만 클리어 못한 사람수
// 그리고 N+1의 중복된 값을 또 센다 그리고 N의갯수/N+1의갯수
//

// function solution(N, stages) {
//     let answer = [];
//     // 중복된 값이 몇개인지 갯수 세기
//     const cnt = {};
//     console.log(cnt[1])
//     console.log(Boolean(cnt[1]))

//     stages.forEach((e) => {
//         if (cnt[e]) {
//             cnt[e] = cnt[e] + 1;
//         } else {
//             cnt[e] = 0 + 1;
//         }
//     });

//     console.log(cnt);
//     console.log(cnt[1]);
//     console.log(cnt[2]);
//     console.log(cnt[3]);

// // 1스테이지의 실패율
//     let exFail = cnt[1]/cnt[2]
//     console.log(exFail)

//     let fail = cnt.sort((a,b) => {a/b - b/(b+1)})

//     console.log(fail)

//     console.log(Object.keys(cnt));
//     console.log(Object.values(cnt));

//     return answer;
// }

function solution(N, stages) {
    let answer = [];
    //실패한 사람은 제외해야되기 떄문에 임시 변수 people생성
    let people = stages.length;
    for (let i = 1; i <= N + 1; i++) {

        //Array.filter() : 조건을 만족하는 원소만 추출
        let tmp = stages.filter((n) => n === i).length;
        
        //answer = [[스테이지, 실패율]]
        answer.push([i, tmp / people]);
        
        //실패한 사람 제외
        people -= tmp;
    }

    //마지막은 모두 깬사람들이므로 실패율이 없어서 pop()
    answer.pop();
    
    //answer의 2번째 원소기준으로 내림차순으로 정렬
    answer = answer.sort((a, b) => b[1] - a[1]);
    
    //Array.map() : 배열을 조건에 맞게 변환
    return answer.map((a) => a[0]);
}
