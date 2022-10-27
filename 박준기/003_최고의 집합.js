function solution(n, s) {
  var answer = [];

  multiFun(n, s);

  return answer;
}

function multiFun(n, s) {
  // let midNum = Math.floor(s/2)
  // // for( let i = 1; i <= midNum; i++){
  // //       for( let j = s-i; j <)
  // // }
  // console.log("Check midNum", midNum)
  // console.log("Checking", s)

  console.log("Check n s", n, s);

  let temp = (s / n) >> 0;

  console.log("Check temp", temp);
}
