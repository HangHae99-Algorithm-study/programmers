// 문제 설명

// 1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.
// 소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.
// (1은 소수가 아닙니다.)

// 소수 찾기
function solution(n) {
    let answer = 0;
    let arr  = []

    // Assigning true value for prime num
    for(let i = 0; i<=n; i++){
        arr[i] = true
    }
    
    // Acc to using Sieve of Eratosthenes 
    // Reassigning false for mutiple of each prime number
    // , which is not prime number
    for(let j=2; j<=n; j++){
        if(arr[j] == true){
             let k = 2
        while(j*k<=n){
            arr[j*k] = false
            k++
        }
      }      
    }
   
   // Counting prime number 
   for(let u=2; u<=n; u++){
       if(arr[u] == true){
           answer++
       }
   }
    return answer
}