let weights = [250, 180, 400, 120, 300, 150]
let capacity = 1000
let loaded = []
let totalWeight = 0
let boxLoaded = 0
let boxRem = 0

for(let i=0;i<weights.length;i++){
    if(totalWeight + weights[i] >= capacity){
        console.log("Next Box ("+weights[i]+" kg) cannot be loaded because it exceeds the truck capacity")
        break
    }
    totalWeight += weights[i]  
    loaded.push(weights[i])
}
boxLoaded = loaded.length
boxRem = weights.length - boxLoaded

console.log("Loaded Boxes: "+loaded) 
console.log("Total Weight: "+totalWeight+ "kg")
console.log("Boxes Loaded: "+boxLoaded)
console.log("Boxes Remaining: "+boxRem)
