
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
// remove bg color    

function play(){
    hideElementById('home-screen')
    showElementById('play-ground');
    continueGame();
}

 