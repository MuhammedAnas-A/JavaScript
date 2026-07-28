let input = [72, 85, 105, 90, 76, 65, 110, 88, 95]
let curr = 0
let prev = 0
let index = 0
let total = 0

for(let i=0;i<input.length;i++){
    if(input[i]>=60 && input[i]<=100){
        curr++
        if(curr == 2){
            total++
        }
        if(curr > prev){
            prev = curr
            index = i - curr + 1
        }
    }
    else{
        curr = 0
    }
}

console.log("Longest Healthy Period: "+prev)
console.log("Longest Period Starts At: Index "+index)
console.log("Total Healthy Periods: "+total)