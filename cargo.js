let weights=[250,180,400,120,300,150]
let capacity=1000
let loadedBoxes=[]
let totalWeight=0
let boxLoaded=0
let remBoxes=0
let rem=0

for(let i=0;i<weights.length;i++){
    
    if(totalWeight+weights[i]<=capacity){
        totalWeight+=weights[i]
        loadedBoxes.push(weights[i])
        boxLoaded=loadedBoxes.length
        remBoxes=weights.length-loadedBoxes.length
    }
    else{
        rem=weights[i]
        break
    }
}
console.log("Loaded Boxes: "+loadedBoxes.toString())
console.log("Total Weight: "+totalWeight)
console.log("Boxes Loaded: "+boxLoaded)
console.log("Boxes Remaining"+remBoxes)
console.log("Next Box ( "+rem+"kg ) cannot be loaded because it exceeds the truck capacity.")
