let buttons = document.getElementsByClassName("buttons")[0].children
let ravno = document.getElementById("=")
let newButton = document.getElementById("ravno")
let input = document.getElementById("input")
let symbols = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, ".", "+", "-", "÷", "×"]
newButton.onclick = function (event) {
    console.log("ответ");
    event.preventDefault();
    console.log(input.value);
    input.value = eval(input.value.toString());
}
for (p = 0; p < 16; p = p + 1) {
    console.log("p " + p);
    buttons[p].onclick = function (event) {
        event.preventDefault();
        console.log(this);
        if (input.value.length < 15) {
            input.value = input.value + this.innerHTML;
        }
        if (this.innerHTML=="DEL") {
            input.value=""
            
        }
    }
}
input.oninput = function (event) {
    console.log("onchange");
    if (symbols.includes(1)) {

    }
}






















// for (let i = 1;i<11;i=i+1){
//     console.log("слон номер "+i);
// }
// for(let pon=100;pon<600;pon=pon+100){
//     console.log("слон номер " +pon)
// }
// for(let ok=400;ok>24;ok=ok/2){
//     console.log("слон номер " +ok)
// }
// for (let o=2;o<256;o=o*2){
//     console.log("номер " +o);
// }