// let arr = [3, 0, 2, 0, 4]
let arr = [4, 2, 0, 3, 2, 5]
// let arr = [5, 4, 1, 2, 1, 4, 2, 6]
// let arr = [1, 2, 3, 4, 5]
// let arr = [5, 4, 3, 2, 1]
let height = 0
let total = 0
let water = 0
let rem = 0
let walls = 0
for(let i=0;i<arr.length;i++){

    if(walls == 0){
        walls = arr[i]
    }
    

    if(height == 0){
        height = arr[i]
        height++
    }
    if(arr[i]>=total){
        water = height - walls
        total += arr[i]
    }
    else{
        total = arr[i]
    }

}


console.log("The Water Amounts are = "+total+" units")