// let arr = [1,2,3,2,1,5]
let arr = [5,4,3,2,8,9]
// let arr = [1,2,2,3,4,3,2]
// let arr = [1,2,3,2,3,4,5,1]
function longestStableRun(arr){

    let count = 0
    let decreasing = 0
    let increasing = 0
    
    for(let i=0;i<arr.length - 1;i++){
        
        if(arr[i] < arr[i+1]){
            
                
                increasing++
                count = increasing
            
        }
        
        
        if(arr[i] > arr[i+1]){
            
                
                decreasing++
                count = decreasing
            
            
        }
        
     return count   
    }
}

console.log(longestStableRun(arr))