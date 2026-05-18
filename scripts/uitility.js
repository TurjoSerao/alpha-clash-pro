
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

// Current Score And Current Life point display
function getElementValueById (elementId){
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
}

function setTextElementValueById (elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}

function getElementTextById(elementId){
    const element = document.getElementById(elementId);
    const text =element.innerText;
    return text;
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

