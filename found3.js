let arr = [34, 28, 45, 39, 52, 18]
let found = false

for(let i=0;i<arr.length;i++){
    if(arr[i] >= 50){
        found =true
        console.log("Atleast one student passed")
        break
    }   
}
if(!found){
    console.log("No students passed")
}