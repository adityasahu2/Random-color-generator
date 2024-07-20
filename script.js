function getRandomColors(){
    let color1 = Math.floor((Math.random() *255) +1)
    let color2 = Math.floor((Math.random() *255) +1)
    let color3 = Math.floor((Math.random() *255) +1)
    return `rgb(${color1},${color2},${color3})`
}
// let getRandomColors = () => {
//     let color1 = Math.floor((Math.random() *255) +1)
//     let color2 = Math.floor((Math.random() *255) +1)
//     let color3 = Math.floor((Math.random() *255) +1)
//     return `rgb(${color1},${color2},${color3})`
// }

let boxes = document.getElementsByClassName("box")
// let boxes = document.querySelectorAll(".box")

function randomColors(){
    Array.from(boxes).forEach(element => {
        let color = getRandomColors()
        element.style.backgroundColor = color
        element.textContent = color
    })
}
// let randomColors = () => {
//     Array.from(boxes).forEach(element => {
//         let color = getRandomColors()
//         element.style.backgroundColor = color
//         element.textContent = color
//     })
// }

setInterval(randomColors,1000)