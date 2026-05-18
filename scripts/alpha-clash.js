
function continueGame (){
    const alphabets = getRandomAlphabet();
    

    // display alphabet 
    const alphabet = getRandomAlphabet();
    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;

    // Set Background Color 
    setBackgroundColor(alphabet);
}

// keyboard keyUp Function

function handelKeyboardKeyUp (event){
    const playerPressed = event.key;

    // stop the game
    if(playerPressed === 'Escape'){
        gameOver()
    }
    

    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabets = currentAlphabet.toLowerCase();

    if(playerPressed === expectedAlphabets){
        const currentScore = getElementValueById('current-score');
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score', updatedScore)

        // start a new Round
        removeBackgroundColor(expectedAlphabets)
        continueGame()
    }
    else{
        const currentLife = getElementValueById('current-life');
        const updatedLife = currentLife -1;
        setTextElementValueById('current-life', updatedLife)

        if(updatedLife === 0){
            gameOver();
        }
    }
    
}

document.addEventListener('keyup', handelKeyboardKeyUp)

function play(){
    // hide Everything 
    hideElementById('home-screen')
    hideElementById('score')
    showElementById('play-ground');

    setTextElementValueById('current-life', 5)
    setTextElementValueById('current-score', 0)

    continueGame();
}

function gameOver(){
    hideElementById('play-ground');
    showElementById('score')

    // update Final Score
    const finalScore = getElementValueById('current-score');
    console.log(finalScore);
    setTextElementValueById('final-score', finalScore)

    // clear the last selected alphabet 
    const currentAlphabet = getElementTextById('current-alphabet');
    removeBackgroundColor(currentAlphabet);
}

 