// let arr = [1,2,3,2,1,5]
// let arr = [5,4,3,2,8,9]
// let arr = [1,2,2,3,4,3,2]
let arr = [1,2,3,2,3,4,5,1]
function longestStableRun(arr){

    let count = 1
    let decreasing = 1
    let increasing = 1
    
    for(let i=0;i<arr.length - 1;i++){
        
        if(arr[i] < arr[i+1]){
            
                
                increasing++
                decreasing = 1
                if(increasing > count){
                        count = increasing
                }
            
        }
        
        
        else if(arr[i] > arr[i+1]){
            
                
                decreasing++
                increasing = 1
                if(decreasing > count){
                        count = decreasing
                }
            
            
        }
        else{
                increasing = 1
                decreasing = 1
        }
        
}
  return count   
}

console.log(longestStableRun(arr))