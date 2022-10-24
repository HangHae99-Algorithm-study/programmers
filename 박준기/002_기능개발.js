function solution(progresses, speeds) {
    
    let answer = [0]
    
    // Calculating how many days it take to complete from the given progresses & speeds
    let days = progresses.map((progress, index) =>
        Math.ceil((100-progress)/ speeds[index]))
    
    // Initializing Max day from 0 index of days array 
    let maxDay = days[0]
    
    // Looping through days array
    for(let i = 0, j=0; i < days.length; i++){
        
        // if days[i] <= maxDay 
        // then append 1 at answer[j]
        if( days[i] <= maxDay){
          
            answer[j] += 1
            
        // otherwise reassign maxDay with days[i]
        // then pre-increment index of answer = 1
        }else{
            maxDay = days[i]
            answer[++j] = 1
        }
    }
    
    return answer
}