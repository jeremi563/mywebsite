
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slider img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;
const totalSlides = slides.length;

// Function to update slider position
function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Next Button
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlider();
});

// Prev Button
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlider();
});

// Auto-slide every 5 seconds
setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlider();
}, 5000);


// Select the hamburger and sidebar
const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');

// Toggle sidebar on click
hamburger.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

// Close sidebar when any link inside it is clicked
const sidebarLinks = sidebar.querySelectorAll('a');

sidebarLinks.forEach(link => {
    link.addEventListener('click', () => {
        sidebar.classList.remove('active');
    });
});



/// Terminal typing effect with multiple messages
const terminalText = document.getElementById('terminal-text');

const messages = [
    "Hello, welcome to my cyber world!",
    "I'm Jeremia Obed - Full-Stack Developer, Cybersecurity Specialist & Linux Enthusiast.",
    "Building secure, scalable and modern web applications from frontend to backend.",
    "Turning ideas into reliable systems using code, security principles and clean architecture."

];

let msgIndex = 0;
let charIndex = 0;
let typingSpeed = 100; // ms per character
let pauseBetween = 2000; // pause before deleting

function typeMessage() {
    const currentMessage = messages[msgIndex];
    
    if (charIndex < currentMessage.length) {
        terminalText.textContent += currentMessage.charAt(charIndex);
        charIndex++;
        setTimeout(typeMessage, typingSpeed);
    } else {
        // After full message typed, pause then delete
        setTimeout(deleteMessage, pauseBetween);
    }
}

function deleteMessage() {
    const currentMessage = messages[msgIndex];
    
    if (charIndex > 0) {
        terminalText.textContent = currentMessage.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(deleteMessage, 50); // speed of deleting
    } else {
        // Move to next message
        msgIndex = (msgIndex + 1) % messages.length;
        setTimeout(typeMessage, 500);
    }
}

// Start typing when page loads
window.addEventListener('load', typeMessage);


