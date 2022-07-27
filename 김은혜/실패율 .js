function solution(N, stages) {
  var answer = [];

  let res = [];
  let fail;
  // 실패 횟수
  let rank;
  // 실패 율
  let user = stages.length;
  // 유저의 수
  for (let i = 0; i < N; i++) {
    let row = new Object();
    // 로우 데이터 객체
    let now = i + 1;
    // 현재 스테이지

    fail = 0;
    rank = 0;
    // 실패수와 실패율 초기화
    for (let j = 0; j < stages.length; j++) {
      if (now == stages[j]) {
        // 현재 스테이지와 도전중인 스테이지가 같다면
        fail++;
        // 실패 횟수 ++
      }
    }
    row.stage = now;

    rank = fail / user;
    // 현재 유저의 수를 실패의 수로 나눈다

    if (rank > 1) {
      rank = 1;
    }
    // 만약 실패율이 100%넘어가면 그냥 100%로 해준다.

    row.fail = rank;
    res.push(row);

    user -= fail;
    // 실패한 수만큼 유저수에서 뺀다. 아직 다음 스테이지에 못갔으니
  }

  res.sort(function (a, b) {
    return b.fail - a.fail;
    // 실패율을 내림차순으로 정렬한다.
  });

  for (var i = 0; i < res.length; i++) {
    answer[i] = res[i].stage;
    // answer에 하나 넣어준다.
  }

  return answer;
}
