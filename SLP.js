let number100 = Math.floor(Math.random()* 100);
let number10 = Math.floor(Math.random()* 100);

function play10() {
    let uNum =parseInt(document.getElementById("txtnum").value);
    let number10 = Math.floor(Math.random()* 10);
if (uNum==number10){
    document.getElementById("spnResulttrue").innerHTML = "Congrats!, You won!";
}
else  if
(uNum < number10 )
    document.getElementById("spnResultfalse").innerHTML = "You guessed wrong, try higher.";
else {
    document.getElementById("spnResultfalse").innerHTML = "You guessed wrong, try lower.";
   
}
 }
 function play100() {
    let uNum =parseInt(document.getElementById("txtnum").value);
   
if (uNum==number100 ){
    document.getElementById("spnResulttrue").innerHTML = "Congrats!, You won!";
}
else  if
(uNum < number100  )
    document.getElementById("spnResultfalse").innerHTML = "You guessed wrong, try higher.";
else {
    document.getElementById("spnResultfalse").innerHTML = "You guessed wrong, try lower.";
   
}
 }



