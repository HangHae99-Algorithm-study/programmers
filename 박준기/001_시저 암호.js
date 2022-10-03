function solution(s, n) {
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lower = "abcdefghijklmnopqrstuvwxyz";
    var answer= '';
    
     // let count = 0
     for(var i =0; i <s.length; i++){
         // i = 0,
         // i = 1.
        
        var text = s[i];
        if(text == ' ') {
            answer += ' '; 
            continue;
            // count += 1
        }
        
        // console.log("Check text", text)
         
        const upperOrLower = upper.includes(text) ? upper : lower;
         
//         console.log("Check upperOrLower", typeof upperOrLower)
         
//         console.log("Check upperOrLower index",upperOrLower[0])
         
        let index = upperOrLower.indexOf(text) + n; 
      // let beforeIndex = upperOrLower.indexOf(text)
      // console.log("Check before index", beforeIndex)
      console.log("Checkig index", index)
      console.log("Checking uOL", upperOrLower)
      if (index >= upperOrLower.length) {
        index -= upperOrLower.length;
       // console.log("Check index here", index)
       answer += upperOrLower[index]  
        }
     }
    
    return answer;
}