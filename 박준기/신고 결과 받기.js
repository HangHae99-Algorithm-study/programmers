function solution(id_list, report, k) {
    
    const arr = new Array(id_list.length)
    arr.fill(0)
    
    const report_list = {}
    
    id_list.map( user => {
        report_list[user] = []
    })
    
    report.map( user => {
        [user_id, report_id] = user.split(' ')
        if(!report_list[report_id].includes(user_id)){
            report_list[report_id].push(user_id)   
        }
    })
    
    for(const key in report_list){
        if(report_list[key].length >= k){
            report_list[key].map(user =>{
                arr[id_list.indexOf(user)] += 1
            })
        }
    }
   
    return arr
}