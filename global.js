let product=prompt("Enter total no.of products: ")

let rproduct=product%24
let nbox=Math.floor(product/24)
let rbox=nbox%20

let npallet=Math.floor(nbox/20)
let rpallet=npallet%18

let cont=Math.floor(npallet/18)
let rcont=cont%15

let truck=Math.floor(cont/15)
let rtruck=truck%12

let dc=Math.floor(truck/12)
let rdc=dc%10

let rw=Math.floor(dc/10)
let rrw=rw%8

let cw=Math.floor(rw/8)
rcw=cw%8


alert("Remaining Country Warehouse: "+rcw)
alert("Remaining Regional Warehouse: "+rrw)
alert("Remaining Distribution Warehouse: "+rdc)
alert("Remaining Trucks: "+rtruck)
alert("Remaining Containers: "+rcont)
alert("Remaining Pallets: "+rpallet)
alert("Remaining Boxes: "+rbox)
alert("Remaining Products: "+rproduct)