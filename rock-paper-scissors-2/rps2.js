const score={
        win: 0,
        lose: 0,
        tie: 0
    }
let result = '';
let computerMove = '';
let playerMove = '';
function rand(){
    let num = Math.random();
    if(num>=0&&num<1/3){
        return 'rock';
    }
    else if(num>1/3&&num<2/3){
        return 'paper';
    }
    else if(num>2/3&&num<1){
        return 'scissors';
    }
}
function reset()
{
    score.win=0;
    score.lose=0;
    score.tie=0;
    updateScore();
}
function updateScore(){
    localStorage.setItem("score", JSON.stringify(score));
}
function updateResult(){
    document.querySelector(".rps-result").innerHTML=result;
}
function playGame(type){
    let computerMove = rand();
    if(type==="rock"){
        playerMove = 'Rock';
        if(computerMove==='rock'){
            result='Tie';
            score.tie++;
        }
        else if(computerMove==='paper'){
            result='You lose';
            score.lose++;
        }
        else{
            result='You win';
            score.win++;
        }
        updateScore();
        document.querySelector('.rps-choice').innerHTML=`You-<img class="choice" src="pictures/rock-emoji.png">, Computer-<img class="choice" src="pictures/${computerMove}-emoji.png">`;
        updateResult();
    }
    else if(type==="paper"){
        playerMove = 'Paper';
        if(computerMove==='paper'){
            result='Tie';
            score.tie++;
        }
        else if(computerMove==='scissors'){
            result='You lose';
            score.lose++;
        }
        else{
            result='You win';
            score.win++;
        }
        updateScore();
        document.querySelector('.rps-choice').innerHTML=`You-<img class="choice" src="pictures/paper-emoji.png">, Computer-<img class="choice" src="pictures/${computerMove}-emoji.png">`;
        updateResult();
    }
    else if(type==='scissors'){
        playerMove = 'Scissors';
        if(computerMove==='scissors'){
            result='Tie';
            score.tie++;
        }
        else if(computerMove==='rock'){
            result='You lose';
            score.lose++;
        }
        else{
            result='You win';
            score.win++;
        }
        updateScore();
        document.querySelector('.rps-choice').innerHTML=`You-<img class="choice" src="pictures/scissors-emoji.png">, Computer-<img class="choice" src="pictures/${computerMove}-emoji.png">`;
        updateResult();
    }
}