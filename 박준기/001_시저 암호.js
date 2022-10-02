function solution(s, n) {
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lower = "abcdefghijklmnopqrstuvwxyz";
    var answer= '';
    
     for(var i =0; i <s.length; i++){
         // i = 0,
         // i = 1.
        var text = s[i];
        if(text == ' ') {
            answer += ' '; 
            // continue;
        }
         
        const upperOrLower = upper.includes(text) ? upper : lower;
         
        let index = upperOrLower.indexOf(text) + n;
      console.log("Checkig index", index)
      console.log("Checking uOL", upperOrLower)
      if (index >= upperOrLower.length) {
        index -= upperOrLower.length;
        }
     }
    
    
    return s;
}