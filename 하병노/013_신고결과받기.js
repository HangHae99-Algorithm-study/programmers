// https://school.programmers.co.kr/learn/courses/30/lessons/92334?language=javascript

// 접근 방법
// 각 유저는 한번에 한명의 유저를 신고가능, 횟수의 제한 없음 서로 다른 유저를 계속 신고 가능
// 한 유저를 여러번 신고 할수도 있지만, 동일한 유저에 대한 신고는 1회로 처리됨
// 유저가 신고한 모든 내용을 취합한 후 마지막에 한꺼번에 이용정지를 시키는 방식
// k번 이상 신고된 유저는 게시판 이용 정지, 해당 유저를 신고한 유저에게 메일로 결과 통보

// 이용자의 ID가 담긴 문자열 배열 id_list
// 각 이용자가 신고한 이용자의 ID 정보가 담긴 문자열 배열 report
// 정지 기준이 되는 신고 횟수 k

// return 되야 할 값 = 각 유저별로 처리 결과 메일을 받은 횟수를 배열에 담아 return

// function solution(id_list, report, k) {
//   let answer = [];
//   console.log("유저들 :", id_list);
//   console.log("신고결과들 :", report);

//   console.log(report[0].split(" ")[0])

//   const cnt = {};
//   arr.forEach((e) => {
//       if (cnt[e]) {
//           cnt[e] = cnt[e] + 1;
//       } else {
//           cnt[e] = 0 + 1;
//       }
//   });

//   for (let i = 0 ; i < report.length; i++) {
//     let 신고자 = {};
//     let 정지자 = [];

//   }

//   return answer;
// }

function solution(id_list, report, k) {
  console.log("id_list :", id_list);
  console.log("report :", report);
  const userList = id_list.reduce((result, currentId) => {
    result[currentId] = [0, []];
    return result;
  }, {});
  console.log('유저마다 신고된 횟수와 해당 유저를 신고한 유저의 ID를 담을 객체를 생성')
  console.log(userList); // 유저마다 신고된 횟수와 해당 유저를 신고한 유저의 ID를 담을 객체를 생성
  for (const id of new Set(report)) {// set으로 중복제거
    console.log(id)
    const [REPORT_ID, ID] = id.split(" ");
    console.log(REPORT_ID)
    console.log(ID)
    userList[REPORT_ID][1].push(ID);
    userList[ID][0]++;
    console.log(userList)
  }

  const banned = id_list.filter((id) => userList[id][0] >= k);
  console.log(banned)

  const emailList = id_list.map((id) => {
    console.log()
    return userList[id][1].filter((id) => {
      return banned.includes(id);
    }).length;
  });

  return emailList;
}



const ex = [
  [["muzi", "frodo", "apeach", "neo"], ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"], 2],
  // [["con", "ryan"], ["ryan con", "ryan con", "ryan con", "ryan con"], 3],
];
ex.forEach((element) => {
  console.log(solution(element[0], element[1], element[2]));
});
