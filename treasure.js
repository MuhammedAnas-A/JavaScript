// let coins = [50, 20, 100, 10, 5, 200, 25]
let coins = [100, 75, 60, 25, 50]
// let coins = [300, 20, 30, 150, 40]
let target = 250
let collected = []
let skipped = []
let total = 0
let rem = 0

for(let i=0;i<coins.length;i++){
    if(total + coins[i] <= target){
        collected.push(coins[i])
        total += coins[i]
    }
    else{
        skipped = coins[i]
    }
}
rem = target - total


console.log("Input: "+coins)
console.log("Collected Coins: "+collected)
console.log("Skipped Coins: "+skipped)
console.log("Final Total: "+total)
console.log("Remaining to Target: "+rem)