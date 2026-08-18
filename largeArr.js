let arr = [7,2,4,2,5]
let small = 0

for(let i=0;i<arr.length;i++){
    if(small==0 || arr[i]<small){
        small = arr[i]
    }
}
console.log(small)