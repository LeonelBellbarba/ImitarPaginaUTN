let video = document.querySelector("video")
let duracion = document.querySelector(".duracion")


const reproducir =()=>{
    video.play()
    duracion.textContent = Number.parseFloat(video.duration).toFixed(2) 
}   

const pausar =()=>{
    video.pause()
}


// Imagenes
let imagenes = document.querySelector(".imagenArrastrar")

let imagen1 = document.getElementById("imagen1")
let imagen2 = document.getElementById("imagen2")
let imagen3 = document.getElementById("imagen3")

// Cajas

let caja1 = document.getElementById("caja1")
let caja2 = document.getElementById("caja2")
let caja3 = document.getElementById("caja3")

imagenes.addEventListener("dragstart",(event)=>{
    event.dataTransfer.setData("Text",event.target.src)
    console.log(event)
})

// dragOver
caja1.addEventListener("dragover", (event)=>{
    event.preventDefault()
    
})
caja2.addEventListener("dragover", (event)=>{
    event.preventDefault()
    
})
caja3.addEventListener("dragover", (event)=>{
    event.preventDefault()
    
})

// drop
caja1.addEventListener("drop", (event)=>{
    console.log(event)
    let guardar = event.dataTransfer.getData("Text")
    caja1.innerHTML = `<img src=${guardar} alt="imagen"/>`
    imagen1.style.display="none"
})

caja2.addEventListener("drop", (event)=>{
    console.log(event)
    let guardar = event.dataTransfer.getData("Text")
    caja2.innerHTML = `<img src=${guardar} alt="imagen"/>`
    imagen2.style.display="none"
})

caja3.addEventListener("drop", (event)=>{
    console.log(event)
    let guardar = event.dataTransfer.getData("Text")
    caja3.innerHTML = `<img src=${guardar} alt="imagen"/>`
    imagen3.style.display="none"
})


function reinicarJuego(){
    window.location.reload();
}



