//Conor: Whack-A-Mole minigame
    /* References assisting whack a mole development:
    1.  https://www.educative.io/blog/whack-a-mole-game-javascript
    2.  https://www.geeksforgeeks.org/whack-a-mole-game-using-html-css-and-javascript/
    3. https://medium.com/@divyamcm/whack-a-mole-game-using-html-css-and-javascript-84b108ec5c8e */
// Ensure document parsed & following scripts ready for execution:
document.addEventListener(

    "DOMContentLoaded", function () {
        // Select all holes for mole popup
        holes = document.querySelectorAll(".hole");
        // Ready to start game
        startButton = document.getElementById("startGame");
        // Update score as points scored
        scoreDisplay = document.getElementById("score");
        // Set timer to count down
        timerDisplay = document.getElementById("timer");

        // Declare variables 
        let timer;
        let score = 0;
        let countdown;
        let moleInterval;
        let gameOver = true;
        let speed = 1000;
        let duration = 30;
        var audio = new Audio('bonknoise.wav');
        var music = new Audio('backgroundmusic.wav');
        music.loop = true;
        var fx = new Audio('over.mp3');

        // Boats (moles) to come out of holes
        function mole() {
            holes.forEach(hole => {
                // Remove previous .mole CSS (with image) from class & event listener 
                hole.classList.remove('mole');
                hole.removeEventListener(
                    'click', moleWhack);
            });

            // Random hole chosen 1-9
            let randomHole = holes[Math.floor(Math.random() * 9)];

            // Append .mole CSS (with image) to selected random hole
            randomHole.classList.add('mole');
            randomHole.addEventListener('click', moleWhack);
        }

        function moleWhack() {
                // On click increase score & display on screen
                score = score + 1;
                scoreDisplay.textContent = `${score}`;
            // Remove mole attributes when whacked & play effect
            this.classList.remove('mole');
            audio.play();
        }



        function startGame() {
            // Start music, reset & display declared variables for new game
            music.currentTime = 0;
            music.play();
            gameOver = false;
            score = 0;
            scoreDisplay.textContent = `${score}`;
            timer = duration;
            timerDisplay.textContent = `${timer}s`;

            // Game must run until completition until over
            startButton.disabled = true;
            startButton.style.backgroundColor = "slategrey";

            countdown = setInterval(() => {
                // Count down timer & update
                timer = timer - 1;
                timerDisplay.textContent = `${timer}s`;

                /* // Music to stop & game over FX to play
                 if (timer < 1)
                 {
                     music.stop();
                     fx.play();  
                 } */
                // On timer running out
                if (timer <= 0) {
                    // Clear time
                    clearInterval(countdown);
                    // Call end game function
                    gameOver = true;
                    // Prompt user with gameover
                    alert(`Game Over!\nYour final score is ${score}`);
                    // Allow start button to be activated again
                    startButton.disabled = false;
                    startButton.style.backgroundColor = "aliceblue";
                }
            }, speed);

            moleInterval = setInterval(() => {
                // Mole frequency, altered by var speed. Ensure game playing.
                if (gameOver == false) mole();
            },
                speed);
        }
        // Call startGame function on click of start button
        startButton.addEventListener("click", startGame);

        // Mute sound functionality
        muteButton.addEventListener("click", mute);

        function mute() {
            // Check volume level to determine if volume is being muted or unmuted, indicate with styling
            if (audio.volume == 0) {
                audio.volume = 1;
                music.volume = 1;
                fx.volume = 1;

            }
            else {
                audio.volume = 0;
                music.volume = 0;
                fx.volume = 0;
            }
        }
    });