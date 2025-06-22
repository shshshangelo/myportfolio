// Function to set the theme and update UI
function setTheme(theme) {
    document.body.setAttribute('data-bs-theme', theme);
    localStorage.setItem('theme', theme);
    var switchThemeBtn = document.getElementById('switchTheme');
    if (switchThemeBtn) {
        switchThemeBtn.innerHTML = theme === 'dark' ?  '<i class="bi bi-sun-fill"></i>' : '<i class="bi bi-moon-stars-fill"></i>';
    }
    //console.log(`Switched to ${theme} theme`);
}

var currentTheme = localStorage.getItem('theme') || 'dark';
setTheme(currentTheme);

// Event listener for the switch theme button
var switchThemeBtn = document.getElementById('switchTheme');
if (switchThemeBtn) {
    switchThemeBtn.addEventListener('click', () => {
        currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(currentTheme);
    });
}

//AOS Initiliaze
AOS.init();

// Typing Animation Enhancement
document.addEventListener('DOMContentLoaded', function() {
    const typingText = document.querySelector('.typing-text');
    
    if (typingText) {
        const fullText = typingText.textContent;
        typingText.textContent = '';
        typingText.style.width = 'auto';
        
        let charIndex = 0;
        const typeSpeed = 150; // milliseconds per character
        
        function typeChar() {
            if (charIndex < fullText.length) {
                typingText.textContent += fullText.charAt(charIndex);
                charIndex++;
                setTimeout(typeChar, typeSpeed);
            }
        }
        
        // Start typing after a short delay
        setTimeout(typeChar, 1000);
    }
});

// Fixed Header & back to top button on Scroll
window.addEventListener('scroll', () => {
    // Progress bar
    const progressBar = document.getElementById('progressBar');
    if (progressBar) {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    }
    
    // fixed header
    const header = document.getElementById('header');
    if (window.scrollY > 30 && !header.classList.contains('fixed-top')) {
        header.classList.add('fixed-top');
        document.getElementById('offcanvasNavbar').classList.add('fixedHeaderNavbar');
    } else if (window.scrollY <= 30 && header.classList.contains('fixed-top')) {
        header.classList.remove('fixed-top');
        document.getElementById('offcanvasNavbar').classList.remove('fixedHeaderNavbar');
    }

    //backtotop
    const backToTopButton = document.getElementById("backToTopButton");
    if (window.scrollY > 400 && backToTopButton.style.display === 'none') {
        backToTopButton.style.display = 'block';
    } else if (window.scrollY <= 400 && backToTopButton.style.display === 'block') {
        backToTopButton.style.display = 'none';
    }
});

//jumping to top function
function scrollToTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Resume download function
function downloadResume() {
    // Resume file path
    const resumeUrl = 'Michael_Entera_Resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Michael_Entera_Resume.pdf';
    link.target = '_blank';
    
    // Add the link to the document and trigger download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Improved back to top button visibility
window.addEventListener("scroll", function() {
    const btn = document.getElementById("backToTopButton");
    if (window.scrollY > 320) {
        btn.classList.add("visible");
    } else {
        btn.classList.remove("visible");
    }
});

//Testimonial Slider
$(document).ready(function(){
    $("#testimonial-slider").owlCarousel({
        items:3,
        nav:true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive:{
            0:{
                items:1,
            },
            768:{
                items:2,
            },
            1170:{
                items:3,
            }
        }
    });
});
