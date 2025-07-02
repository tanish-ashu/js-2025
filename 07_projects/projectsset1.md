# Projects related to DOM

## Project Link
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code

## project 1 (Color Change Document)

```javascript
console.log("Tanishk")
const buttons = document.querySelectorAll('.button');
// above obtainer nodelist of buttons
console.log(buttons);
const body = document.querySelector("body");
// got the element body
console.log(body);

// applying function on each node list element i.e button
buttons.forEach(function(button){
  console.log(button);
  button.addEventListener('click', function(e){
    console.log (e);
    console.log(e.target);
    if(e.target.id === 'grey'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'white'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'blue'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'yellow'){
      body.style.backgroundColor = e.target.id;
    }
  })
});


```

## project 2 (BMI Calculator)

```javascript
const form = document.querySelector('form');

//  this usecase will give you empty (it takes values the empty    values while page load at that time itself);
//const height = parseInt(document.querySelector('#height').value)

// The event Listener returns a callback , we caught the 'e'
form.addEventListener('submit', function(e){
  e.preventDefault();     // stop the default action, submit maybe
  
  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results');

  if(height === '' || height < 0 || isNaN(height)){
    results.innerHTML = `Please give a valid height ${height}`;
  }else if (weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML = `Please give a valid weight ${weight}`;
  }else{
    const bmi = (weight / ((height*height)/10000)).toFixed(2);
    // show result
    results.innerHTML = `<span>${bmi}</span>`;
  }
});

```

## Project 3 (Updating clock)

```javascript
const clock = document.getElementById('clock');
//document.querySelector('#clock');  


setInterval(function(){
  let date = new Date()
  //console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000)

```

## Project 4 (Gues the number Challange)


```javascript

let randomNumber = parseInt(Math.random()*100 +1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaning = document.querySelector('.lastResult')

const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){
  submit.addEventListener('click', function(e){
    e.preventDefault()
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  })
}


// validation value is valid 
function validateGuess(guess){
  if(isNaN(guess)){
    alert('Please enter a vaild number');
  }else if(guess < 1){
    alert('Please enter a number greate than 1');
  }else if(guess > 100){
    alert('Please enter a number less than 100');
  }else{
    prevGuess.push(guess)
    if(numGuess === 11){
      displayGuess(guess);
      displayMessage(`Game Over, Random number was ${randomNumber}`);
      endGame();
    }else{
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

// checks value is equal (won), low or high from the key number
function checkGuess(guess){
  if(guess === randomNumber){
    displayMessage(' WINNER, You gussed it right');
    endGame();
  }else if(guess > randomNumber){
    displayMessage('Number Gussed is TOO Large');
  }else{
    displayMessage('Number Gussed is TOO Small');
  }
}

// values clean, update guess, 
function displayGuess(guess){
  userInput.value = ''; // clean up after using the input value
  guessSlot.innerHTML += `${guess}, `; // this pushes the gusses values inside the varible
  numGuess++;
  remaning.innerHTML = `${11 - numGuess}`;
}


//lowOrHi message printer
function displayMessage(message){
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame(){
  userInput.value = ''
  userInput.setAttribute('disabled', '')
  p.classList.add('button')
  p.innerHTML = `<h2 id="newGame" > Start New Game </h2>`;
  startOver.appendChild(p)
  playGame = false;
  newGame();
}

function newGame(){
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e){
    // cleaning and reseting values then allowing to play new
    randomNumber = parseInt(Math.random()*100 +1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaning.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disable')
    startOver.removeChild(p);

    playGame = true;

  })

}

```

