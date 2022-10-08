function solution(s, n) {
  const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lower = 'abcdefghijklmnopqrstuvwxyz';
  let answer = '';
  
  for(let i = 0; i < s.length; i++){
      
      let text = s[i];
      console.log("Check text", text)
      if(text == ' '){
         answer += ' ';
          continue; 
      }
      
      let upperOrLower = (upper.includes(text) ? upper : lower)
      
      let index = upperOrLower.indexOf(text) 
      if(index > upperOrLower)
  }
  
  // console.log('Check ', s.length)

  return answer;
}
