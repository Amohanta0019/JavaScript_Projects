# Projects related to DOM

## project link
[Click Here!!](https://github.com/Amohanta0019/JavaScript_Projects/tree/main/04_Number%20Game)

# Solution Code

## Random Number Guessing Game For Fun 🎰

```javascript

document.addEventListener('DOMContentLoaded', (event) => {
    let randomNum = parseInt(Math.random() * 100) + 1;
    const submit = document.querySelector("#subt");
    const userInput = document.querySelector("#guessfield");
    const guessSlot = document.querySelector(".gusses");
    const remaining = document.querySelector(".lastResult");
    const loORhi = document.querySelector(".lowORhigh");
    const startOver = document.querySelector(".resultParas");

    const p = document.createElement("p");

    let prevGuess = [];
    let noOfGuesses = 0;
    const maxGuesses = 9;

    let playGame = true;

    if (playGame) {
        submit.addEventListener('click', function (e) {
            e.preventDefault();
            const guess = parseInt(userInput.value);
            validateGuess(guess);
        });
    }

    function validateGuess(guess) {
        if (isNaN(guess)) {
            alert("Please enter a valid number");
        } else if (guess < 1) {
            alert("Please enter a number greater than 0");
        } else if (guess > 100) {
            alert("Please enter a number less than 101");
        } else {
            prevGuess.push(guess);
            if (noOfGuesses >= maxGuesses) {
                displayGuess(guess);
                displayMsg(`Game Over. The random number was ${randomNum}`);
                endGame();
            } else {
                displayGuess(guess);
                checkGuess(guess);
            }
        }
    }

    function checkGuess(guess) {
        if (guess === randomNum) {
            displayMsg("Congratulations!!! You guessed it right");
            endGame();
        } else if (guess < randomNum) {
            displayMsg("Number is too low");
        } else if (guess > randomNum) {
            displayMsg("Number is too high");
        }
    }

    function displayGuess(guess) {
        userInput.value = '';
        guessSlot.innerHTML += `${guess} `;
        noOfGuesses++;
        let rem = maxGuesses - noOfGuesses;
        if (rem!= -1) {
            remaining.innerHTML = `${rem}`;
        }else{
            remaining.innerHTML = `none`;
        }
        
    }

    function displayMsg(msg) {
        loORhi.innerHTML = `<h2>${msg}</h2>`;
    }

    function endGame() {
        userInput.value = '';
        userInput.setAttribute("disabled", true);
        p.classList.add("button");
        p.innerHTML = '<button id="newGame">Start New Game</button>';
        startOver.appendChild(p);
        playGame = false;
        newGame();
    }

    function newGame() {
        const newGameButton = document.querySelector('#newGame');
        newGameButton.addEventListener('click', function () {
            randomNum = parseInt(Math.random() * 100 + 1);
            prevGuess = [];
            noOfGuesses = 1;
            guessSlot.innerHTML = '';
            remaining.innerHTML = `${maxGuesses}`;
            loORhi.innerHTML = '';
            userInput.removeAttribute('disabled');
            startOver.removeChild(p);
            playGame = true;
        });
    }
});


```