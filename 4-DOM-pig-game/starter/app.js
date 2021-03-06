/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

/***
 There are two ways to select the html content- 
 1. .textContent- can only set the plain text no html.
 2. .innerHtml- if you want to put some html content also then we have to use innerhtml method
 */


var scores, roundScore, activePlayer,gamePlaying;

init();
//scores=[0,0];
//roundScore=0;
//activePlayer=0;
//dice=Math.floor(Math.random()*6)+1;


//document.querySelector('#current-'+ activePlayer).textContent=dice;
//document.querySelector('#score-' +activePlayer).innerHTML='<em>' + dice + '</em>';

//var x=document.querySelector('#score-0').textContent;
//console.log(x);

//document.querySelector('.dice').style.display='none';    

//document.getElementById('current-0').textContent=0;
//document.getElementById('current-1').textContent=0;
//document.getElementById('score-0').textContent=0;
//document.getElementById('score-1').textContent=0;
//document.querySelector('.dice').style.display= 'none'; 


/*
Events: Notifications that are sent to notify the code that something happend on the webpage.
eg- clicking on button, resizing the window, scrolling down or pressing a key.

Event Listner: A function that performs action based on a certain event. it waits for a specific event to happen.
*/

document.querySelector('.btn-roll').addEventListener('click',function(){
if(gamePlaying){
 // 1. Random number
 
 var dice1=Math.floor(Math.random()*6)+1;
   
 //2. Display the result
var diceDOM=document.querySelector('.dice');
diceDOM.style.display='block';
diceDOM.src='dice-' + dice +'.png';
//document.getElementById('current-'+ activePlayer).textContent=dice;
document.getElementById('current-'+ activePlayer).textContent=dice1;
// document.getElementById('score-'+ activePlayer).textContent=dice;

 //3. Update the round score if the rolled number was not 1

 //add score
if(dice !== 1){
roundScore=roundScore+dice;     
document.getElementById('current-'+ activePlayer).textContent=roundScore;

}           

  
else
{
nextPlayer();
}
}
});

function nextPlayer(){
   activePlayer === 0 ? activePlayer = 1 : activePlayer = 0  ;
   roundScore=0;
   document.getElementById('current-0').textContent=0;
   document.getElementById('current-1').textContent=0;

   document.querySelector('.player-0-panel').classList.toggle('active'); 
   document.querySelector('.player-1-panel').classList.toggle('active');
   document.querySelector('.dice').style.display='none';


}

document.querySelector('.btn-hold').addEventListener('click', function(){
   if(gamePlaying){
// add current score to global score
scores[activePlayer]+= roundScore;

//Update the UI
document.getElementById('score-'+ activePlayer).textContent=scores[activePlayer];
//Check if player won the game---   The first player to reach 100 points on GLOBAL score wins the game

if(scores[activePlayer]>=100)
{
   document.getElementById('name-'+ activePlayer).textContent="Winner!";
   document.querySelector('.dice').style.display='none';
   document.querySelector('.player-'+ activePlayer+ '-panel').classList.add('winner'); 
   document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active'); 
   gamePlaying=false; 
   
}  

else
{
   //next Player
nextPlayer();



   }
}
}        

);


document.querySelector('.btn-new').addEventListener('click',init);


function init()
{
scores=[0,0];
roundScore=0;
activePlayer=0;
gamePlaying= true;

document.getElementById('current-0').textContent=0;
document.getElementById('current-1').textContent=0;
document.getElementById('score-0').textContent=0;
document.getElementById('score-1').textContent=0;
document.querySelector('.dice').style.display= 'none'; 


document.querySelector('#name-0').textContent='Player 1';
document.querySelector('#name-1').textContent='Player 2';

document.querySelector('.player-0-panel').classList.remove('active'); 
   document.querySelector('.player-1-panel').classList.remove('active'); 
   document.querySelector('.player-0-panel').classList.remove('winner'); 
   document.querySelector('.player-1-panel').classList.remove('winner');
   document.querySelector('.player-0-panel').classList.add('active'); 
  
}


// State  variable : a state variable simply tells us the condition of a system---- gamePlaying variable is a state variable
