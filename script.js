const answerElement = document.getElementById('answer');

function setAnswer(isYes) {
    if (isYes) {
        answerElement.textContent = 'YES';
        answerElement.className = 'yes';
    } else {
        answerElement.textContent = 'NO';
        answerElement.className = 'no';
    }
}

function determineAnswer() {
    // 75% chance of YES, 25% chance of NO
    const random = Math.random();
    const isYes = random < 0.75;
    
    setAnswer(isYes);
    
    // If NO, cross it out and change to YES after 1-2 seconds
    if (!isYes) {
        const delay = 1000 + Math.random() * 1000; // Random delay between 1-2 seconds
        
        setTimeout(() => {
            answerElement.classList.add('crossed-out');
            
            setTimeout(() => {
                setAnswer(true);
            }, 500);
        }, delay);
    }
}

// Run on page load
determineAnswer();
