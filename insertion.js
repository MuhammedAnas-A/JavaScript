let arr = [1,2,3,4,5,6]
let pos = parseInt(prompt("Enter the position: "))
let element = parseInt(prompt("Enter the element to add: "))
console.log("Current array = "+arr)
for(let i=arr.length-1;i>=pos;i--){
    
    
        arr[i+1] = arr[i] 
    }
    arr[pos] = element
console.log("New array = "+arr)
