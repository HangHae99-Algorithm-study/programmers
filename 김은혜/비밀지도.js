function solution(n, arr1, arr2) {
  var answer = [];
  // 2진수로 바꿔주기
  for (let i = 0; i < n; i++) {
    // toString(2)은 이진수로 반환하는 것.
    let change = (arr1[i] | arr2[i]).toString(2);
    //console.log(change)
    let line = [];
    for (let j = change.length - n; j < change.length; j++) {
      if (change[j] === "1") {
        line.push("#");
      } else {
        line.push(" ");
      }
    }
    answer.push(line.join(""));
  }
  return answer;
}

let arr1 = [46, 33, 33, 22, 31, 50];
let arr2 = [27, 56, 19, 14, 14, 10];
console.log(solution(5, arr1, arr2));
