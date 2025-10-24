/**
 * JetSpace Landing - Main Logic
 * Vanilla JavaScript
 */

// ============================================
// Get translations from global scope
// ============================================

const translations = window.translations || {};

// ============================================
// Language Management
// ============================================

// Current language (default from localStorage or 'ru')
let currentLanguage = localStorage.getItem('jetspace-lang') || 'ru';

// Set language function with animation
function setLanguage(lang, animated = false) {
    currentLanguage = lang;
    localStorage.setItem('jetspace-lang', lang);
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    const elements = document.querySelectorAll('[data-i18n]');
    
    if (animated) {
        // Fade out animation
        elements.forEach(el => el.classList.add('lang-changing'));
        
        // Wait for fade out, then update text
        setTimeout(() => {
            // Update all elements with data-i18n
            elements.forEach(element => {
                const key = element.getAttribute('data-i18n');
                if (translations[lang] && translations[lang][key]) {
                    const translation = translations[lang][key];
                    // Use innerHTML if translation contains HTML tags
                    if (translation.includes('<')) {
                        element.innerHTML = translation;
                    } else {
                        element.textContent = translation;
                    }
                }
                // Switch to fade in animation
                element.classList.remove('lang-changing');
                element.classList.add('lang-changed');
            });
            
            // Update placeholder for newsletter input
            const newsletterInput = document.querySelector('[data-i18n-placeholder]');
            if (newsletterInput) {
                const key = newsletterInput.getAttribute('data-i18n-placeholder');
                if (translations[lang] && translations[lang][key]) {
                    newsletterInput.placeholder = translations[lang][key];
                }
            }
            
            // Remove animation class after fade in completes
            setTimeout(() => {
                elements.forEach(el => el.classList.remove('lang-changed'));
            }, 150);
        }, 150);
    } else {
        // Instant update (for initial page load)
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                const translation = translations[lang][key];
                // Use innerHTML if translation contains HTML tags
                if (translation.includes('<')) {
                    element.innerHTML = translation;
                } else {
                    element.textContent = translation;
                }
            }
        });
        
        // Update placeholder for newsletter input
        const newsletterInput = document.querySelector('[data-i18n-placeholder]');
        if (newsletterInput) {
            const key = newsletterInput.getAttribute('data-i18n-placeholder');
            if (translations[lang] && translations[lang][key]) {
                newsletterInput.placeholder = translations[lang][key];
            }
        }
    }
    
    // Update language buttons (always instant)
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// ============================================
// Mobile Menu Toggle
// ============================================

function initMobileMenu() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            mobileMenu.classList.toggle('open');
        });
        
        // Close menu when clicking on a link
        mobileMenu.querySelectorAll('.mobile-nav-link').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                mobileMenu.classList.remove('open');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!menuToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
                menuToggle.classList.remove('active');
                mobileMenu.classList.remove('open');
            }
        });
    }
}

// ============================================
// Smooth Scroll
// ============================================

function initSmoothScroll() {
    // All links with href starting with #
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Scroll indicator button
    const scrollBtn = document.querySelector('.scroll-btn');
    if (scrollBtn) {
        scrollBtn.addEventListener('click', () => {
            const statsSection = document.getElementById('stats');
            if (statsSection) {
                statsSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
}

// ============================================
// Live Counters
// ============================================

let activeUsersCount = 9743;
let totalValueCount = 1987654; // in dollars

function updateCounters() {
    const activeUsersEl = document.getElementById('activeUsers');
    const totalValueEl = document.getElementById('totalValue');
    
    if (activeUsersEl) {
        activeUsersEl.textContent = activeUsersCount.toLocaleString();
    }
    
    if (totalValueEl) {
        const valueInK = Math.floor(totalValueCount / 1000);
        totalValueEl.textContent = `$${valueInK.toLocaleString()}K`;
    }
}

function startLiveCounters() {
    // Update counters every 3 seconds
    setInterval(() => {
        // Random increment for active users (0-3)
        activeUsersCount += Math.floor(Math.random() * 4);
        
        // Random increment for total value (0-1000)
        totalValueCount += Math.floor(Math.random() * 1001);
        
        updateCounters();
    }, 3000);
}

// ============================================
// CTA Button Actions
// ============================================

function initCTAButtons() {
    // All buttons (except language switcher and mobile menu toggle)
    const ctaButtons = document.querySelectorAll('.btn-primary, .btn-secondary');
    
    ctaButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Don't trigger for language buttons
            if (button.classList.contains('lang-btn')) return;
            
            // Redirect to Google (temporary)
            window.location.href = 'https://google.com';
        });
    });
    
    // Newsletter form
    const newsletterInput = document.querySelector('.newsletter-input');
    const newsletterBtn = document.querySelector('.newsletter-form .btn-primary');
    
    if (newsletterBtn) {
        newsletterBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (newsletterInput && newsletterInput.value) {
                alert(`Email ${newsletterInput.value} subscribed! (Demo)`);
                newsletterInput.value = '';
            }
        });
    }
}

// ============================================
// Language Switcher
// ============================================

function initLanguageSwitcher() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const lang = btn.getAttribute('data-lang');
            if (lang && translations[lang] && lang !== currentLanguage) {
                setLanguage(lang, true); // Animated language change
            }
        });
    });
}

// ============================================
// Initialization
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Set initial language
    setLanguage(currentLanguage);
    
    // Initialize all features
    initMobileMenu();
    initSmoothScroll();
    initCTAButtons();
    initLanguageSwitcher();
    
    // Start live counters
    updateCounters(); // Initial update
    startLiveCounters();
    
    console.log('JetSpace Landing - Vanilla Version Initialized ✨');
});

