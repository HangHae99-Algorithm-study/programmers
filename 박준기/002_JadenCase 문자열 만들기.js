function solution(s) {
    
    // Declaring array
    const answer = [];
     
     // Spliting string with an empty space into array
     s_list = s.split(' ');
     // Looping through each element of array 
     // then convert first index of element to uppercase 
     // then convert rest elements to lowercase
     s_list.forEach(function(e){
         answer.push(e.slice(0,1).toUpperCase()+e.slice(1).toLowerCase())
     });
     
     // Join each element of array with empty space 
     return answer.join(' ');
 }