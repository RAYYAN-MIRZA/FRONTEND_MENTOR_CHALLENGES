let test = " 1.2345 * 12.36 ";
var check = false;
var dot_count = 0;
var cuurent_str = "";
var num;
var op1;
var op2;
var inp = document.querySelector(".input");

let operator;

inp.addEventListener("input", () => {
    var operatorr = inp.value[inp.value.length - 1];
    inp.value = inp.value.replace(/[^0-9.]/g, '');
    var dotcount = inp.value.split('.').length - 1;
    if(check){
        op2 = inp.value;
    }
    num = inp.value.replace(/[^0-9.]/g, '');
    cuurent_str = num;//inp.value[inp.value.length - 1].replace(/[^0-9.]/g, '');

    if (inp.value === "NaN")
        inp.value = "";

    if (check && operatorr === "=") {
        if (dotcount > 1) { inp.value = "errror"; dotcount = 0; ; cuurent_str = ""; return;}
        handle_equalsign();
        check = false;
    }

    if (operatorr === "+" || operatorr === "*" || operatorr === "-" || operatorr === "/") {
        if (dotcount > 1) { inp.value = "errror"; dotcount = 0; ans_str = ""; cuurent_str = ""; return; }
        op1 = inp.value;
        inp.value = "";
        operator = operatorr;
        check=true;
    }
});

function handle_equalsign() {
    inp.value = eval(op1+operator+op2);
    op1 = inp.value;
    check = false;
    dot_count = 0;
    op2 = "";
}
/*********************************************** */ // for mouse input
let digits = document.querySelectorAll(".sb");
digits.forEach(dig=>{
    dig.addEventListener("click",()=>{
        let last = dig.textContent;
        if(parseInt(last)>=0 && parseInt(last)<=9){
            inp.value+=last;
            if(check){
                op2+=last;
            }
        }
        else if(last === "+" || last === "-" || last === "/" || last === "x"){
            check = true;
            operator = last;
            op1 = inp.value;
            dot_count = op1.split(".").length - 1;
            if(dot_count>1){
                inp.value = "ERROR !!!";
                op1 = "";
                op2 = "";
                operator = "";
                check = false;
                return;
            }
            inp.value = "";
        }
        else if(last === "RESET"){
            check = false;
            inp.value = "";
            op1 = "";
            op2 = "";
            operator = "";
        }
        else if(last === "DEL"){
            inp.value = inp.value.slice(0,-1);
        }
        else if(last === "."){
            dot_count++;
            inp.value += ".";
        }
        else if(last === "=" && check){
            op2 = inp.value;
            handle_equalsign();
        }
    });
});
let ball1 = document.querySelector(".ball1");
let ball2 = document.querySelector(".ball2");
let ball3 = document.querySelector(".ball3");
ball1.addEventListener("click", () => {
    const rootelem = document.documentElement;
    let dataTheme = rootelem.getAttribute('data-theme'), newtheme
    newtheme = 'theme1';
    rootelem.setAttribute('data-theme', newtheme);
});
ball2.addEventListener("click", () => {
    const rootelem = document.documentElement;
    let dataTheme = rootelem.getAttribute('data-theme'), newtheme
    newtheme = 'theme2';
    rootelem.setAttribute('data-theme', newtheme);

});
ball3.addEventListener("click", () => {
    const rootelem = document.documentElement;
    let dataTheme = rootelem.getAttribute('data-theme'), newtheme
    newtheme = 'theme3';

    rootelem.setAttribute('data-theme', newtheme);
});

