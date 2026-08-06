let arr = [1,2,3,4,5]
let num = parseInt(prompt("Enter a number: "))


for(let i=0;i<arr.length;i++){
    if(num == arr[i]){
        
        console.log(num+" is on index "+i)
    }
}