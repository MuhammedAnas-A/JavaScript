let colors = ["red", "blue", "green"]
let index = 0
setInterval(()=>{

    let text = document.querySelector('.hello')
    if(index == colors.length){
        index = 0
    }
    text.style.color = colors[index]
    index++
    

},1000)