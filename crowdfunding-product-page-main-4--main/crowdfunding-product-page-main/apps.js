// function bookmark(this){
//     this.textContent= "Bookmarked";
// }
const bookmark = document.querySelector(".bookmark_container > p");
bookmark.onclick = () => {
    bookmark.innerHTML = 'Bookmarked';
}
console.log(bookmark);

const btn = document.querySelector(".menu-icon .btn");
let nav = document.querySelector(".nav-wrapper");
const close = document.querySelector(".closemenu");
btn.onclick = () => {
    // alert('working');
    nav.style.display = 'block';
    btn.style.display = 'none';
}
close.onclick = () => {
    nav.style.display = 'none';
    btn.style.display = 'block';
}


document.addEventListener('DOMContentLoaded', function () {
    // Select all elements that should trigger the card
    const triggers = [
        ...document.querySelectorAll('.contain'),
        ...Array.from(document.getElementsByTagName('p')).filter(p => p.textContent.trim() === 'Select Reward')
    ];

    const lastSection = document.querySelector('.lastSection');

    // Function to show the card
    function showCard() {
        lastSection.style.display = 'block';
        lastSection.style.position = 'fixed';
        lastSection.style.top = '50%';
        lastSection.style.left = '50%';
        lastSection.style.transform = 'translate(-50%, -50%)';
        lastSection.style.backgroundColor = 'white';
        lastSection.style.padding = '20px';
        lastSection.style.borderRadius = '10px';
        lastSection.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        lastSection.style.zIndex = '1000';
    }

    // Add click event listeners to all triggers
    triggers.forEach(trigger => {
        trigger.addEventListener('click', showCard);
    });

    // Optional: Close the card when clicking the "Got it!" button
    const gotItButton = lastSection.querySelector('.click');
    if (gotItButton) {
        gotItButton.addEventListener('click', function () {
            lastSection.style.display = 'none';
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const modal = document.querySelector('.last-section');
    const closeButton = modal.querySelector('.click');
    let overlay;

    function openModal() {
        if (!overlay) {
            overlay = document.createElement('div');
            overlay.className = 'modal-overlay';
            document.body.appendChild(overlay);
        }
        overlay.style.display = 'block';
        modal.style.display = 'block';
    }

    function closeModal() {
        modal.style.display = 'none';
        if (overlay) {
            overlay.style.display = 'none';
        }
    }

    // Open modal when clicking on 'Back this project' or 'Select Reward'
    const triggers = [
        ...document.querySelectorAll('.contain'),
        ...Array.from(document.getElementsByTagName('p')).filter(p => p.textContent.trim() === 'Select Reward')
    ];

    triggers.forEach(trigger => {
        trigger.addEventListener('click', openModal);
    });

    // Close modal when clicking the 'Got it!' button
    closeButton.addEventListener('click', closeModal);

    // Close modal when clicking outside of it
    document.addEventListener('click', function (event) {
        if (event.target === overlay) {
            closeModal();
        }
    });
});