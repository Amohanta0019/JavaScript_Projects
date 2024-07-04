# Projects related to DOM

## project link
[Click Here!!](https://github.com/Amohanta0019/JavaScript_Projects/tree/main/01_Color%20Changer)

# Solution Code

## background color changer

```javascript

const buttons = document.querySelectorAll('.button')
// console.log(buttons);

const body = document.querySelector("body")

buttons.forEach(function(button) {
    console.log(button);
    button.addEventListener('click', function(e){
        console.log(e);
        console.log(e.target);
        if (e.target.id === 'pink') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'orange') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'skyblue') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'teal') {
            body.style.backgroundColor = e.target.id;
        }
    })
});










```