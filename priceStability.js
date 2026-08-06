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