let inputs = document.querySelector("#inputs");
let btn = document.querySelector("#btn");

let randomOne = document.querySelector(".random1");
let randomTwo = document.querySelector(".random2");

let win = document.querySelector(".win");
let lost = document.querySelector(".lost");



btn.addEventListener("click", function(){

    let randm = Math.floor(Math.random() * 5) + 1;

    let inpt = inputs.value;
    let incrment = win.innerText;
    let plus = parseInt(incrment);

    let dicrmnt = lost.innerText;
    let pops = parseInt(dicrmnt);


    if( inpt >= 1 && inpt <= 5){

        if(randm == inpt){
            alert("You are Right");
            let jog = plus + 1;
            win.innerText = jog;
        }else{
             alert("Random number not Match");
            let jiyog = pops + 1;
            lost.innerText = jiyog;
        }
    }else{
        alert("Please Type a Number");
    }

    let total = win.innerText;
    let strn = parseInt(total);

    let loss = lost.innerText;
    let totlos = parseInt(loss);

    let mote = strn + totlos;

    if(mote == 5){
         btn.disabled = true;
         inputs.disabled = true;
     }
    
    inputs.value = "";
});
