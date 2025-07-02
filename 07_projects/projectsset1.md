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
