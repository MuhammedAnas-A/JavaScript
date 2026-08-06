let arr = ["Akhil", "Anu", "Rahul", "Neha", "Arun"]
let found = false

for(let i=0;i<arr.length;i++){
    if(arr[i] == "Rahul"){
        found = true
        console.log("Rahul found")
        console.log(i)
        break
    }
}
if(!found){
    console.log("Rahul not found")
}