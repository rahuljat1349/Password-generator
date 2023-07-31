let run = () => {

    let easy = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    let strong = "@#$&_%!;";
    let very_strong = "~^*()_-+=[]{};:'/?.>,<*`";

    let cb1 = document.getElementById("easy").checked;
    let cb2 = document.getElementById("strong").checked;
    let cb3 = document.getElementById("very_strong").checked;



    let charran = () => easy[Math.round(Math.random() * (easy.length - 1))];
    var pass = "";

    let len = 0;


    let loop = () => {
        while (len < inp.value) {
            pass += charran();
            len++;
        }
    }


    if (cb1) {
        easy = easy;
        loop();

    }
    else if (cb2) {
        easy += strong;
        loop();

    }
    else if (cb3) {
        easy += strong + very_strong;
        loop();

    }

    para.innerHTML = pass;
}

let para = document.getElementById("para")
let inp = document.getElementById("input")

let btn = document.getElementById("btn")
btn.addEventListener("click", () => {
    run();
    event.preventDefault();
    copybtn.style.background = "brown"
    copybtn.innerHTML = "copy to clipboard"

})


let copybtn = document.getElementById("copybtn");
copybtn.addEventListener("click", () => {
    navigator.clipboard.writeText(para.innerHTML);
    event.preventDefault();
    copybtn.style.background = "rgb(73, 30, 30)"
    copybtn.innerHTML = "Copied to clipboard"

})