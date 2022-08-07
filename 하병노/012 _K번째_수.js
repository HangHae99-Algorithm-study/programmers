// https://school.programmers.co.kr/learn/courses/30/lessons/42748

// commands 는 2차원 배열을 원소로 가짐
// 그 원소는 각각 [시작, 끝, 정렬후 k번째수]

// array 로 [1, 5, 2, 6, 3, 7, 4] 가 들어오면 
// commands [[2, 5, 3]] 가 이와 같을때는
//          [5, 2, 6, 3] 을 오름차순 정렬
//          [2, 3, 5, 6] 의 k번째(3번째) = 5
// 이런식

function solution(array, commands) {
    let answer = [];
    console.log(commands)

    for (let i = 0; i < commands.length ; i++){

        console.log(i+1,'번째 시도 시작')
        console.log("들어온 배열 :", commands[i])
        let start = commands[i][0]-1 // 인덱스 값으로 쓰기 위해 -1 해줌
        console.log('시작숫자 :',start+1) // 콘솔에는 ~번째로 쓰기 위해 +1해줌

        let end = commands[i][1]
        console.log('끝 숫자 :',end)

        let k = commands[i][2]-1 // 인덱스 값으로 쓰기 위해 -1 해줌
        console.log('k번째 :',k+1)

        let slicedArr =  array.slice(start, end)
        console.log(`${start+1}번째 부터 ${end}번째 까지 자르면 : ${slicedArr} 가 된다!`)

        let sortedArr = slicedArr.sort((a,b) => a-b)
        console.log("오름 차순 정렬하면! ",sortedArr)
        console.log(`이제 ${k+1}(k)번째 수는? `,sortedArr[k])

        answer.push(sortedArr[k])
        console.log("answer 배열에 푸시 : ",answer)

        console.log(i+1,'번째 시도 끝')
        console.log()
    }

    return answer;
}


console.log(solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]])) // [5, 6, 3]
console.log()


const solsol = (array, commands) => {
    console.log('이거는 다른 풀이')
    return commands.map(el =>{
        const [start, end, posittion] = el
        const newArr = array.slice(start-1, end).sort((a,b) => a-b)
        return newArr.at(posittion - 1)
    })
}


console.log(solsol([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]])) // [5, 6, 3]
