let product=prompt("Enter total no.of products: ")

let box=Math.floor(product/24)

let cont=Math.floor(box/15)

let rproduct=product%24

let rbox=box%15


alert("No.of full containers: "+cont)
alert("No.of extra boxes: "+rbox)
alert("Remaining products: "+rproduct)