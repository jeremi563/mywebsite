// Hamburger toggle
const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');
hamburger.addEventListener('click', () => sidebar.classList.toggle('active'));

const closeBtn = document.getElementById('close-btn');
closeBtn.addEventListener('click', () => sidebar.classList.remove('active'));

// Terminal typing animation
const terminalText = document.getElementById('terminal-text');
const phrases = [
    "Hello, I'm Jeremia Obed.",
    "Full-Stack Developer.",
    "Cybersecurity Specialist.",
    "Linux Enthusiast."
];
let i=0, j=0, currentPhrase='', isDeleting=false, wait=2000;

function type(){
    if(i>=phrases.length) i=0;
    currentPhrase = phrases[i];
    if(!isDeleting){
        terminalText.textContent = currentPhrase.substring(0,j+1);
        j++;
        if(j===currentPhrase.length){
            isDeleting=true;
            setTimeout(type, wait);
            return;
        }
    } else{
        terminalText.textContent = currentPhrase.substring(0,j-1);
        j--;
        if(j===0){
            isDeleting=false;
            i++;
        }
    }
    setTimeout(type, isDeleting?100:150);
}
document.addEventListener("DOMContentLoaded", type);
