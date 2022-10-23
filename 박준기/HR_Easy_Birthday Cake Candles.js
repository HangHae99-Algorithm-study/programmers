function birthdayCakeCandles(candles) {
    // Write your code here
    
    // Initializing max number with first index of candles array
    let max = candles[0]
    
    // Count number of max among candles array
    let count = 0
    
    // Looping through candles array and find max number
    for(let i = 0; i< candles.length; i++){
        if(max< candles[i+1]){
            max = candles[i]
        }
    }
    
    // Looping through candles array
    // If there is a max number, then increment count
    for(let i = 0; i < candles.length; i++){
        if(candles[i] === max){
            count++
        }
    }
    return count
}