# Projects related to DOM

## project link
[Click Here!!](https://github.com/Amohanta0019/JavaScript_Projects/tree/main/05_Colorful%20Background)

# Solution Code

## Unlimited Colors 🎨🌈

```javascript
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






```