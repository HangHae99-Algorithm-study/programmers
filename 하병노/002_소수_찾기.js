// https://school.programmers.co.kr/learn/courses/30/lessons/12921

// 1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.

// 소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.
// (1은 소수가 아닙니다.)

// 제한 조건
// n은 2이상 1000000이하의 자연수입니다.

// 접근 방법
// 예를 들어 n이 12 라고 할 때
// 1부터 12 사이에 존재하는 소수는
// 2,3,5,7,11 다섯개 이다.

// 숫자 x 가 있다고 하자
// 소수는 2보다 크거나 같아야 하고
// x의 제곱근 보다 작거나 같은 자연수로 나눠 떨어지면 안된다.

// 왜냐면
// x가 소수가 아니라면 예를 들어 x가 18이라면 소인수 분해로 나타낼 수 있다.
// 즉 2 * 3^2 = 2*9 = 18 이런식으로

// 18의 제곱근은 4.242640687119285... 으로 4에 근사한 값입니다.

function solution(n) {
    var cnt = 0;
    for (let i = 2; i <= n; i++) {
        if (isPrimeNumber(i)) {
            cnt++;
        }
    }
    return cnt;
}

function isPrimeNumber(n) {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(solution(49));
