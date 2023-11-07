import letters from "../Data/letters.js";
import alphabets from "../Data/alphabets.js";

document.addEventListener('DOMContentLoaded', () => {
    let alphabetsHTML = "";
    
    alphabets.forEach((alphabet) => {
        alphabetsHTML += `
            <div class="alphabet-con">
                <p>${alphabet.letter}</p>
            </div>`;
    });
    
    document.querySelector('.alphabets-container').innerHTML = alphabetsHTML;
    
    let lettersHtml = "";
    
    letters.forEach((letter) => {
        lettersHtml += ` 
            <div class="letter-con">
                <div class="popup-container">
                    <p>${letter.letter}</p>
                    <img src="${letter.image}" alt="${letter.alt}" class="letter-img">
                    <p>${letter.letterExample}</p>
                </div>
            </div>`;
    });
    
    document.querySelector('.letters-container').innerHTML = lettersHtml;
    
    const letterContainers = document.querySelectorAll('.letter-con');
    let openPopup = null; 
    
    letterContainers.forEach((container) => {
        container.addEventListener('click', () => {
            if (openPopup === container) {
                // If the clicked container is already open, close it
                container.classList.remove('popup');
                openPopup = null;
            } else {
                // Close any open pop-up
                if (openPopup) {
                    openPopup.classList.remove('popup');
                }
                // Open the clicked container
                container.classList.add('popup');
                openPopup = container;
            }
        });
    });
});

