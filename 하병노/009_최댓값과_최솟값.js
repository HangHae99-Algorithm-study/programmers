// https://school.programmers.co.kr/learn/courses/30/lessons/12939

// 문자열 s에는 공백으로 구분된 숫자들이 저장되어 있습니다. 
// str에 나타나는 숫자 중 최소값과 최대값을 찾아 
// 이를 "(최소값) (최대값)"형태의 문자열을 반환하는 함수, solution을 완성하세요.
// 예를들어 s가 "1 2 3 4"라면 "1 4"를 리턴하고, "-1 -2 -3 -4"라면 "-4 -1"을 리턴하면 됩니다.

// 제한 조건
// s에는 둘 이상의 정수가 공백으로 구분되어 있습니다.


console.log(solution("1 2 3 4"))
console.log(solution("-1 -2 -3 -4"))
console.log(solution("-1 -1"))

// function solution(s) {
//     let answer;
//     answer = s.split(" ");
//     let maxNum = Math.max(...answer);
//     let minNum = Math.min(...answer);
//     answer = `${minNum} ${maxNum}`
//     return answer;
// }

function solution(s) {
    return `${Math.min(...s.split(" "))} ${Math.max(...s.split(" "))}`;
}

// function solution(s) {
//     var arr = s.split(" ");
//     var strMax = 0;
//     var strMin = 0;
//     for(var i=0; i<arr.length; i++ ){
//         if(!strMax){
//             strMax = parseInt(arr[i]);
//         }
//         if(strMax < parseInt(arr[i])){
//             strMax = parseInt(arr[i]);
//         }  
//     }
//      for(var i=0; i<arr.length; i++){
//          if(!strMin){
//              strMin = parseInt(arr[i])
//          }
//          if(strMin > parseInt(arr[i])){
//              strMin = parseInt(arr[i]);
//          }
//      }
//     var a = String(strMin);
//     var b = String(strMax);
//     var answer = a+" "+b
//     return answer;
// }