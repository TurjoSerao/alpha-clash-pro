
// hide element by id
function hideElementById(elementId) {
    const element = document.getElementById(elementId)
    element.classList.add('hidden');
}
// Show Element By Id
function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden')
}

// Set Background Color
function setBackgroundColor(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}

// remove background color
function removeBackgroundColor(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400')
}

// Get random Alphabets
function getRandomAlphabet() {
    // Create an alphabets array 
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');

    // Get a random index 0 - 25
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);
    
    // Get a alphabet by random index numbers;
    const alphabet = alphabets[index];
    return alphabet;
}

