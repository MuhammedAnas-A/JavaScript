let arr = [1,2,3,4,5,6]

for(let i=0;i<arr.length;i++){
    if(arr[i]%2 == 0){
        arr[i]=-15
    }
    else{
        arr[i]=-1
    }
  
}
console.log(arr)