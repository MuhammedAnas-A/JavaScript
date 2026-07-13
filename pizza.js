let pizza=parseInt(prompt("Enter no.of pizzas: "))
let friends=parseInt(prompt("Enter no.of friends: "))


totalSlice=pizza*8 
slicePerFriend=Math.floor(totalSlice/friends)
remainingSlice=totalSlice%friends

alert("Total slices: "+totalSlice)
alert("slice per friend: "+slicePerFriend)
alert("Remaining slices: "+remainingSlice)