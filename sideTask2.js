// let arr = [2,5,3,4,7,6]
// let arr = [1, 3, 2, 5, 4, 6, 2]
// let arr = [1, 2, 2, 4, 3, 5, 1]
let arr = [1, 2, 3, 4, 5]
let firstPeak = 0

let found = false
for(let i=1;i<arr.length - 1;i++){
  
    if(arr[i]>arr[i+1] && arr[i]>arr[i-1]){
        
        firstPeak = arr[i]
        found = true
        console.log("First Peak = "+firstPeak)
        break
    }
    
   
}
if(!found){
    console.log("No peak")
}
