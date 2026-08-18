// let arr = [4, 7, 2, 9, 6, 3] 
// let arr = [2, 4, 6, 8]
let arr = [-5, -2, -9, -3, 4]
// let arr = [11, 5, 17, 9, 3]
let found = false 
let largestOdd = arr[0]


for(let i=0;i<arr.length;i++){
if(arr[i] % 2 != 0){
    if(found == false){
        largestOdd = arr[i]
        found = true
    }
        else if(arr[i] > largestOdd){
        largestOdd = arr[i]
        }
    }
}

if(found){
console.log("Largest Odd = "+largestOdd)
}
if(!found){
console.log("No odd number found")
}




