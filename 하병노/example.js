// 아직 반복문 사용에 어려움을 겪는분들이 쪼끔 계신거 같아 문제를 만들어 봤습니다.
// 푸신분이 나오면 해답을 업데이트 해드리겠습니다
// 아주 간단한 구구단 문제에요!


// 구구단을 2단부터 9단 까지 차례대로 콘솔에 찍어보려 합니다.

// 2 x 1 = 2
// 2 x 2 = 4
// 2 x 3 = 6
// 2 x 4 = 8
// 2 x 5 = 10
// 2 x 6 = 12
// 2 x 7 = 14
// 2 x 8 = 16
// 2 x 9 = 18

// 3 x 1 = 3
// 3 x 2 = 6
// .
// .
// .

// 과 같은 형식으로 다른 단수로 넘어갈때 구분이 되게 
// 한칸 띄우고 출력 되도록 코드를 작성해 주세요.

// hint! for문으로 작성해봅시다


for(let i=2; i<10 ; i++) {
    for(let j=1; j<10; j++) {
        console.log(`${i} x ${j} = ${i*j}`)
        // reutrn `${i} x ${j} = ${i*j}`
    }
    console.log()
}


// 도전 1
// n을 매개변수로 받아 2단 부터 9단 중 n단 만 출력하는 함수를 작성해보세요.

function challenge1(n) {
    // let arr = [];
    for (let i = n; i < n + 1; i++) {
        for (let j = 1; j < 10; j++) {
            console.log(`${i} x ${j} = ${i * j}`);
            // arr.push(`${i} x ${j} = ${i * j}`);
        }
    }
    // return arr;
}

challenge1(7)



// 도전 2
// n 과 N 을 매개변수로 받아 2단 부터 9단 중 n단 부터 N단 까지를 출력하는 함수를 작성해보세요.

function challenge2(n,N) {

}
