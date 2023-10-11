var cheat = false;
var result = '';
var player = 0;
var computer = 0;
var cheatselect = '';
var winner = 0;


document.addEventListener("DOMContentLoaded", function() {

function playRound(playerSelection) {



  let computerSelection;
  if(cheat){
    computerSelection =cheatselect;
  }
    else{
    computerSelection = getComputerChoice();
    }
    console.log("Computer choses " + computerSelection);
    console.log("Player choses " + playerSelection);
    if (computerSelection==playerSelection) {
        return "Push";
        winning(3);
      } 
      if (computerSelection=="Scissors" && playerSelection=="Paper") {
        winning(1);
        return "Computer Wins";
      } if (playerSelection=="Scissors" && computerSelection=="Paper") {
        winning(2);
        return "Player Wins";
      }

      if (computerSelection=="Rock" && playerSelection=="Scissors") {
        winning(1);
        return "Computer Wins";
      } if (playerSelection=="Rock" && computerSelection=="Scissors") {
        winning(2);
        return "Player Wins";
      }

      if (computerSelection=="Paper" && playerSelection=="Rock") {
        winning(1);
        return "Computer Wins";
      } if (playerSelection=="Paper" && computerSelection=="Rock") {
        winning(2);
        return "Player Wins";
      }
      function winning(winner){

        if(winner==1){
          beating.src = '/img/computerBeatingMan.gif';
      
        }
        if(winner==2){
          beating.src = '/img/manBeatingComputer.gif';  
        }
        if(winner==3){
          beating.src = "/img/rockPaperScissors.jpg";
        }
      }
  }


    const body = document.querySelector('body');
    const rock = document.createElement('button');
    rock.textContent = 'Rock';
    document.body.appendChild(rock);


    const paper = document.createElement('button');
    paper.textContent = 'Paper';
    document.body.appendChild(paper);

    const scissors = document.createElement('button');
    scissors.textContent = 'Scissors';
    document.body.appendChild(scissors);

    var div = document.createElement('div');
    div.textContent = 'Results: ';
    document.body.appendChild(div);

    var score = document.createElement('div');
    score.textContent = 'Score: ';
    document.body.appendChild(score);

    var beating = document.createElement('img');
    beating.width = 300;
    beating.height = 300;
    beating.src = "/img/rockPaperScissors.jpg";
    document.body.appendChild(beating);

    const resetScore = document.createElement('button');
    resetScore.textContent = 'Reset Score & Play Fair';
    document.body.appendChild(resetScore);

    const computerCheat = document.createElement('button');
    computerCheat.textContent = 'Let Computer Cheat';
    document.body.appendChild(computerCheat);

    const link = document.createElement('a');
    link.href = '../index.html';
    link.textContent = 'Home';
    document.body.appendChild(link);





 
    computerCheat.addEventListener('click', () => {
      cheat = true
      console.log(cheat);
      });


        rock.addEventListener('mouseover', function() {
        cheatselect = "Paper";
        console.log(cheatselect);
      });
    

    paper.addEventListener('mouseover', function() {
        cheatselect = "Scissors";
        console.log(cheatselect);
      });
    

    scissors.addEventListener('mouseover', function() {
        cheatselect = "Rock";
        console.log(cheatselect);
      });
      
    
    resetScore.addEventListener('click', () => {
    player = 0;
    computer = 0;
    score.textContent = "Score: Player: "+player+" Computer: "+computer;
    beating.src = "/img/rockPaperScissors.jpg";
    cheat = false;

    });

  rock.addEventListener('click', () => {


    result = playRound('Rock'); 
    const button = document.querySelector('button');
    div.textContent = "Results: "+result;
    if(result =="Computer Wins"){
      console.log("Computer Wins This Round");
      computer++;
  }
  if(result =="Player Wins"){
      console.log("Player Wins This Round");
      player++

  }
  if(result =="Push"){
      console.log("Game is a push");
  }
  score.textContent = "Score: Player: "+player+" Computer: "+computer;

 
  
  });
  paper.addEventListener('click', () => {
    result = playRound('Paper'); 
    const button = document.querySelector('button');
    div.textContent = "Results: "+result;
  if(result =="Computer Wins"){
      console.log("Computer Wins This Round");
      computer++;

  }
  if(result =="Player Wins"){
      console.log("Player Wins This Round");
      player++

  }
  if(result =="Push"){
      console.log("Game is a push");

  }
  score.textContent = "Score: Player: "+player+" Computer: "+computer;
  
 

    

  });
  scissors.addEventListener('click', () => {
    result = playRound('Scissors'); 
    const button = document.querySelector('button');
    div.textContent = "Results: "+result;
    
       if(result =="Computer Wins"){
           console.log("Computer Wins This Round");
           computer++;
       }
       if(result =="Player Wins"){
           console.log("Player Wins This Round");
           player++
 
       }
       if(result =="Push"){
           console.log("Game is a push");
       }
       score.textContent = "Score: Player: "+player+" Computer: "+computer;
       

 
  });


});
function getComputerChoice(){
  let computerSelection = Math.floor(Math.random() * 3) + 1;

  if (computerSelection==1) {
   return "Rock";
 } if (computerSelection==2) {
   return "Paper";
 } if (computerSelection==3) {
   return "Scissors";
 }


}

  // if(player>computer){
  //     console.log("Player wins best of 5");
  // }
  // if(player<computer){
  //   textContent = "Computer wins"
  //   console.log("Computer wins best of 5");
  // }

