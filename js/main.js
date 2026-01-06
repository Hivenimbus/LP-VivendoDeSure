/* =====================================================
   VIVENDODESURE - MAIN JAVASCRIPT
   FAQ Acordeão, Carrossel, Animações Scroll
   ===================================================== */

document.addEventListener('DOMContentLoaded', () => {
    initFAQ();
    initCarousel();
    initScrollAnimations();
    initSmoothScroll();
});

/* ======================= FAQ ACORDEÃO ======================= */
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Fecha todos os outros items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
                }
            });
            
            // Toggle do item atual
            item.classList.toggle('active');
            question.setAttribute('aria-expanded', !isActive);
        });
    });
}

/* ======================= CARROSSEL ======================= */
function initCarousel() {
    const track = document.querySelector('.carousel-track');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    
    if (!track || !prevBtn || !nextBtn) return;
    
    const cardWidth = 320; // card width + gap
    
    prevBtn.addEventListener('click', () => {
        track.scrollBy({
            left: -cardWidth,
            behavior: 'smooth'
        });
    });
    
    nextBtn.addEventListener('click', () => {
        track.scrollBy({
            left: cardWidth,
            behavior: 'smooth'
        });
    });
    
    // Touch/drag support para mobile
    let isDown = false;
    let startX;
    let scrollLeft;
    
    track.addEventListener('mousedown', (e) => {
        isDown = true;
        track.style.cursor = 'grabbing';
        startX = e.pageX - track.offsetLeft;
        scrollLeft = track.scrollLeft;
    });
    
    track.addEventListener('mouseleave', () => {
        isDown = false;
        track.style.cursor = 'grab';
    });
    
    track.addEventListener('mouseup', () => {
        isDown = false;
        track.style.cursor = 'grab';
    });
    
    track.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - track.offsetLeft;
        const walk = (x - startX) * 2;
        track.scrollLeft = scrollLeft - walk;
    });
    
    // Inicializa cursor
    track.style.cursor = 'grab';
}

/* ======================= SCROLL ANIMATIONS ======================= */
function initScrollAnimations() {
    const animateElements = document.querySelectorAll('[data-animate]');
    
    if (!animateElements.length) return;
    
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                // Opcional: parar de observar após animar
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    animateElements.forEach(el => observer.observe(el));
}

/* ======================= SMOOTH SCROLL ======================= */
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            if (href === '#') return;
            
            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/* ======================= EFEITO DE PARALLAX SUTIL NO HERO ======================= */
(function initHeroParallax() {
    const heroBg = document.querySelector('.hero-bg');
    
    if (!heroBg) return;
    
    let ticking = false;
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const scrolled = window.pageYOffset;
                const heroHeight = document.querySelector('.hero').offsetHeight;
                
                if (scrolled < heroHeight) {
                    heroBg.style.transform = `translateY(${scrolled * 0.3}px)`;
                }
                
                ticking = false;
            });
            
            ticking = true;
        }
    });
})();

/* ======================= NAVBAR SCROLL EFFECT ======================= */
(function initNavbarScroll() {
    const nav = document.querySelector('.nav');
    
    if (!nav) return;
    
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            nav.style.background = 'rgba(10, 10, 10, 0.9)';
            nav.style.backdropFilter = 'blur(10px)';
            nav.style.borderBottom = '1px solid rgba(255, 255, 255, 0.05)';
            nav.style.margin = '0 -24px';
            nav.style.padding = '20px 24px';
        } else {
            nav.style.background = 'transparent';
            nav.style.backdropFilter = 'none';
            nav.style.borderBottom = 'none';
            nav.style.margin = '0';
            nav.style.padding = '20px 0';
        }
        
        lastScroll = currentScroll;
    });
})();

/* ======================= ANIMAÇÃO DO BOTÃO CTA ======================= */
(function initCTAAnimation() {
    const ctaButtons = document.querySelectorAll('.btn-glow');
    
    ctaButtons.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            btn.style.transform = 'translateY(-2px) scale(1.02)';
        });
        
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translateY(0) scale(1)';
        });
    });
})();

/* ======================= LOADING ANIMATION ======================= */
(function initLoadingAnimation() {
    // Adiciona classe para indicar que JS está carregado
    document.body.classList.add('js-loaded');
    
    // Anima hero elements na entrada
    const heroContent = document.querySelector('.hero-content');
    
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            heroContent.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 100);
    }
})();

