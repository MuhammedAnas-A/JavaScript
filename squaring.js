let array=[1,2,3,4,5,6]

for(let i=0;i<array.length;i++){
    if(array[i]%2==0){
        array[i]=array[i]*array[i]
    }
}
console.log(array)