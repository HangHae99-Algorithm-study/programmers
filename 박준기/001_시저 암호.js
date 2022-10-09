function solution(s, n) {
    
  // Assigning Uppercase and Lowercase alphabet
  const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lower = 'abcdefghijklmnopqrstuvwxyz';
  // Assigning empty string for the answer variab  le
  let answer = '';
  
  // Looping through S input
  for(let i=0; i < s.length; i++){
      
      // Assigning each letter of S 
      let text = s[i];
      // If there is an empty string, append the empty string in the asnwer 
      if(text == ' '){
          answer += ' ';
          // Then jumps over one iteration in the loop
          continue;
      }
      
      // If a text is uppercase or lowercase, assign a whole alphabet of it. 
      const upperOrLower = upper.includes(text)?upper:lower
      
      // Find an index of the text amaong upperOrLower
      // Add n to the index variable
      let index = upperOrLower.indexOf(text) + n;
      
      // If Index is equal and bigger than index
      if( index >= upperOrLower.length){
           // Subtrack and append the upperOrLower.length from the above the index variable
           index -= upperOrLower.length
          
      }
      
      // Appending an answer index among upperOrLower
      answer += upperOrLower[index]
      
  }
  
   return answer;
}
