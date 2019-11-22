let button = document.getElementById("button1");
let click = function () {
    document.body.style.backgroundColor = 'pink'
}
button.addEventListener('click', click, false)

let sizeChange = document.getElementsByTagName('button');
let sizeA = function () {
    document.body.style.fontSize = "50px"
}
let sizeB = function () {
    document.body.style.fontSize = "25px"
}
let sizeC = function () {
    document.body.style.fontSize = "15px"
}
sizeChange[1].addEventListener('click', sizeA, false)
sizeChange[2].addEventListener('click', sizeB, false)
sizeChange[3].addEventListener('click', sizeC, false)
