let products=prompt("Enter  total no.of products: ")

let rproduct=products%24
let box=Math.floor(products/24)
let rbox=box%18
let pallet=Math.floor(box/18)
let rpallet=pallet%18
let cont=Math.floor(pallet/12)
let rcont=cont%8
let ship=Math.floor(cont/8)

alert("Remaining products: "+rproduct)
alert("Extra boxes: "+rbox)
alert("Exttra pallets: "+rpallet)
alert("Extra containers: "+rcont)
alert("Total ship: "+ship)





