let array = [10, 2, 3, 8, 4, 5, 20];
let high = 0
let secHigh = 0

for(let i=0;i<array.length;i++){
    if(array[i] > high){
        secHigh = high
        high = array[i]
        
    }
    if(array[i] > secHigh && array[i] < high){
        secHigh = array[i]
    }
}

console.log("Highest Element: "+high)
console.log("Second Highest Element: "+secHigh)

