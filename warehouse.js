let arr = [45, 8, 0, 65, 12, 3, 0, 100, 18]
let replacementProducts = 0
let urgentStocks = 0
let lowStockProduct = 0
let normalStockProduct = 0
let replacementIndex = []
let avgStock = 0
let highestStock = 0
let lowNonZero = 0
let count = 0
let found = 0



for(let i=0;i<arr.length;i++){
    if(arr[i] == 0){
        replacementProducts++
        replacementIndex.push(i)
    }
    if(arr[i]>=1 && arr[i]<=10){
        urgentStocks++
    }
    if(arr[i]>=11 && arr[i]<=20){
        lowStockProduct++
    }
    if(arr[i] > 20){
        normalStockProduct++
    }
    if(arr[i] != 0){
        count++
        avgStock += arr[i]
    }
    if(highestStock < arr[i]){
        highestStock = arr[i]
    }


    if(arr[i] != 0){
        if(found == 0){
            lowNonZero = arr[i]
            found = 1

        }
        if(lowNonZero > arr[i]){ 
            lowNonZero = arr[i]
        }
    }
}


console.log("Replacement Products: "+replacementProducts)
console.log("Urgent Stocks: "+urgentStocks)
console.log("Low Stock Products: "+lowStockProduct)
console.log("Normal Stock Products: "+normalStockProduct)
console.log("Replacement Indexes: "+replacementIndex)
console.log("Average Stock (excluding zeros): "+avgStock/count)
console.log("Highest Stock: "+highestStock)
console.log("Lowest Non-Zero Stock: "+lowNonZero)


