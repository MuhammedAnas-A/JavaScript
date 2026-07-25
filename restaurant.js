let groups = [2,4,3,5,2,6,4]
let capacity = 20
let total = 0
let groupSeated = []

let rejected = 0

for(let i=0;i<groups.length;i++){
    if(total+groups[i]<=capacity){
        total+=groups[i]
        groupSeated.push(groups[i])
        
        
    }
    else{
        rejected = groups[i]
        break
    }
}
console.log("Groups Seated: "+groupSeated)
console.log("Total Customers Seated:"+total)
console.log("Groups Seated Count: "+groupSeated.length)
console.log("Empty Seats Remaining: "+(capacity - total))
console.log("Rejected Group: "+rejected)


