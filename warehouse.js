let array = [45, 8, 0, 65, 12, 3, 0, 90, 18, 2, 100]
let replaceProduct = 0
let urgentStock = 0
let lowStockProduct = 0
let normalStockProduct = 0
let replaceIndex = []
let avgStock = 0
let highStock = 0
let lowNonZero = 0
let count = 0


for(let i=0;i<array.length;i++){
    if(array[i] == 0){
        replaceProduct++
        replaceIndex.push(i)
        
    }
    if(array[i]>=1 && array[i]<=10){
        urgentStock++
    }
    if(array[i]>=11 && array[i]<=20){
        lowStockProduct++
    }
    if(array[i]>20){
        normalStockProduct++
    }
    if(array[i] != 0){
        avgStock+=array[i]
        count++
    }
    if(array[i] > highStock){
        highStock = array[i]
    }
    if(array[i] > 0){
        if(array[i] < lowNonZero || lowNonZero == 0){
            lowNonZero = array[i]
        }
    }


}
console.log("Replacement Products: "+replaceProduct)
console.log("Urgent Restocks: "+urgentStock)
console.log("Low Stock Products: "+lowStockProduct)
console.log("Normal Stock Products: "+normalStockProduct)
console.log("Replacement Indexes: "+replaceIndex)
console.log("Average Stock (excluding zeros): "+avgStock/count)
console.log("Highest Stock: "+highStock)
console.log("Lowest Non-Zero Stock: "+lowNonZero)
