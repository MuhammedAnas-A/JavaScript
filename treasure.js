let coins = [50, 20, 100, 10, 5, 200,500, 25]
let target = 250
let total = 0
let collectedCoin = []
let skippedCoin = []
let finalTotal = 0


for(let i=0;i<coins.length;i++){
    if(total+coins[i]<=target){
        total+=coins[i]
        collectedCoin.push(coins[i])
       
    }
    else{
        skippedCoin.push(coins[i])
    }
}
console.log("Collected Coins: "+collectedCoin)
console.log("Skipped Coins: "+skippedCoin)
console.log("Final Total: "+total)
console.log("Remaining to Target: "+(target - total))
