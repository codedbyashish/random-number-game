// all query selector
let randomNumber=parseInt(Math.random()*100+1)
const button=document.querySelector('.button button')
const userinput=document.querySelector('.input-box input')
const guesslot=document.querySelector('.perviousgues')
const result=document.querySelector('.rem')
const lower_high=document.querySelector('.lower-hi')
const start_over=document.querySelector('.holding-perviousguess')
const remainig = document.querySelector('.rem');


const p=document.createElement('progress')
let prevguess=[]
let numguess=1

let playgame =true;
if(playgame){
    button.addEventListener('click',function(e){
        e.preventDefault()
      const guess=  parseInt(userinput.value)
      validateGuess(guess)
    })
}

function validateGuess(guess){
    //  valdition of game
     if(isNaN(guess)){
      alert('Please enter a valid number between 1 and 100');
        shakeinput()
     }else if(guess< 1){
      alert('Please Enter a number more than 1 ')
     }else if(guess>100){
        alert('Please Enter a number less than  100')
     }else{
        prevguess.push(guess)
        if(numguess===11){
           dispalyguess(guess)
           displayMessGage(`Game Over! Random number was ${randomNumber}`)
           endgame()
        }else{
            dispalyguess(guess)
            checkguess(guess)
        }
     }
}
// shake effect when number is no inputed by the user
function shakeinput(){
  const input=document.querySelector('.input-box input')
    input.classList.add('shake');
    setTimeout(() => {
    input.classList.remove('shake');
  }, 400);
}



function checkguess(guess){
    //checking the guess
    if(guess===randomNumber){
      displayMessGage(`🎉 Winner! You guessed it perfectly! `)
      endgame()
    }else if(guess<randomNumber){
        displayMessGage(`Too low! Maybe your number is hiding up high 😉`)
    }else if(guess>randomNumber){
       displayMessGage(`Too high! You might hit the clouds ☁️`)
    }
}

// attemps given by user
function dispalyguess(guess){
  userinput.value= ''
  guesslot.innerHTML+=`${guess}, `
  numguess++;
  remainig.innerHTML=`Attmpets: ${11-numguess}/10`
  

}

function displayMessGage(messgae){
lower_high.innerHTML=`<h2>${messgae}</h2>`
}

// end game  function
function endgame(){
userinput.value=''
userinput.setAttribute('disabled','')
button.setAttribute('disabled','')
const p = document.createElement('div');
p.classList.add('newgame-container')
p.innerHTML='<h2 id="newgame">Start New Game</h2>'
start_over.appendChild(p)
playgame=false
newgame()
}
// new game function
function newgame(){
const newgame=document.querySelector('#newgame')
newgame.addEventListener('click',function(){
  randomNumber=parseInt(Math.random()*100+1)
  prevguess=[]
  numguess=1
  guesslot.innerHTML=`Pervious guess :${''}`
  remainig.innerHTML=`Attempts: 10/10`
  userinput.removeAttribute('disabled')
  button.removeAttribute('disabled');
  start_over.removeChild(document.querySelector('.newgame-container'));
  lower_high.innerHTML = '';
  playgame=true
})
}