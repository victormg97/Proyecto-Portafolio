/* ===========================================================
   MAIN.JS - Lógica Principal del Portafolio
   Incluye: Navegación, Tabs, Cookies Banner, Inicialización
   =========================================================== */

/**
 * Clase principal para la lógica del portafolio
 */
class Portfolio {
    constructor() {
        this.header = document.getElementById('header');
        this.navMenu = document.getElementById('navMenu');
        this.menuToggle = document.getElementById('menuToggle');
        this.cookieBanner = document.getElementById('cookieBanner');
    }
    
    /**
     * Inicializa la navegación móvil
     */
    initMobileNav() {
        if (!this.menuToggle || !this.navMenu) return;
        
        // Toggle del menú
        this.menuToggle.addEventListener('click', () => {
            this.menuToggle.classList.toggle('active');
            this.navMenu.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });
        
        // Cierra el menú al hacer click en un enlace
        const navLinks = this.navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                this.menuToggle.classList.remove('active');
                this.navMenu.classList.remove('active');
                document.body.classList.remove('menu-open');
            });
        });
        
        // Cierra el menú al hacer click fuera
        document.addEventListener('click', (e) => {
            if (this.navMenu.classList.contains('active') && 
                !this.navMenu.contains(e.target) && 
                !this.menuToggle.contains(e.target)) {
                this.menuToggle.classList.remove('active');
                this.navMenu.classList.remove('active');
                document.body.classList.remove('menu-open');
            }
        });
        
        // Cierra el menú con Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.navMenu.classList.contains('active')) {
                this.menuToggle.classList.remove('active');
                this.navMenu.classList.remove('active');
                document.body.classList.remove('menu-open');
            }
        });
    }
    
    /**
     * Maneja la navegación activa según scroll
     */
    initActiveNavigation() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        
        const updateActiveLink = () => {
            const scrollY = window.scrollY + 100;
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');
                
                if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${sectionId}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        };
        
        window.addEventListener('scroll', updateActiveLink, { passive: true });
        updateActiveLink(); // Ejecuta al cargar
    }
    
    /**
     * Inicializa el smooth scroll para enlaces internos
     */
    initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    const headerOffset = 80;
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
    
    /**
     * Inicializa los tabs de proyectos
     */
    initProjectTabs() {
        const projectCards = document.querySelectorAll('.project-card');
        
        projectCards.forEach(card => {
            const tabs = card.querySelectorAll('.tab-btn');
            const contents = card.querySelectorAll('.tab-content');
            
            tabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    const targetId = tab.getAttribute('data-tab');
                    
                    // Actualiza tabs activos
                    tabs.forEach(t => t.classList.remove('active'));
                    tab.classList.add('active');
                    
                    // Actualiza contenido activo
                    contents.forEach(content => {
                        content.classList.remove('active');
                        if (content.id === targetId) {
                            content.classList.add('active');
                        }
                    });
                });
            });
        });
    }
    
    /**
     * Maneja el banner de cookies
     */
    initCookieBanner() {
        if (!this.cookieBanner) return;
        
        const acceptBtn = document.getElementById('acceptCookies');
        const rejectBtn = document.getElementById('rejectCookies');
        
        // Verifica si ya se ha tomado una decisión
        const cookieConsent = this.getCookie('cookieConsent');
        
        if (!cookieConsent) {
            // Muestra el banner después de un pequeño delay
            setTimeout(() => {
                this.cookieBanner.hidden = false;
            }, 1500);
        }
        
        // Botón aceptar
        if (acceptBtn) {
            acceptBtn.addEventListener('click', () => {
                this.setCookie('cookieConsent', 'accepted', 365);
                this.hideCookieBanner();
            });
        }
        
        // Botón rechazar
        if (rejectBtn) {
            rejectBtn.addEventListener('click', () => {
                this.setCookie('cookieConsent', 'rejected', 365);
                // Limpia cookies de preferencias si rechaza
                this.deleteCookie('theme');
                this.deleteCookie('lang');
                this.hideCookieBanner();
            });
        }
    }
    
    /**
     * Oculta el banner de cookies con animación
     */
    hideCookieBanner() {
        if (this.cookieBanner) {
            this.cookieBanner.style.animation = 'slideDown 0.3s ease forwards';
            setTimeout(() => {
                this.cookieBanner.hidden = true;
            }, 300);
            
            // Añade keyframes si no existe
            if (!document.querySelector('#slideDownKeyframes')) {
                const style = document.createElement('style');
                style.id = 'slideDownKeyframes';
                style.textContent = `
                    @keyframes slideDown {
                        from { transform: translateY(0); }
                        to { transform: translateY(100%); }
                    }
                `;
                document.head.appendChild(style);
            }
        }
    }
    
    /**
     * Utilidades para cookies
     */
    setCookie(name, value, days) {
        const expiryDate = new Date();
        expiryDate.setDate(expiryDate.getDate() + days);
        document.cookie = `${name}=${value};expires=${expiryDate.toUTCString()};path=/;SameSite=Lax`;
    }
    
    getCookie(name) {
        const cookies = document.cookie.split(';');
        for (let cookie of cookies) {
            const [cookieName, cookieValue] = cookie.trim().split('=');
            if (cookieName === name) {
                return cookieValue;
            }
        }
        return null;
    }
    
    deleteCookie(name) {
        document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/`;
    }
    
    /**
     * Lazy loading para videos
     */
    initLazyVideos() {
        const videos = document.querySelectorAll('video[data-src]');
        
        if ('IntersectionObserver' in window) {
            const videoObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const video = entry.target;
                        const source = video.querySelector('source');
                        if (source && video.dataset.src) {
                            source.src = video.dataset.src;
                            video.load();
                        }
                        videoObserver.unobserve(video);
                    }
                });
            }, { rootMargin: '50px' });
            
            videos.forEach(video => videoObserver.observe(video));
        }
    }
    
    /**
     * Maneja errores de carga de video
     */
    initVideoErrorHandling() {
        const videos = document.querySelectorAll('.video-container video');
        
        videos.forEach(video => {
            video.addEventListener('error', () => {
                const placeholder = video.parentElement.querySelector('.video-placeholder');
                if (placeholder) {
                    placeholder.style.display = 'flex';
                }
            });
            
            video.addEventListener('loadeddata', () => {
                const placeholder = video.parentElement.querySelector('.video-placeholder');
                if (placeholder) {
                    placeholder.style.display = 'none';
                }
            });
        });
    }
    
    /**
     * Previene el scroll del body cuando el menú móvil está abierto
     */
    initBodyScrollLock() {
        const style = document.createElement('style');
        style.textContent = `
            body.menu-open {
                overflow: hidden;
            }
        `;
        document.head.appendChild(style);
    }
    
    /**
     * Actualiza el año del copyright automáticamente
     */
    updateCopyrightYear() {
        const yearElement = document.getElementById('currentYear');
        if (yearElement) {
            yearElement.textContent = new Date().getFullYear();
        }
    }
    
    /**
     * Muestra un mensaje de bienvenida en consola
     */
    showConsoleGreeting() {
        const styles = [
            'color: #DC2626',
            'font-size: 20px',
            'font-weight: bold',
            'text-shadow: 1px 1px 2px rgba(0,0,0,0.3)'
        ].join(';');
        
        console.log('%c👋 ¡Hola! Bienvenido al código de mi portafolio', styles);
        console.log('%c¿Interesado en el código? Contáctame: vmaldonadog97@gmail.com', 
            'color: #666; font-size: 12px');
    }
    
    /**
     * Inicializa todo el portafolio
     */
    init() {
        this.initMobileNav();
        this.initActiveNavigation();
        this.initSmoothScroll();
        this.initProjectTabs();
        this.initCookieBanner();
        this.initLazyVideos();
        this.initVideoErrorHandling();
        this.initBodyScrollLock();
        this.updateCopyrightYear();
        this.showConsoleGreeting();
        
        // Marca como cargado
        document.body.classList.add('loaded');
    }
}

// Inicializa cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    const portfolio = new Portfolio();
    portfolio.init();
});

// Oculta el loading cuando todo está cargado
window.addEventListener('load', () => {
    document.body.classList.add('fully-loaded');
});
