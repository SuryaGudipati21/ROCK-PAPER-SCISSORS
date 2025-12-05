const score={
        win: 0,
        lose: 0,
        tie: 0
    }
let result = '';
let computerMove = '';
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
function updateScore(){
    document.querySelector(".rps-score").innerHTML=`Win: ${score.win}, Lose: ${score.lose}, Tie: ${score.tie}`;
}
function updateResult(){
    document.querySelector(".rps-result").innerHTML=result;
}
function playGame(type){
    let computerMove = rand();
    
    if(type==="rock"){
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
        result = '';

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