let num = document.getElementById('num')
let val = 0;
function Increment() {
    val++
    Update()
}
function Decrement() {
    val--
    Update()
}
function Update() {
    num.innerHTML = val
}