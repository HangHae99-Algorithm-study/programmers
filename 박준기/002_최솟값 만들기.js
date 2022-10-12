function solution(A,B){
    
    // Accuracy : 69.6
    // Efficiency : 30.4
    
    // initializing answer with 0
    var answer = 0;
    
    // Sorting A in ascending order
    A.sort(function(a,b){return a-b})
    // Sorting A in ascending order
    B.sort(function(a,b){return b-a})
    
    // While looping through, multiply each number from the two array. Then, append the number to answer
    for(let i=0; i<A.length; i++){
        answer += A[i] * B[i]
    }
    
    return answer;
}