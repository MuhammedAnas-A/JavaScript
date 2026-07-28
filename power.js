let input = [45, 38, 60, 42, 35, 30, 75, 48, 40]
let total = 0
let curr = 0
let prev = 0
let index = 0

for(let i=0;i<input.length;i++){
    if(input[i] <= 50){
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

console.log("Longest Efficient Period: "+prev)
console.log("Longest Period Starts At: Index "+index)
console.log("Total Efficient Periods: "+total)