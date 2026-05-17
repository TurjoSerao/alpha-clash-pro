
function continueGame (){
    const alphabets = getRandomAlphabet();
    // console.log(alphabets);

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
    console.log(playerPressed);

    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabets = currentAlphabet.toLowerCase();
    console.log(expectedAlphabets);

    if(playerPressed === expectedAlphabets){
        console.log('you get a point');
        removeBackgroundColor(expectedAlphabets)
        continueGame()
    }
    else{
        console.log('you lost');
    }
    
}

document.addEventListener('keyup', handelKeyboardKeyUp)

function play(){
    hideElementById('home-screen')
    showElementById('play-ground');
    continueGame();
}

 