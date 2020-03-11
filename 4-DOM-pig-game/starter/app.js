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

var scores, roundScore, dice, activePlayer;

scores=[0,0];
roundScore=0;
activePlayer=1;
dice=Math.floor(Math.random()*6)+1;


document.querySelector('#current-'+ activePlayer).textContent=dice;
document.querySelector('#score-' +activePlayer).innerHTML='<em>' + dice + '</em>';

var x=document.querySelector('#score-0').textContent;
console.log(x);

//document.querySelector('.dice').style.display='none'; //to select the css content