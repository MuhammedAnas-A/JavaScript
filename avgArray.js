let arr = [1,2,3,4]
let avg = 0
let sum = 0
  
for(let i=0;i<arr.length;i++){
    sum += arr[i]
}
avg = sum / arr.length
console.log("Sum of array: "+sum)
console.log("Average of array: "+avg)