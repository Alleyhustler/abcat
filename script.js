document.getElementById('translateBtn').addEventListener('click', translateText);
document.getElementById('resetBtn').addEventListener('click', resetTranslation);
document.getElementById('copyBtn').addEventListener('click', copyToClipboard);

// Generate spiral background effect
const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
const spiralContainer = document.getElementById('spiralContainer');

// Dynamically create the alphabet images for the spiral effect
alphabet.forEach((char, index) => {
    const img = document.createElement('img');
    img.src = `images/${char}-removebg-preview.png`;
    img.alt = char;
    img.style.animationDelay = `${index * 0.5}s`;  // Stagger the animation to follow like a "dragon"
    spiralContainer.appendChild(img);
});

function translateText() {
    const inputText = document.getElementById('inputText').value.toLowerCase();
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '';

    for (let char of inputText) {
        if (char.match(/[a-z]/)) {
            const img = document.createElement('img');
            img.src = `images/${char}-removebg-preview.png`;
            img.alt = char;
            outputDiv.appendChild(img);
        } else if (char === ' ') {
            const space = document.createElement('div');
            space.style.width = '20px';
            outputDiv.appendChild(space);
        }
    }
    document.getElementById('copyBtn').classList.remove('hidden');
}

function resetTranslation() {
    document.getElementById('inputText').value = '';
    document.getElementById('output').innerHTML = '';
    document.getElementById('copyBtn').classList.add('hidden');
}

function copyToClipboard() {
    const outputDiv = document.getElementById('output');
    const images = outputDiv.getElementsByTagName('img');
    let textToCopy = '';

    for (let img of images) {
        textToCopy += img.alt;
    }

    navigator.clipboard.writeText(textToCopy).then(() => {
        alert('Text copied to clipboard!');
    });
}

