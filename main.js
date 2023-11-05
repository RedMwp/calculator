const display = document.querySelector('.main-d');

//buttons

const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const zero = document.getElementById('zero');
const dot = document.getElementById('dot');


const devide = document.getElementById('devide');
const sub = document.getElementById('sub');
const add = document.getElementById('add');
const muilti = document.getElementById('muilti');
const del = document.getElementById('del');
const equal = document.getElementById('equal');
const auto = document.querySelector('.auto');
const reset = document.getElementById('reset');

function calculate(){
    var d = display.innerText;
    var a = eval(d);
    display.innerHTML = a;
    auto.innerHTML = a;
}
function autCalc(){
    
    var d = display.innerText;
    var a = eval(d);
    if (a === undefined) {
        a = ''
    }
    auto.innerHTML = a;
}
setInterval(autCalc,100)

one.onclick = function(){
      display.innerHTML += 1;
}
two.onclick = function() {
    display.innerHTML += 2;
}
three.onclick = function() {
    display.innerHTML += 3;
}
four.onclick = function(){
      display.innerHTML += 4;
}
five.onclick = function() {
    display.innerHTML += 5;
}
six.onclick = function() {
    display.innerHTML += 6;
}
seven.onclick = function(){
      display.innerHTML += 7;
}
eight.onclick = function() {
    display.innerHTML += 8;
}
nine.onclick = function() {
    display.innerHTML += 9;
}

zero.onclick = function(){
      display.innerHTML += 0;
}
dot.onclick = function() {
    display.innerHTML += '.';
}
devide.onclick = function() {
    display.innerHTML += '/';
}
add.onclick = function() {
    display.innerHTML += '+';
}
muilti.onclick = function() {
    display.innerHTML += '*';
}

sub.onclick = function() {
    display.innerHTML += '-';
}

equal.onclick = function(){
    calculate()
}
reset.onclick = function(){
    display.innerHTML=''
}
