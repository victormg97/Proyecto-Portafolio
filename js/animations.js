/* ===========================================================
   ANIMATIONS.JS - Animaciones y Efectos Visuales
   Incluye: Scroll reveal, partículas de fondo, micro-interacciones
   =========================================================== */

/**
 * Clase para manejar las animaciones del sitio
 */
class AnimationManager {
    constructor() {
        this.particlesContainer = null;
        this.particleCount = 30;
    }
    
    /**
     * Inicializa AOS (Animate On Scroll)
     */
    initAOS() {
        if (typeof AOS !== 'undefined') {
            AOS.init({
                duration: 800,
                easing: 'ease-out-cubic',
                once: true,
                offset: 50,
                delay: 0,
                anchorPlacement: 'top-bottom'
            });
        }
    }
    
    /**
     * Crea partículas animadas para el fondo
     */
    createParticles() {
        this.particlesContainer = document.getElementById('particles');
        if (!this.particlesContainer) return;
        
        // Limpia partículas existentes
        this.particlesContainer.innerHTML = '';
        
        // Crea nuevas partículas
        for (let i = 0; i < this.particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            // Posición aleatoria
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;
            
            // Tamaño aleatorio
            const size = Math.random() * 4 + 2;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            
            // Delay y duración aleatoria
            particle.style.animationDelay = `${Math.random() * 15}s`;
            particle.style.animationDuration = `${15 + Math.random() * 10}s`;
            
            this.particlesContainer.appendChild(particle);
        }
    }
    
    /**
     * Animación de escritura para el código del hero
     */
    initTypewriterEffect() {
        const codeBlock = document.querySelector('.code-block code');
        if (!codeBlock) return;
        
        // El efecto ya está en el HTML, pero podemos añadir un cursor parpadeante
        const cursor = document.createElement('span');
        cursor.className = 'cursor';
        cursor.innerHTML = '|';
        cursor.style.cssText = `
            animation: blink 1s infinite;
            color: var(--accent-primary);
        `;
        
        // Añade keyframes para el cursor
        if (!document.querySelector('#cursorKeyframes')) {
            const style = document.createElement('style');
            style.id = 'cursorKeyframes';
            style.textContent = `
                @keyframes blink {
                    0%, 50% { opacity: 1; }
                    51%, 100% { opacity: 0; }
                }
            `;
            document.head.appendChild(style);
        }
    }
    
    /**
     * Efectos de scroll parallax sutiles
     */
    initParallax() {
        const heroVisual = document.querySelector('.hero-visual');
        
        if (!heroVisual) return;
        
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            const maxScroll = window.innerHeight;
            
            if (scrollY < maxScroll) {
                const translateY = scrollY * 0.1;
                const opacity = 1 - (scrollY / maxScroll) * 0.3;
                
                heroVisual.style.transform = `translateY(${translateY}px)`;
                heroVisual.style.opacity = Math.max(opacity, 0.7);
            }
        }, { passive: true });
    }
    
    /**
     * Animación del header al hacer scroll
     */
    initHeaderScroll() {
        const header = document.getElementById('header');
        if (!header) return;
        
        let lastScroll = 0;
        const scrollThreshold = 100;
        
        window.addEventListener('scroll', () => {
            const currentScroll = window.scrollY;
            
            // Añade clase cuando hay scroll
            if (currentScroll > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
            
            // Oculta/muestra header según dirección del scroll
            if (currentScroll > lastScroll && currentScroll > scrollThreshold) {
                header.style.transform = 'translateY(-100%)';
            } else {
                header.style.transform = 'translateY(0)';
            }
            
            lastScroll = currentScroll;
        }, { passive: true });
        
        // Estilos para header scrolled
        const style = document.createElement('style');
        style.textContent = `
            .header {
                transition: transform 0.3s ease, background-color 0.3s ease;
            }
            .header.scrolled {
                box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
            }
        `;
        document.head.appendChild(style);
    }
    
    /**
     * Animaciones para las tarjetas de proyectos
     */
    initProjectCardAnimations() {
        const projectCards = document.querySelectorAll('.project-card');
        
        projectCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-5px)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0)';
            });
        });
    }
    
    /**
     * Animación suave para los enlaces de navegación
     */
    initNavLinkAnimations() {
        const navLinks = document.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            link.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-2px)';
            });
            
            link.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
            });
        });
    }
    
    /**
     * Efecto ripple para botones
     */
    initRippleEffect() {
        const buttons = document.querySelectorAll('.btn, .toggle-btn');
        
        buttons.forEach(button => {
            button.addEventListener('click', function(e) {
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const ripple = document.createElement('span');
                ripple.className = 'ripple';
                ripple.style.cssText = `
                    position: absolute;
                    background: rgba(255, 255, 255, 0.3);
                    border-radius: 50%;
                    transform: scale(0);
                    animation: ripple 0.6s ease-out;
                    left: ${x}px;
                    top: ${y}px;
                    width: 100px;
                    height: 100px;
                    margin-left: -50px;
                    margin-top: -50px;
                    pointer-events: none;
                `;
                
                this.style.position = 'relative';
                this.style.overflow = 'hidden';
                this.appendChild(ripple);
                
                setTimeout(() => ripple.remove(), 600);
            });
        });
        
        // Añade keyframes para ripple
        if (!document.querySelector('#rippleKeyframes')) {
            const style = document.createElement('style');
            style.id = 'rippleKeyframes';
            style.textContent = `
                @keyframes ripple {
                    to {
                        transform: scale(4);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        }
    }
    
    /**
     * Contador animado para estadísticas (si se añaden)
     */
    animateCounter(element, target, duration = 2000) {
        const start = 0;
        const startTime = performance.now();
        
        const updateCounter = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const current = Math.floor(start + (target - start) * easeOutQuart);
            
            element.textContent = current.toLocaleString();
            
            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            }
        };
        
        requestAnimationFrame(updateCounter);
    }
    
    /**
     * Inicializa todas las animaciones
     */
    init() {
        // Espera a que el DOM esté completamente cargado
        this.initAOS();
        this.createParticles();
        this.initTypewriterEffect();
        this.initParallax();
        this.initHeaderScroll();
        this.initProjectCardAnimations();
        this.initNavLinkAnimations();
        this.initRippleEffect();
        
        // Regenera partículas si cambia el tamaño de ventana
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => this.createParticles(), 250);
        });
        
        // Refresca AOS cuando cambia el idioma (por si cambian alturas)
        document.addEventListener('languageChanged', () => {
            if (typeof AOS !== 'undefined') {
                AOS.refresh();
            }
        });
    }
}

// Exporta la instancia para uso global
const animationManager = new AnimationManager();

// Inicializa cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    animationManager.init();
});
