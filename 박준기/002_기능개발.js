function solution(progresses, speeds) {
    var answer = [0];
    let days = progresses.map((progress, index) => 
    Math.ceil((100 - progress) / speeds[index]))
    let maxDay = days[0]
    
    
    for(let i = 0, j = 0; i< days.length; i++){
        // 1. i = 0, j = 0 => 7
        // 2. i = 1, j = 0 => 3
        // 3. i = 2, j = 0 => 9
        
        if(days[i] <= maxDay) {
        // 1. i = 0, days[0]: 7 <= 7
        // 2. i = 1, days[1]: 3 <= 7
        // 3. i = 2, days[2]: 9 <= 7
            
            answer[j] += 1;
            // 1. j= 0, answer[0] = 0 + 1 => answer = [1]
            // 2. j= 0, answer[=] = 1 + 1 => answer = [2]
            
        }else {
            // 3. i = 2, max days = days[2]: 9
            maxDay = days[i];
            
            answer[++j] = 1;
        }
    }
    
    return answer;
}