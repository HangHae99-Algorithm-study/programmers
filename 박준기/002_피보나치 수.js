function solution(n) {
    
    let a= 0, b=1, c=n
    
    for(let i = 2; i<=n; i++){

        
        c = (a + b) % (1234567)
        // i = 2, c = 0+1 => 1
        // i = 3, c = 1+1 => 2
        // i = 4, c = 1+2 => 3
        // i = 5, c = 2+3 => 5
       
        a = b
        // i = 2, a = 1
        // i = 3, a = 1
        // i = 4, a = 2
     
        b = c
        // i = 2, b = 1
        // i = 3, b = 2
        // i = 4, b = 3
    }
    
    return c
    
}