function solution(n) {
    
    // Assigning a func that hold a number of binary 1 number from a decimal number
    let countOne = countFunc(n)
    // increment 1 from the given n
    let num = n +1
    
    // Keep looping through if there is a bigger decimal number that has same number of 1 with n's binary number
    while(true){
     
        let nextNumCount = countFunc(num)
        if(nextNumCount === countOne) return num
        num++        
    }
}

// Finding 1 from the converted binary number
function countFunc(c){
    
    // Converting decimal number to binary number
    let binary = c.toString(2)
    let count = 0;
    
    // Increment 1 if there is 1 among the binary number
    for(let one of binary){
        if(one === '1'){
            count++
        }
    }
    return count
}

