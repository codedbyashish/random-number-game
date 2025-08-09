const randomNumber=parseInt(Math.random()*100+1)
console.log(randomNumber);

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
        alert('Please Enter the valid Number ')
     }else if(guess< 1){
      alert('Please Enter a number more than 1 ')
     }else if(guess>100){
        alert('Please Enter a number less than  100')
     }else{
        prevguess.push(guess)
        if(numguess===11){
           dispalyguess(guess)
           displayMessGage(`Game Over. Random number was ${randomNumber}`)
           endgame()
        }else{
            dispalyguess(guess)
            checkguess(guess)
        }
     }
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
function dispalyguess(guess){
  userinput.value= ''
  guesslot.innerHTML+=`${guess}, `
  numguess++;
  remainig.innerHTML=`Attmpets: ${11-numguess}/10`
  

}

function displayMessGage(messgae){
lower_high.innerHTML=`<h2>${messgae}</h2>`
}
function newgame(){

}
function endgame(){
// end game 
userinput.value=''
userinput.setAttribute('disabled','')
p.classList.add('button')
p.innerHTML='<h2 id="newgame">start new game</h2>'
start_over.appendChild(p)
}