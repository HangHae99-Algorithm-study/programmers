// let numbers = [1,10,5,8,7,6,4,3,2,9]

// function quickSort(numbers, start, end) {
//     if (start >= end) { // 원소가 1개인 경우
//         return
//     }

//     let pivot = start // 피봇은 첫번째 원소
//     let i = start + 1
//     let j = end

//     let temp;

//     while(i <= j) {     // 엇갈릴 때 까지 반복
//         while(numbers[i] <= numbers[pivot]) {   // 피봇값보다 큰 값을 만날 때까지 오른쪽으로 이동
//             i++;
//         }
//         while(numbers[j] >= numbers[pivot] && j > start) {   // 피봇값보다 작은 값을 만날 때까지 왼쪽으로 이동
//             j--;
//         }
//         if(i > j) { // 현재 엇갈린 상태라면 피봇값과 교체
//             temp = numbers[j];
//             numbers[j] = numbers[pivot];
//             numbers[pivot] = temp;
//         } else {
//             temp = numbers[j];
//             numbers[j] = numbers[i];
//             numbers[i] = temp;
//         }
//     }

//     quickSort(numbers, start, j-1);
//     quickSort(numbers, j+1, end);
// }

// console.log(quickSort(numbers, 0, 9))

function quickSort(array) {
  if (array.length < 2) {
    return array;
  }
  const pivot = [array[0]];
  const left = [];
  const right = [];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else if (array[i] > pivot) {
      right.push(array[i]);
    } else {
      pivot.push(array[i]);
    }
  }
  console.log(`left: ${left}, pivot: ${pivot}, right: ${right}`);
  return quickSort(left).concat(pivot, quickSort(right));
}
const sorted = quickSort([5, 3, 7, 1, 9, 2, 4, 6, 8, 10]);
console.log(sorted);


// 위의 방법으로 퀵 정렬을 구현하는 것은 매우 쉽다.
// array의 길이가 1 이하이면 해당 배열을 그대로 return하고
// 원소의 0번째 요소를 pivot으로 잡는다.
// left와 right 배열을 새로 만든 후,
// 0번째 요소 다음 요소부터 순회하며 pivot과 값을 비교하여
// left 배열, right 배열에 데이터를 push한 후 
// 하위 배열에 대해 다시 재귀 호출을 하면서 세 배열을 합쳐준다.
// 출처: https://im-developer.tistory.com/135 [Code Playground:티스토리]