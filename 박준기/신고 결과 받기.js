function solution(id_list, report, k) {
    const answer = new Array(id_list.length);
    answer.fill(0)
    const report_list = {} 
    
    id_list.map((user)=>{
        report_list[user] = []
    
    })
    
    report.map((user)=>{
    const [user_id, report_id] = user.split(' ')
    // if(!report_list[report_id].includes(user_id)){
    console.log("Checkinng ", report_id)
    console.log(report_list[report_id])
    // report_list[report_id].push(user_id)
        // console.log(user_id, report_id)
    }  
   )   
   return report_list
}