let arr = [1,2,3,4,5,6]
let ele = parseInt(prompt("Enter a number: "))
let found = false

for(let i=0;i<arr.length;i++){
    if(ele == arr[i]){
        console.log("Element found")
        found = true
    }
}
if(!found){
    console.log("Not found")
}