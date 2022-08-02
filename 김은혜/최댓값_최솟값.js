function solution(s) {
  var answer = "";
  let trim = s.split(" "); //문자열의 공백 제거후 배열에 저장한다. split함수가 그 기능을 한다
  let max = Math.max.apply(null, trim); // 최대값을 구한다
  let min = Math.min.apply(null, trim); // 최소값을 구한다
  answer = min + " " + max; // 출력값은 최대값과 최소값사이에 공백이 있는 문자열이다
  return answer;
}
