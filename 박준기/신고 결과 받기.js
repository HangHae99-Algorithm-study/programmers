function solution(id_list, report, k) {
    const answer = new Array(id_list.length);
    answer.fill(0)
    const report_list = {} 
    
    id_list.map((user)=>{
        report_list[user] = []
    })
    
    report.map((user)=>{
    const [user_id, report_id] = user.split(' ')
    if(!report_list[report_id].includes(user_id))
    // {
    report_list[report_id].push(user_id)
        // console.log(user_id, report_id)
    // } 
    console.log("Checking user ", user)
    
    // console.log("Checking user ", user.split(' '))
    // console.log("Checking report_list ", report_list[report_id])
    // console.log("Checking user " , user)
    }
   )
    
    
    for(const key in report_list){
        console.log("Checking key value ", key)
        // console.log("What is key value ", report_list[key])
        if(report_list[key].length >= k){
            report_list[key].map((user)=>{
                answer[id_list.indexOf(user)] += 1
                // console.log("Checking user ", user)
            }) 
        }
    }
    
    
   return report_list
}