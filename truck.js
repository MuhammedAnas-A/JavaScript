let boxes = [50, 80, 70, 120, 110, 150, 90, 130]
let capacity = 500
let loaded = []
let skipped = []
let remaining = 0
let finalWeight = 0
let previous = 0



for(let i=0;i<boxes.length;i++){
    
    if(finalWeight+boxes[i]<=capacity && boxes[i]>=previous){
        previous = boxes[i]
        finalWeight+=boxes[i]
        loaded.push(boxes[i])
        remaining = capacity - finalWeight
    }
    else{
        skipped.push(boxes[i])
    }
}

console.log("Input:"+boxes)
console.log("Loaded :"+loaded)
console.log("Skipped :"+skipped)
console.log("Final Weight :"+finalWeight)
console.log("Remaining :"+remaining)