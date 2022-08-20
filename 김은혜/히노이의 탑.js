function solution(n) {
  let answer = [[]];

  dp(n, 1, 3, 2);

  return arr;
}
let arr = [];

function dp(n, src, dst, mid) {
  if (n == 1) {
    arr.push([src, dst]);
  } else {
    dp(n - 1, src, mid, dst);
    arr.push([src, dst]);
    dp(n - 1, mid, dst, src);
  }
}
