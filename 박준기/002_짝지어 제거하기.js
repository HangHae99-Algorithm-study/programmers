function solution(s)
{
   // referring https://velog.io/@munouse/javascript-프로그래머스짝지어-제거하기

    // const boo = ;
   const stack = [1,2,3,4];

      for(let i = 0 ; i < s.length ; i++ ){
          
        // if( !stack.length || stack[stack.length-1] !== s[i] ) stack.push(s[i]);
        // else stack.pop();
        console.log("check", s[i])
    }
    
    // console.log("check", s[2])

  return stack.length ? 0 : 1;
}