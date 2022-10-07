function solution(s, n) {
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lower = "abcdefghijklmnopqrstuvwxyz";
    var answer= '';
    
     let count = 0;
     
     for(var i =0; i <s.length; i++){
         // i = 0,
         // i = 1.
        var text = s[i];
        if(text == ' ') {
            // console.log("Check i", i)
            answer += ' '; 
            // console.log("Check answer", answer)
            // continue;
        }
         
          // console.log("Check answer outside of if", answer)
        // console.log("Check text", text)
        const upperOrLower = upper.includes(text) ? upper : lower;
         
     let index = upperOrLower.indexOf(text) + n; 
  
      if (index >= upperOrLower.length) {
       
        index -= upperOrLower.length;
            }
       answer += upperOrLower[index];  
     }
    return answer;
}
