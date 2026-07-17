let names=["Messi","Neymar","Ronaldo"]

console.log("Elements before splicing: ",names)

let position=parseInt(prompt("Enter position of element to add: "))
let amount=parseInt(prompt("How many element need to remove: "))
let add=prompt("Enter element need to add: ")

names.splice(position, amount, add)

console.log(names)