let gas = [1, 2, 3, 4, 5]
let cost = [3, 4, 5, 1, 2]
let tank = 0
let start
let found = false
for(let i=0; i<gas.length; i++){
    if(gas[i] - cost[i]>0){
         
        start = i        
        console.log("Starting Point = "+start)
        found = true
        gas[i]+=1
        cost[i]+=1
                
    }
}

if(found){
}
