let randomNum = Math.floor(Math.random() * 20) + 1;
let score = 20; 
let highScore = 0; 
console.log(randomNum);

document.querySelector(".check").addEventListener("click", function() {


    let userGuess = Number(document.querySelector(".guess").value);
    if (score !== 0)
    {
        if (!userGuess)
        {
          document.querySelector(".message").textContent = "👎 Please Choose a Correct Number!";
        }

        else if (userGuess === randomNum)
        {
            document.querySelector(".message").textContent = "✅ That's a Correct Guess!";
            document.querySelector('body').style.backgroundColor = 'green';
            randomNum = Math.floor(Math.random() * 20) + 1;
            console.log(randomNum);

            if (score > highScore)
            {
                highScore = score + highScore;
                score = 20;
                document.querySelector(".score").textContent = score; 
                document.querySelector(".highscore").textContent = highScore;
            }
        }
        else if (userGuess > randomNum)
        {
            score--;
            document.querySelector(".message").textContent = "📈 Too High!";
            document.querySelector(".score").textContent = score; 
        }
        else if (userGuess < randomNum)
        {
            score--;
            document.querySelector(".message").textContent = "📉 Too Low!";
            document.querySelector(".score").textContent = score; 
        }

    }
    else {

        document.querySelector(".message").textContent = "❌ You Lose! Click Play Again!";
    }

})

document.querySelector(".again").addEventListener("click", function() {

    score = 20;
    document.querySelector(".score").textContent = score; 
    highScore = 0;
    document.querySelector(".highscore").textContent = highScore; 
    document.querySelector(".message").textContent = " ✨ Start guessing...";

    randomNum = Math.floor(Math.random() * 20) + 1;
    console.log(randomNum);

})