let array=[10,20,30,50,60]
let user=parseInt(prompt("Enter element from array for replace: "))
let number=parseInt(prompt("Enter replacing element: "))


console.log("Before replacing, Array= "+array)
for(let i=0;i<array.length;i++){
    if(user==array[i]){
          array[i]=number
        
    }
}
console.log("After Replacing, Array= "+array)