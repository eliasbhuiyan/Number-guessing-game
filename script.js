let emoji = document.querySelector('.emoji');
let err_emoji = document.querySelector('.err_emoji');
let guess_emoji = document.querySelector('.guess_emoji');
let win_emoji = document.querySelector('.win_emoji');
let notice = document.querySelector('.notice');
let heighlight = document.querySelector('.heighlight');
heighlight.innerHTML = 5;

let player = document.querySelector('.player');
let player1input = document.querySelector(".player1input");
let player1button = document.querySelector(".player1button");
let player1error = document.querySelector(".player1error");

let player2input = document.querySelector(".player2input");
let player2button = document.querySelector(".player2button");

let player3input = document.querySelector(".player3input");
let player3button = document.querySelector(".player3button");
let countattempt = 0;
let countattempttwo = 0;

player1button.addEventListener("click", () => {
    if (player1input.value - 10 && player1input.value != '') {
        if (player1input.value > 10) {
            player1input.style = 'border-color: red;';
            player1error.style = 'display: inline-block;';
            emoji.style = 'display: none;';
            err_emoji.style = 'display: block;';
            player1error.innerHTML = 'Please give a number less then 10';
        } else {
            player.innerHTML = 'Player 2'
            player1input.style = 'display: none;';
            player1button.style = 'display: none;';
            player1error.style = 'display: none;';

            player2input.style = 'display: inline-block;';
            player2button.style = 'display: inline-block;';
            err_emoji.style = 'display: none;';
            emoji.style = 'display: none;';
            guess_emoji.style ='display: block;';
            heighlight.style = 'display: block;';
            notice.innerHTML = `Guess the number and you have ${heighlight.innerHTML} chance only`
        }

    } else {
        player1input.style = 'border-color: red;';
        player1error.style = 'display: inline-block;';
        player1error.innerHTML = "Please give a number";
        emoji.style = 'display: none;';
        err_emoji.style = 'display: block;';
    }
});

player2button.addEventListener('click', () => {
    
    countattempt++
    heighlight.innerHTML --
    notice.innerHTML = `Guess the number and you have ${heighlight.innerHTML} chance only`;
    
    if (countattempt <= 5) {
        if (player1input.value == player2input.value) {
            player.innerHTML = 'Player 3';
            player2input.style = 'display: none;';
            player2button.style = 'display: none;';
            notice.innerHTML = `Guess the number and you have ${heighlight.innerHTML = 5} chance only`;
            player3input.style = 'display: inline-block;';
            player3button.style = 'display: inline-block;';
        } else if (countattempt == 5 && player1input.value != player2input.value) {
            player.innerHTML = 'Player 3'
            player2input.style = 'display: none;';
            player2button.style = 'display: none;';
            notice.innerHTML = `Guess the number and you have ${heighlight.innerHTML = 5} chance only`;
            console.log(notice.innerHTML);
            player3input.style = 'display: inline-block;';
            player3button.style = 'display: inline-block;';
        }
    }
   
})
player3button.addEventListener('click', () => {
    countattempttwo++
    heighlight.innerHTML --
    notice.innerHTML = `Guess the number and you have ${heighlight.innerHTML} chance only`;

    if (countattempttwo <= 5){
        if((player1input.value == player2input.value) && (player1input.value == player3input.value)){
            guess_emoji.style = 'display: none;';
            win_emoji.style = 'display: block;';
            player.innerHTML = 'Player 2 & 3 winner';
            player3button.style ='display: none;';
            player3input.style = 'display: none;';
            notice.innerHTML = 'Congratulations';
        }
    }
    if (countattempttwo == 5) {
        if((player1input.value == player2input.value)){
            guess_emoji.style = 'display: none;';
            win_emoji.style = 'display: block;';
            player.innerHTML = 'Player 2 winner';
            player3button.style ='display: none;';
            player3input.style = 'display: none;';
            notice.innerHTML = 'Congratulations';
        }

    }
    if (countattempttwo <= 5) {
        if(player1input.value == player3input.value){
            guess_emoji.style = 'display: none;';
            win_emoji.style = 'display: block;';
            player.innerHTML = 'Player 3 winner';
            player3button.style ='display: none;';
            player3input.style = 'display: none;';
            notice.innerHTML = 'Congratulations';
        }

    }
    if (countattempttwo == 5) {
        if((player1input.value != player2input.value) && (player1input.value != player3input.value)){
            guess_emoji.style = 'display: none;';
            win_emoji.style = 'display: block;';
            player.innerHTML = 'Player 1 winner';
            player3button.style ='display: none;';
            player3input.style = 'display: none;';
            notice.innerHTML = 'Congratulations';
        }
    }

})



// else if(countattempt == 5 && player1input.value != player2input.value){
//     player.innerHTML = 'Player 1 winner'
// }