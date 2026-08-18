let num = parseInt(prompt("Enter a number: "))
let arr = [1,2,4,4,5,4,7]
let count = 0

for(let i=0;i<arr.length;i++){
    if(num == arr[i]){
        count++
    }
    
}

if(count==0){
    
    console.log("Not Found")
}
console.log(count)