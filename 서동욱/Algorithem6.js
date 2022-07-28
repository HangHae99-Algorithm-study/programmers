function solution(n, arr1, arr2) {
    const answer = [];
    for(let i = 0; i < n; i++) {
        let result = '';
        let b1 = '0'.repeat(n - arr1[i].toString(2).length) + arr1[i].toString(2);
        let b2 = '0'.repeat(n - arr2[i].toString(2).length) + arr2[i].toString(2);
        
        for(let j =0; j < n; j++) {
            b1[j] === '1' || b2[j] === '1' ? result += '#' : result += ' ';
        }
        answer.push(result);
    }
    return answer;
}

// 비트 연산에 대한 문제다. arr1, arr2 둘 중 하나라도 1이 포함되어 있다면 "#"을 추가하면 되기 때문에 OR(||)로 처리한다.

// 숫자 및 BigInts의 경우 toString()은 선택적으로 기수(radix)를 매개변수로 취합니다. 기수의 값은 최소 2부터 36까지입니다.

// 기수를 이용함으로써 10진수를 (1, 2, 3, 4, 5...) 다른 진수로 변환할 수 있습니다. 아래는 10진수를 2진수로 변환하는 예제입니다.

// let baseTenInt = 10;
//   console.log(baseTenInt.toString(2));
  // "1010"이 출력됩니다