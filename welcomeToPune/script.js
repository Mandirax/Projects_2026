/* ===========================
   TAB FUNCTIONALITY
   =========================== */

document.addEventListener('DOMContentLoaded', function() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    // Reset to first tab on page load
    tabBtns.forEach(b => b.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));
    
    tabBtns[0].classList.add('active');
    tabContents[0].classList.add('active');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');

            // Remove active class from all buttons and contents
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to clicked button and corresponding content
            this.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
});

/* ===========================
   SMOOTH SCROLL FOR BUTTONS
   =========================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

/* ===========================
   EXPLORE BUTTON FUNCTIONALITY
   =========================== */

const exploreBtn = document.querySelector('.explore-btn');
if (exploreBtn) {
    exploreBtn.addEventListener('click', function() {
        document.getElementById('about').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
}

/* ===========================
   NEWSLETTER FORM VALIDATION
   =========================== */

const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const emailInput = this.querySelector('input[type="email"]');
        const email = emailInput.value;

        // Simple email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailPattern.test(email)) {
            alert('Thank you for subscribing! Check your email for confirmation.');
            emailInput.value = '';
        } else {
            alert('Please enter a valid email address.');
        }
    });
}

/* ===========================
/* ===========================
   HAMBURGER MENU FUNCTIONALITY
   =========================== */

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    // Toggle menu on hamburger click
    hamburger.addEventListener('click', function(e) {
        e.stopPropagation();
        navMenu.classList.toggle('active');
    });

    // Close menu when a nav link is clicked
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove('active');
        }
    });
}
            navMenu.style.flexDirection = 'row';
            navMenu.style.padding = '0';
            navMenu.style.gap = '2rem';
            mobileMenuOpen = false;
        }
    });
}

/* ===========================
   ADD SCROLL EFFECT TO NAVBAR
   =========================== */

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.1)';
    }
});

/* ===========================
   GALLERY HOVER EFFECT ENHANCEMENT
   =========================== */

const galleryItems = document.querySelectorAll('.gallery-item');
galleryItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
    });

    item.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

/* ===========================
   INTERSECTION OBSERVER FOR ANIMATIONS
   =========================== */

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all item cards
const itemCards = document.querySelectorAll('.item-card, .about-card');
itemCards.forEach(card => {
    card.style.opacity = '0';
    observer.observe(card);
});

/* ===========================
   ACTIVE NAV LINK HIGHLIGHTING
   =========================== */

const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', function() {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.style.color = '#FDCB6E';
        } else {
            link.style.color = '#000000';
        }
    });
});

/* ===========================
   COUNTER ANIMATION (OPTIONAL)
   =========================== */

function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const startTime = Date.now();

    function updateCounter() {
        const now = Date.now();
        const progress = Math.min((now - startTime) / duration, 1);
        element.textContent = Math.floor(start + (target - start) * progress);

        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        }
    }

    updateCounter();
}

/* ===========================
   LAZY LOAD IMAGES
   =========================== */

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

console.log('Pune Information Page Loaded Successfully!');
