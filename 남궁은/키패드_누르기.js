// https://school.programmers.co.kr/learn/courses/30/lessons/67256

const solution = (nums, hand) => {
  let answer = '';
  let leftHand = '*';
  let rightHand = '#';

  const keypad = {
    1: [0, 3],
    2: [1, 3],
    3: [2, 3],
    4: [0, 2],
    5: [1, 2],
    6: [2, 2],
    7: [0, 1],
    8: [1, 1],
    9: [2, 1],
    '*': [0, 0],
    0: [1, 0],
    '#': [2, 0],
  };

  const distance = (nums, leftHand, rightHand, keypad, hand) => {
    const leftPos =
      Math.abs(keypad[leftHand][0] - keypad[nums][0]) +
      Math.abs(keypad[leftHand][1] - keypad[nums][1]);

    const rightPos =
      Math.abs(keypad[rightHand][0] - keypad[nums][0]) +
      Math.abs(keypad[rightHand][1] - keypad[nums][1]);

    if (leftHand === rightHand) return hand === 'left' ? 'L' : 'R';
    return leftHand < rightHand ? 'L' : 'R';
  };

  for (let num of nums) {
    if (num % 3 === 1) {
      answer += 'L';
      leftHand = num;
    } else if (num !== 0 && num % 3 === 0) {
      answer += 'R';
      rightHand = num;
    } else {
      answer += distance(num, leftHand, rightHand, keypad, hand);
      answer[answer.length - 1] === 'L' ? (leftHand = num) : (rightHand = num);
    }
  }

  return answer;
};

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], 'right'));
console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], 'left'));
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 'right'));
