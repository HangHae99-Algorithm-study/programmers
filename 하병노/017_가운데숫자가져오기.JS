// https://school.programmers.co.kr/learn/courses/30/lessons/12903

// 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요.
// 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

function solution(s) {
  let wordLen = s.length;
  if (wordLen % 2 === 1) {
    let mid = Math.ceil(wordLen / 2);
    return s[mid - 1];
  } else {
    let mid = wordLen / 2;
    return s[mid - 1] + s[mid];
  }
}

console.log("solution(s) 결과");
console.log(solution("안녕하십니까"));
console.log(solution("안녕하세요"));
console.log(solution("abcde"));
console.log(solution("qwer"));
console.log();

function anothersolution(s) {
    return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}

console.log("anothersolution(s) 결과");
console.log(solution("안녕하십니까"));
console.log(solution("안녕하세요"));
console.log(anothersolution("abcde"));
console.log(anothersolution("qwer"));
console.log();


function othersolution(s) {
    let mid = Math.ceil(s.length / 2) - 1
    return s.substring(mid, s.length % 2 === 0 ? mid+2 : mid+1);
}

console.log("othersolution(s) 결과");
console.log(solution("안녕십하니까"));
console.log(solution("안녕하세요"));
console.log(othersolution("abcde"));
console.log(othersolution("qwer"));


// 속도 차이
// solution < anothersolution < othersolution