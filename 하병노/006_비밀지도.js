// https://school.programmers.co.kr/learn/courses/30/lessons/17681

// 비밀지도
// 지도는 한변의 길이가 n인 정사각형 배열
// 전체 지도는 두장의 지도를 겹쳐서 얻음
// 공백은 길 #는 벽

// 1 ≦ n ≦ 16
// arr1, arr2는 길이 n인 정수 배열로 주어진다.
// 정수 배열의 각 원소 x를 이진수로 변환했을 때의 길이는 n 이하이다. 
// 즉, 0 ≦ x ≦ 2n - 1을 만족한다.


// arr1 과 arr2에 들어오는 배열 요소 10진수를 모두 2진수로 변환해야함
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number/toString

// 그리고 변환한 값을 새로운 변수 biArr1 , biArr2 에 각각 넣어서 복사하자
//
// 각각 biArr1 , biArr2 의 같은 인덱스 요소들을 비트연산한다. 
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Bitwise_AND

// console.log(9 & 30)
// let num1 = 30
// let num2 = 9
// console.log(num1.toString(2))
console.log((46|27).toString(2))
// console.log(num2.toString(2).padStart(5, 0))

console.log(Boolean(1))
console.log(Boolean(0))

function solution(n, arr1, arr2) {

    let biArr1 = [];  
    let biArr2 = [];

    let conArr = []
    let ansArr = []

    // console.log(arr1[0])
    for (let i = 0; i < arr1.length ; i++) {
        biArr1.push(arr1[i].toString(2).padStart(n,0))
        biArr2.push(arr2[i].toString(2).padStart(n,0))
    }
    console.log(biArr1)
    console.log(biArr2)
    
    // 음 여기까지 삽질이군

    // 그냥 비트 | 연산으로 끝나네

    // biArr1.map((el) => {console.log(el)})
    for (let i =0; i< n; i++) {
        conArr.push(arr1[i] | arr2[i])
    }
    console.log(conArr)
    
    for (let i =0; i< n; i++) {
        ansArr.push(conArr[i].toString(2).padStart(n,0))
    }
    console.log('비트 | 연산 결과 : ',ansArr)

    let pickAllOne = /1/i;
    let pickAllZero = /0/i;
    

    // let answer = ansArr.map((el)=>{return el.replace(/1|0/g, (a) => +a ? '#' : ' ')})
    // +a 해야만 되는 이유가 뭘까

    let answer = ansArr.map((el)=>{return el.replace(/1/g, '#').replace(/0/g, ' ')})

    return answer;
}


console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]))