let arr = [1, 3, 5, 4, 2, 6, 8]
// let arr = [5, 4, 3, 2, 1]
// let arr = [1, 3, 3, 2, 4, 4, 1]
function directionChange(arr){
    
    
    let decreasing = 0
    
    let count = 0
    for(let i=0; i<arr.length - 1; i++){
        
        if(arr[i] < arr[i+1]){
            if(count === -1){
                decreasing++
            }
            count = 1
        }
        else if(arr[i] > arr[i+1]){
            if(count === 1){
                decreasing++
            }
            count = -1
        }
    }  
      return decreasing
        
    
    }
    console.log(directionChange(arr))
    // console.log(count)
// }