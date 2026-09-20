function createHead(){
    let div = document.querySelector('.div')
    let heading = document.createElement('h1')

    heading.textContent = "Hello World!"
    heading.style.color = "red"
 
    div.appendChild(heading)
}

