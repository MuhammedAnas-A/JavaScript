let containers = [300, 250, 50, 100, 75]
let totalStored = 0
let accepted = []
let skipped = []
let remaining = 0



for(let i=0;i<containers.length;i++){
    if(totalStored+containers[i]<=500){
        totalStored+=containers[i]
        accepted.push(containers[i])
        remaining = 500 - totalStored
    }
    else{
        skipped.push(containers[i])
    }
}

console.log("Accepted: "+accepted)
console.log("Skipped: "+skipped)
console.log("Total Stored: "+totalStored)
console.log("Remaining: "+remaining)