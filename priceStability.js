<<<<<<< HEAD
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
=======
let prices = [120, 118, 122, 125, 119, 130, 128]
let inreased = 0
let dereased = 0
let unchanged = 0
let biggestInrease = 0

for(let i=0;i<prices.length;i++){
    
    let difference = prices[i+1] - prices[i]

    if(difference > 0){
        inreased++


        if(difference > biggestInrease){
        biggestInrease = difference
    }}
    if(difference < 0){
        dereased++
    }
    if(difference == unchanged){
        unchanged++
    }
}

console.log("Increased Days: "+inreased)
console.log("Decreased Days: "+dereased)
console.log("Unchanged Days: "+unchanged)
console.log("Biggest Increase: "+biggestInrease)
>>>>>>> direction
