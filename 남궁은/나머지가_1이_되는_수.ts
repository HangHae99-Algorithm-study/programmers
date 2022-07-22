const solution = (n: number): number => {
  let answer: number[] | number = [];

  for (let i = 0; i <= n; i++) {
    if (n % i === 1) {
      answer.push(i);
    }
  }
  answer = Math.min(...answer);
  return answer;
};

console.log(solution(10));
console.log(solution(12));
