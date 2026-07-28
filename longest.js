let input = [1, 1, 0, 1, 1, 1, 0, 1, 1]
let index = 0
let total = 0
let prev = 0
let curr = 0

for(let i=0;i<input.length;i++){
    if(input[i] == 1){
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

console.log("Longest Streak: "+prev)
console.log("Longest Streak Starts At: "+index)
console.log("Total Winning Streak: "+total)