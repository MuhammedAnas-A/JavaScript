let array=[10,20,30,10,20,10]
let user=parseInt(prompt("Enter element: "))
rep=0
for(i=0;i<array.length;i++){
    if(user==array[i]){
        rep+=1
    }
    
}
console.log(rep+" times repeated")