let arr = [1,2,3,4,4,6]
let large = 0
let sec = 0


for(let i=0;i<arr.length;i++){
    if(arr[i]>large){
        sec = large
        large = arr[i]
        
    }
    if(arr[i]!=large && arr[i]>sec){
        sec = arr[i]
    }
}
console.log(sec)