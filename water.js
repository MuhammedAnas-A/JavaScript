let tankCapacity = parseInt(prompt("Enter tank capacity: "))
let endOfDayWater = tankCapacity * 0.8
let waterBeforeRain = endOfDayWater - 320
let waterBeforeFactory = waterBeforeRain + 180
let initialWater = waterBeforeFactory / 0.75  
let waterEvaporate = initialWater * 0.25

alert("Initial Water Stored: "+initialWater+"L")
alert("Evaporated Water: "+waterEvaporate+"L")
alert("Factory Usage: 180L")
alert("Rain Water Added: 360L")
alert("Final water level: "+endOfDayWater+"L")
