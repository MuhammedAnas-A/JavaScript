// let arr = [1,2,3,4,5,0]
// let i = arr.length - 1
// // let sum = 0

// while(i >= 0){
    
//     console.log(arr[i])
//     i--
// }

let arr = [1,2,3,4,5]
let even = []
let odd = []
let i = 0

while(i < arr.length){
    if(arr[i] % 2 == 0){
        even.push(arr[i])
    }
    else{
        odd.push(arr[i])
    }
    i++
}
console.log("Even Numbers = "+even)
console.log("Odd numbers = "+odd)
