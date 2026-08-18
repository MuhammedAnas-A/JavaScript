let arr=[1,2,3,4,5,6]
let search = parseInt(prompt("Enter element: "))
let found = false


for(let i=0;i<arr.length;i++){
    if(search==arr[i]){
        console.log("Element found on "+i+"th position")    
        found=true
        break
    }
    
    
    
}

if(found==false){
    console.log("not found")
}
