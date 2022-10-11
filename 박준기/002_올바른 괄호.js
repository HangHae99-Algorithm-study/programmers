function solution(s) {
  // Accuracy : 69.5%
  // Efficiency : 30.5%
  // initializing count for stack
  let stackCount = 0;
  // looping through each element of
  for (let i = 0; i < s.length; i++) {
    // if one of element is ( append 1 otherwise
    stackCount += s[i] === "(" ? 1 : -1;
    // if stackCount is smaller than 0 just return false
    // ,which terminate both the loop and function
    if (stackCount < 0) return false;
    // if stackCount is 0 return true else false
  }
}
