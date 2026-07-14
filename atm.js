let withDraw=prompt("Enter Amount to Withdraw: ")


let nOf500Notes=Math.floor(withDraw/500)
let remOfwithdraw=withDraw%500
let nOf200Notes=Math.floor(remOfwithdraw/200)
let remOfwith=remOfwithdraw%200
let nOf100Notes=Math.floor(remOfwith/100)
let balanceRem=remOfwith%100

alert("No.of ₹500 notes: "+nOf500Notes)
alert("No.of ₹200 notes: "+nOf200Notes)
alert("No.of ₹100 notes: "+nOf100Notes)
alert("Remaining note: "+balanceRem)