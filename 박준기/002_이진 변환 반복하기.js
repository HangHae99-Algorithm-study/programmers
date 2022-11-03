function solution(s) {
    let deleteZero =0
     let count =0
     // while(s.length!==1){
         const originLen = s.length
         s=s.split('').filter(v=>v==='1').join('')
         
         console.log('hello',s)
         
         // const len = s.length
         
         // console.log('check', len)
         
     //     deleteZero+=originLen-len
     //     s=len.toString(2)
     //     count++
     // }
     // return[count,deleteZero]
 }