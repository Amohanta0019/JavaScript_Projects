const randColor = function () {
    const hex = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random()*16)];      
    } 
    return color;
};
// console.log(randColor());
let intv;

const changeBG = function(){
    document.body.style.backgroundColor = randColor();
};

const changeBGintv = function(){
    if (!intv) {
        intv = setInterval(changeBG,1000);    
    }
};

const stopChangeBG = function(){
    clearInterval(intv);
    intv = null;
};

document.querySelector("#start").addEventListener("click",changeBGintv);
document.querySelector("#stop").addEventListener("click",stopChangeBG);





