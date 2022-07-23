// 나머지가 1이 되는 수 찾기


function solution(n) {
    var answer = 0;
    for(let i = 0; i < n; i++){
        if(i % n == 1){
            answer = i
            break;
        }
    }
    return answer;
}

console.log(solution(10))