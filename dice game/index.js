let editNames = document.getElementById("edit-names")
let rollDice = document.getElementById("roll-dice")
let dice1 = document.getElementById("dice-1")
let dice2 = document.getElementById("dice-2")
let display = document.getElementById("display-el")
let p1="player 1"
let p2="player 2"
let player1 = document.getElementById("player1")
let player2 = document.getElementById("player2")
let myTimeOut = setTimeout(changeNames, 2500)
function changeNames() {
    
    
     p1 = prompt("change the player1 names")
     player1.innerHTML = p1;
          player1 = p2
         
         p2 = prompt("cahnge the player2 name ")
         player2.innerHTML = p2;
         player2 = p2 
       
     
    }



rollDice.addEventListener("click",function () {

    let randomNumber = Math.floor(Math.random()*6+1 )
    let randomNumber1 = Math.floor(Math.random()*6+1 )
      dice1.src = `dice${randomNumber}.png` 
      dice2.src = `dice${randomNumber1}.png` 
      

    if (randomNumber<randomNumber1){
        display.innerText =  ` ${p2}  wins`
    }  
    else if (randomNumber>randomNumber1) {
        display.innerText =  `${p1} wins`
    } else {
        display.innerText = "draw"
    }
    
    
    
})

 