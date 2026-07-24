let array=[10,20,30,40,50]
let search=parseInt(prompt("Enter element to search:"))


let found=false
for(let i=0;i<array.length;i++){

    if(search==array[i]){
        console.log("Element found on array",i)
        found=true
    }

}
if(found==false){
    console.log("Not found")
}