const againButton = document.querySelector('.again');
const num=document.querySelector('.number');
const guess=document.querySelector('.guess');
const checkButton = document.querySelector('.check');
const message = document.querySelector('.message');
const score = document.querySelector('.score');
const highscore = document.querySelector('.highscore');

let random=Math.trunc(Math.random() * 20) + 1;
let scores=20;
console.log(random);


const checkFunc = () => {
    const userGuess = Number(guess.value);
    

    if (!userGuess) {
        message.textContent = 'User has not entered anything';
    } else if (userGuess === random) {
        message.textContent = 'Correct Number!';
        num.textContent = random;
        document.querySelector('body').style.backgroundColor ='green';
        if (scores > Number(highscore.textContent)) {
            highscore.textContent = scores;
        }
    } else if (userGuess !== random) {
        if (scores > 1) {
            message.textContent = userGuess > random ? 'Too high' : 'Too low';
            scores--;
            score.textContent = scores;
        } else {
            message.textContent = 'You lost the game';
            score.textContent = 0;
            document.querySelector('body').style.backgroundColor = 'red';
            if (checkButton) {
                checkButton.style.display = 'none';
            }
        }
    }
};
checkButton.addEventListener('click', checkFunc);



const againFunc = () => {
    document.querySelector('body').style.backgroundColor = 'black';
    random = Math.trunc(Math.random() * 20) + 1;
    console.log(random);
    score.textContent = 20;
    scores = 20;
    num.textContent = '?';
    message.textContent = 'Start guessing ...';
    guess.value = '';
    if (checkButton) {
        checkButton.style.display = '';
    }
};

againButton.addEventListener('click', againFunc);



























































// let secretNumber = Math.trunc(Math.random() * 20) + 1;
// let score = 20;
// let highscore = 0;

// document.querySelector('.check').addEventListener('click', function () {
//     const guess = Number(document.querySelector('.guess').value);

//     if (!guess) {
//         document.querySelector('.message').textContent = '⛔ No number!';
//     } else if (guess === secretNumber) {
//         document.querySelector('.message').textContent = '🎉 Correct Number!';
//         document.querySelector('.number').textContent = secretNumber;
//         document.body.style.backgroundColor = '#60b347';
//         if (score > highscore) {
//             highscore = score;
//             document.querySelector('.highscore').textContent = highscore;
//         }
//     } else if (guess !== secretNumber) {
//         if (score > 1) {
//             document.querySelector('.message').textContent =
//                 guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
//             score--;
//             document.querySelector('.score').textContent = score;
//         } else {
//             document.querySelector('.message').textContent = '💥 You lost the game!';
//             document.querySelector('.score').textContent = 0;
//         }
//     }
// });

// document.querySelector('.again').addEventListener('click', function () {
//     score = 20;
//     secretNumber = Math.trunc(Math.random() * 20) + 1;
//     document.querySelector('.message').textContent = 'Start guessing...';
//     document.querySelector('.score').textContent = score;
//     document.querySelector('.number').textContent = '?';
//     document.querySelector('.guess').value = '';
//     document.body.style.backgroundColor = '#222';
// });