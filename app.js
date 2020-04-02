/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activatePlayer, dice,gamePlaying;


init();


document.querySelector('.btn-new').addEventListener('click',function(){
    document.getElementById('name-'+ activatePlayer).textContent = 'Player-' + (activatePlayer + 1);
    init();
})



document.querySelector('.btn-roll').addEventListener('click',function(){
    if (gamePlaying){
        dice= Math.floor(Math.random() * 6) + 1;
        document.querySelector('.dice').style.display = 'block';
        document.querySelector('.dice').src = 'dice-' + dice + '.png';
        console.log(dice);
    
        if (dice !== 1){
        roundScore += dice;
        document.querySelector('#current-' + activatePlayer).textContent = roundScore;
    
        }else {
            changePlayer();
        }

    }
})

document.querySelector('.btn-hold').addEventListener('click',function(){
    if (gamePlaying){
        score[activatePlayer] += roundScore;
        document.querySelector('#score-' + activatePlayer).textContent =  score[activatePlayer];
    
        if (score[activatePlayer] >= 20){
            document.getElementById('name-'+ activatePlayer).textContent = 'WINNER!';
            document.querySelector('#current-' + activatePlayer).textContent = 0;
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        }
        else{
            changePlayer();
        }
    }
})


function changePlayer(){
    roundScore = 0;
    document.querySelector('#current-' + activatePlayer).textContent = 0;
    document.querySelector('.player-'+activatePlayer+'-panel').classList.remove('active');
    activatePlayer === 0 ? activatePlayer = 1 : activatePlayer = 0; 
    document.querySelector('.player-'+activatePlayer+'-panel').classList.add('active');

}

function init(){
    score = [0,0];
    roundScore = 0;
    activatePlayer = 0;
     gamePlaying = true;

    document.querySelector('#current-0').textContent = 0;
    document.querySelector('#current-1').textContent = 0;
    document.querySelector('#score-0').textContent = 0;
    document.querySelector('#score-1').textContent = 0;
    document.querySelector('.dice').style.display = 'none';    
}


