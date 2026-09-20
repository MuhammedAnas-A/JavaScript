function createBox(){
    let width = document.querySelector('.width').value
    let height = document.querySelector('.height').value
    let color = document.querySelector('.color').value
    let radius = document.querySelector('.radius').value
    let box = document.querySelector('.box')
    box.style.width = width + "px"
    box.style.height = height +"px"
    box.style.backgroundColor = color 
    box.style.borderRadius = radius +"px"

}