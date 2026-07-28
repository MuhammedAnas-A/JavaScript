let input = [120, 150, 90, 180, 200, 140, 80, 110, 130]
let prev = 0
let curr = 0
let total = 0
let index = 0

for(let i=0;i<input.length;i++){
    if(input[i]>=100){
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

console.log("Longest Heavy Traffic Period: "+prev)
console.log("Longest Period Starts At: Index "+index)
console.log("Total Heavy Traffic Periods: "+total)