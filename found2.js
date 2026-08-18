let arr = [5, 9, 13, 17, 22, 31]
let found = false

for(let i=0;i<arr.length;i++){
    if(arr[i] % 2 == 0){
        found =true
        console.log("Even number exists")
        break
    }   
}
if(!found){
    console.log("No even numbers")
}