const randomNumber=parseInt(Math.random()*100+1)
const button=document.querySelector('.button')
const userinput=document.querySelector('.input-box')
const guesslot=document.querySelector('.perviousgues')
const result=document.querySelector('.rem')
const lower_high=document.querySelector('.lower-hi')
const start_over=document.querySelector('.holding-perviousguess')

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
      displayMessGage(`You guessed it right `)
      endgame()
    }else if(guess<randomNumber){
        displayMessGage(`Number is TOOOOO low`)
    }else if(guess>randomNumber){
       displayMessGage(`Number is TOOO High`)
    }
}
function dispalyguess(guess){
  userinput.value= ' '
  guesslot.innerHTML+=`${guess}`
  numguess++;
  remainig.innerHTML=`${10-numguess}`
  

}

function displayMessGage(messgae){

}
function newgame(){

}
function endgame(){

}