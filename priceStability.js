let prices=[120,118,125,119,130,128]
let increasedDays=0
let decreasedDays=0
let UnchangedDays=0
let biggestIncrease=0
for(let i=0;i<prices.length;i++){
    if(prices[i]<prices[i+1]){
        increasedDays++;
        let difference=prices[i+1]-prices[i]
        console.log(prices[i],difference)
        if(difference>biggestIncrease){
            biggestIncrease=difference
        }
        
    }
    if(prices[i]>prices[i+1]){
        decreasedDays++;
    }
    if(prices[i]==prices[i+1]){
        UnchangedDays++;
    }

    

}        
console.log("Increased Days= "+increasedDays)
console.log("Decreased Days= "+decreasedDays)
console.log("Unchanged Days= "+UnchangedDays)
console.log("Biggest Increase= "+biggestIncrease)