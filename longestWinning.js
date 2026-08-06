let arr = [1, 1, 0, 1, 1, 1, 0,0, 1,1,1,1]
let index = 0
let total = 0
let previous = 0
let current = 0

for(let i=0;i<arr.length;i++){
    if(arr[i] == 1){
        current++

        if(current == 2){
            total++
        }
        if(current > previous){
            previous = current
            index = i - current + 1
        }
    }
    else{
        current = 0
    }
}

console.log("Longest Streak: "+previous)
console.log("Longest Streak Starts At: Index "+index)
console.log("Total Winning Streak: "+total)