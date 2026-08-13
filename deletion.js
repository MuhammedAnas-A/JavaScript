let arr = [1,2,3,4,5]
console.log("Current Array = "+arr)

let pos = parseInt(prompt("Enter position: "))

for(let i = pos; i < arr.length - 1; i++){
    arr[i] = arr[i+1]
} 
arr.length--

console.log("New Array = "+arr)