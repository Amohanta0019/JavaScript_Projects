# Projects related to DOM

## project link
[Click Here!!](https://github.com/Amohanta0019/JavaScript_Projects/tree/main/03_Digital%20Clock)

# Solution Code

## Digital Clock For Local Time ⏰

```javascript

const clk = document.getElementById('clock');

setInterval(function(){
    let date = new Date();
    clk.innerHTML = date.toLocaleTimeString();
},1000)


```