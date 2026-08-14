// let arr = [10,20,10,30,10,40]
// let arr = [5,2,5,8,5,9]
let arr = [1,2,3,4,5]
let user = parseInt(prompt("Enter element to delete: "))
let rep = 0
console.log("Current array = "+arr)

for(let i=0;i<arr.length;i++){
    if(user != arr[i]){
        arr[rep] = arr[i]
        rep++
    }
}
arr.length = rep

console.log("New array = "+arr)