# Projects related to DOM

## Project Link
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code

## project 1

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

## project 2 

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

