// let arr = [120, 90, 140, 80, 170, 60, 200]
// let arr = [100, 90, 80, 70, 60]
// let arr = [5, 10, 1, 2]
// let arr = [1,2,3,4,5,0,100]
let arr = [1,5,0,4]
let buyPrice = arr[0]
let buyDay = 0
let sellPrice = arr[0]
let sellDay = 0
let maxProfit = 0
let bestBuyDay = 0
let bestBuyPrice = 0

for(let i=0;i<arr.length;i++){
    if(arr[i] < buyPrice){
        buyPrice = arr[i]
        buyDay = i
    }  
    
    let profit = arr[i] - buyPrice

    if(profit > maxProfit){
        maxProfit = profit
        sellPrice = arr[i]
        sellDay = i
        bestBuyDay = buyDay
        bestBuyPrice = buyPrice
    }
}
if(maxProfit > 0){

    console.log("Buy Price: "+bestBuyPrice)
    console.log("Buy Day: "+bestBuyDay)
    console.log("Sell Price: "+sellPrice)
    console.log("Sell Day: "+sellDay)
    console.log("Maximum Profilt: "+maxProfit)
}
else{
    console.log("No profit Available")
}