
let finalReservoirA = 4250
let finalReservoirB = 9000
let finalReservoirC = 9250


let initialReservoirA = finalReservoirA / 0.85
let waterLostA = initialReservoirA * 0.15

let initialReservoirB = finalReservoirB/0.90
let waterLostB=initialReservoirB*0.10

let initialReservoirC=finalReservoirC+250



alert("Initial Water on Reservoir A: "+initialReservoirA)
alert("Water Lost on Reservoir A: "+waterLostA)
alert("Final Water on Reservoir A: "+finalReservoirA)
alert("Initial Water on Reservoir B:"+initialReservoirB)
alert("Water Lost on Reservoir B:"+waterLostB)
alert("Final Water on Reservoir B: "+finalReservoirB)
alert("Initial Water on Reservoir C:"+initialReservoirC)
alert("Water Lost on Reservoir C: 250 L")
alert("Final Water on Reservoir C: "+finalReservoirC)