function solution(n) {
    // i = 2, n = 3, c = 3
    let a = 0, b = 1, c = n;

    for(let i = 2; i <= n; i++) {
    // i = 2, c = 0 + 1 => 1
    //      , a = 1
    //      , b = 1
    // i = 3, c = 1 + 1 => 2
    //      , a = 1
    //      , b = 2
    c = (a + b)%1234567 ;
    a = b;
    b = c;
    }
  
    // i = 2, return 1
    // i = 3, return 2
    // console.log("Hey ", 4 % 3 )
    // console.log("Checking", ())
    return c;
    
    
}