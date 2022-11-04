function solution(s) {
    
    // number of deleted 0
    let deleteCount = 0;
    // number of loop until '1'
    let count = 0;
    
    // looping through until s becomes '1'
    while(s !== '1'){
        
        // length of binary number
        let originLen = s.length
        
        // reassign binary number without 0
        s=s.split('').filter(one => one==='1').join('')
        
        // length of binary number without 0
        let oneLen = s.length
        
        // find number of deleted 0 until 1
        deleteCount += originLen - oneLen
        // convert string to binary number
        s= oneLen.toString(2)
        // number of loop until s become 1
        count++
    }
    
    return [count,deleteCount]
}