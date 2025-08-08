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
     

}
function checkguess(guess){
    //checking the guess
}
function dispalyguess(guess){

}

function displayMessGage(messgae){

}
function newgame(){

}
function endgame(){

}