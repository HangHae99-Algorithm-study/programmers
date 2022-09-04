function solution(id_list, report, k) {
    
    const answer = new Array(id_list.length)
    answer.fill(0)
    
    const report_list = {}
    
    id_list.map(user => {
        report_list[user] = []
    })
    
    // working on this logic
    report.map(user => {
        [user_id, report_id] = user.split(' ')
        if(!report_list[report_id].includes(user_id)){
        report_list[report_id].push(user_id)
        }
        // console.log("user_id", user_id)
        // console.log("report_id", report_id)
        // console.log("Checking user",user)
    })
    
    for(key in report_list){
        // console.log(key)
        if(!report_list[key].length >= k){
            answer[id_list.indexOf(key)] += 1
        }
    }
    
    
    return report_list
}