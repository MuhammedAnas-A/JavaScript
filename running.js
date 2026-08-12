let scores = [50, 80, 60, 120, 90, 150, 130]
let finalLeader = 0
let leaderChanges = 0
let firstLeader = scores[0]
let lowestScoreSeen = scores[0]
let largestLeadAchieved = scores[0]
// let movingLeader = scores[0]


console.log("Start:")
console.log("Leader = "+firstLeader)
console.log("Lowest Score = "+lowestScoreSeen)
console.log("Leader Changes = "+leaderChanges)
console.log(" ")


for(let i=1;i<scores.length;i++){
    let currentScore = scores[i]
    if(currentScore > largestLeadAchieved){
        console.log("Score = "+scores[i])
        console.log(+currentScore+" > "+largestLeadAchieved+" -> New Leader")
        largestLeadAchieved = currentScore
        leaderChanges++
        console.log("Leader Changes = "+leaderChanges)
        console.log(" ")
    }
    else{
        console.log("Score = "+scores[i])
        console.log("Not greater than Leader ("+largestLeadAchieved+")")
        console.log("Leader remains "+largestLeadAchieved)
        console.log(" ")
    }

    if(lowestScoreSeen > scores[i]){
        lowestScoreSeen = scores[i]
        
    }
    
    finalLeader = largestLeadAchieved
    
    
   
  
    
   
}

console.log("Final Leader: "+finalLeader)
console.log("Leader Changes: "+leaderChanges) 
console.log("First Leader: "+firstLeader) 
console.log("Lowest Score Seen: "+lowestScoreSeen) 
console.log("Largest Lead Achieved: "+(finalLeader - lowestScoreSeen)) 
console.log("Final Leader - Lowest Score: "+(finalLeader - lowestScoreSeen)) 