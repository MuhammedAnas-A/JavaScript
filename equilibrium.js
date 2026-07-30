let array = [3, 1, 5, 2, 2]
let equilibrium = 0
let equilibriumm = 0
let sum = 0
let left = 0
let right = 0

for(let i=0;i<array.length;i++){
    sum+=array[i]
}

for(let i=0;i<array.length;i++){
    right = sum - left - array[i]
    
    if(left == right){
        equilibrium = array[i]
    }
    left += array[i]
    
    
    
    
    
}



if(equilibrium == 0){

    console.log(" is not equilibrium")
}
else{

    console.log(equilibrium)
}