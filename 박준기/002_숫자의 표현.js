function solution(n) {
    
    // initialzing count variable
    let count = 0
    
    // Looping through i to n
    // if i is divisible by 0 and i is an odd number
    // increment count by 1
    for(let i = 1; i <= n; i++){
        if(n%i ===0 && i%2 !==0){
            count ++
        }
            
    }
    return count;
    
  
}