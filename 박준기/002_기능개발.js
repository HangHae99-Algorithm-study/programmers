function solution(progresses, speeds) {
    let answer = [0]
    let days = progresses.map((progress, index) => {
        return Math.ceil((100-progress) / (speeds[index]))
    })
    
    let maxDay = days[0]
    
    for(let i =0, j=0; i< days.length; i++){
                
        if(days[i] <= maxDay){
            answer[j] += 1
        }
        else{
            maxDay = answer[i]
            answer[++j] =1
        }
    }
     
    // console.log("Check i", i, "Check j", j)    
    

    return answer;
}