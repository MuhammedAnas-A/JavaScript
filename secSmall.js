let arr = [1,2,3,4,4,6]
let small = arr[0]
let secSmall = arr[1]

for(let i=0;i<arr.length;i++){
    if(arr[i]<small){
        secSmall = small
        small = arr[i]
    }
    if(arr[i]>small && arr[i]<secSmall){
        secSmall = arr[i]
    }
}

console.log(secSmall)