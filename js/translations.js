/* ===========================================================
   TRANSLATIONS.JS - Sistema de Internacionalización (i18n)
   Idiomas: Español (es) / Inglés (en)
   =========================================================== */

const translations = {
    es: {
        // Navegación
        nav: {
            about: "Sobre Mí",
            tech: "Tecnologías",
            projects: "Proyectos",
            experience: "Experiencia",
            education: "Educación",
            resume: "Currículum",
            contact: "Contacto"
        },
        
        // Hero
        hero: {
            greeting: "Hola, soy",
            subtitle: "Ingeniero en Computación",
            tagline: "Full Stack Developer especializado en crear soluciones tecnológicas eficientes y bien construidas.",
            scroll: "Scroll",
            cta: {
                projects: "Ver Proyectos",
                contact: "Contactar"
            }
        },
        
        // About
        about: {
            title: "Sobre Mí",
            p1: "Soy Víctor Patricio Maldonado García, Ingeniero en Computación titulado de la Universidad de La Serena. Me dedico al desarrollo de software, con experiencia en la creación de aplicaciones web, móviles y de escritorio.",
            p2: "Me interesa diseñar soluciones tecnológicas que sean útiles, eficientes y bien construidas, siempre buscando mejorar tanto el producto como el proceso detrás de él. Disfruto aprender nuevas herramientas y lenguajes, especialmente en áreas como desarrollo full stack, bases de datos y automatización.",
            p3: "Me considero una persona responsable, curiosa y con buen criterio técnico, que valora el trabajo en equipo y la comunicación clara. Mi objetivo es seguir creciendo como desarrollador, participando en proyectos que representen desafíos reales y aporten valor a las personas que los usan."
        },
        
        // Tech Stack
        tech: {
            title: "Stack Tecnológico",
            frontend: "Frontend",
            backend: "Backend",
            databases: "Bases de Datos",
            tools: "Herramientas"
        },
        
        // Projects
        projects: {
            title: "Proyectos Destacados",
            features: "Características Técnicas",
            tab: {
                demo: "Demo Interactiva",
                video: "Video"
            },
            video: {
                fallback: "Tu navegador no soporta video HTML5.",
                placeholder: "Video de demostración próximamente"
            },
            
            // Lab ONC
            labonc: {
                title: "Sistema de Gestión Laboratorio Dental ONC",
                description: "Aplicación de escritorio robusta para la gestión integral de un laboratorio dental. Reemplaza un sistema legado (MS Access 2003) por una solución moderna, segura y eficiente.",
                f1: "Sistema de migración híbrido compatible con Access y formatos modernos",
                f2: "Rust para operaciones de sistema + SQLite con modo WAL",
                f3: "UX adaptativa con saludos dinámicos según hora del día",
                f4: "Generación de PDFs optimizada (50-200KB vs 15MB legacy)"
            },
            
            // Odontoline
            odontoline: {
                title: "Odontoline App",
                description: "Aplicación móvil multiplataforma para pacientes de clínica dental. Gestión de citas, promociones personalizadas y notificaciones push en tiempo real.",
                f1: "Gestión de citas en tiempo real con React Query",
                f2: "Notificaciones push con Firebase Cloud Messaging",
                f3: "Autenticación segura con Supabase Auth",
                f4: "UI personalizada con gradientes y animaciones"
            },
            
            // Pokémon D&D
            pokednd: {
                title: "Pokémon D&D Companion",
                description: "Plataforma web que digitaliza hojas de personaje para campaña de D&D en universo Pokémon. Gestión de entrenadores, inventario, misiones y equipos en tiempo real.",
                f1: "Sistema de temas dinámicos (Kanto, Desierto, Noche) vía CSS Variables",
                f2: "Gestión de estado compleja: Entrenador + 6 Pokémon sincronizados",
                f3: "Scripts PowerShell para orquestación de contenedores",
                f4: "Adaptación de mecánicas D&D 5e al contexto Pokémon"
            }
        },
        
        // Experience
        experience: {
            title: "Experiencia Laboral",
            labonc: {
                title: "Desarrollador de Software",
                d1: "Desarrollo de aplicación de escritorio con Tauri y React",
                d2: "Migración de sistema legado MS Access a arquitectura moderna",
                d3: "Implementación de base de datos SQLite y generación de reportes PDF"
            },
            odontoline: {
                title: "Desarrollador de Aplicaciones",
                d1: "Desarrollo del frontend con Expo (React Native)",
                d2: "Implementación del backend con Flask y Supabase",
                d3: "Creación de notificaciones automáticas y gestión de base de datos"
            },
            teleperformance: {
                title: "Intérprete",
                d1: "Interpretación simultánea de llamadas internacionales",
                d2: "Altos estándares de precisión, confidencialidad y calidad",
                d3: "Colaboración con supervisores para optimizar eficiencia"
            }
        },
        
        // Education
        education: {
            title: "Educación",
            degree: "Ingeniero en Computación",
            status: "Titulado",
            languages: "Idiomas",
            spanish: "Español",
            native: "Nativo",
            english: "Inglés",
            advanced: "Avanzado"
        },
        
        // Resume
        resume: {
            title: "Currículum",
            subtitle: "Descarga mi currículum profesional en el idioma de tu preferencia.",
            spanish: "Español",
            english: "English",
            view: "Ver PDF →"
        },
        
        // Contact
        contact: {
            title: "Contacto",
            subtitle: "¿Tienes un proyecto en mente? ¡Hablemos!"
        },
        
        // Footer
        footer: {
            rights: "Todos los derechos reservados.",
            tagline: "Diseñado y desarrollado con ❤️ desde La Serena, Chile"
        },
        
        // Cookies
        cookies: {
            message: "Este sitio utiliza cookies para recordar tus preferencias de tema e idioma.",
            accept: "Aceptar",
            reject: "Rechazar"
        }
    },
    
    en: {
        // Navigation
        nav: {
            about: "About Me",
            tech: "Technologies",
            projects: "Projects",
            experience: "Experience",
            education: "Education",
            resume: "Resume",
            contact: "Contact"
        },
        
        // Hero
        hero: {
            greeting: "Hi, I'm",
            subtitle: "Computer Engineer",
            tagline: "Full Stack Developer specialized in creating efficient and well-built technological solutions.",
            scroll: "Scroll",
            cta: {
                projects: "View Projects",
                contact: "Get in Touch"
            }
        },
        
        // About
        about: {
            title: "About Me",
            p1: "I'm Víctor Patricio Maldonado García, a Computer Engineer graduated from Universidad de La Serena. I'm dedicated to software development, with experience in creating web, mobile, and desktop applications.",
            p2: "I'm interested in designing technological solutions that are useful, efficient, and well-built, always seeking to improve both the product and the process behind it. I enjoy learning new tools and languages, especially in areas like full stack development, databases, and automation.",
            p3: "I consider myself a responsible, curious person with good technical judgment, who values teamwork and clear communication. My goal is to continue growing as a developer, participating in projects that represent real challenges and add value to the people who use them."
        },
        
        // Tech Stack
        tech: {
            title: "Tech Stack",
            frontend: "Frontend",
            backend: "Backend",
            databases: "Databases",
            tools: "Tools"
        },
        
        // Projects
        projects: {
            title: "Featured Projects",
            features: "Technical Features",
            tab: {
                demo: "Interactive Demo",
                video: "Video"
            },
            video: {
                fallback: "Your browser doesn't support HTML5 video.",
                placeholder: "Demo video coming soon"
            },
            
            // Lab ONC
            labonc: {
                title: "Dental Lab ONC Management System",
                description: "Robust desktop application for comprehensive dental laboratory management. Replaces a legacy system (MS Access 2003) with a modern, secure, and efficient solution.",
                f1: "Hybrid migration system compatible with Access and modern formats",
                f2: "Rust for system operations + SQLite with WAL mode",
                f3: "Adaptive UX with dynamic greetings based on time of day",
                f4: "Optimized PDF generation (50-200KB vs 15MB legacy)"
            },
            
            // Odontoline
            odontoline: {
                title: "Odontoline App",
                description: "Cross-platform mobile app for dental clinic patients. Appointment management, personalized promotions, and real-time push notifications.",
                f1: "Real-time appointment management with React Query",
                f2: "Push notifications with Firebase Cloud Messaging",
                f3: "Secure authentication with Supabase Auth",
                f4: "Custom UI with gradients and animations"
            },
            
            // Pokémon D&D
            pokednd: {
                title: "Pokémon D&D Companion",
                description: "Web platform that digitizes character sheets for D&D campaign in Pokémon universe. Real-time management of trainers, inventory, quests, and teams.",
                f1: "Dynamic theme system (Kanto, Desert, Night) via CSS Variables",
                f2: "Complex state management: Trainer + 6 synchronized Pokémon",
                f3: "PowerShell scripts for container orchestration",
                f4: "Adaptation of D&D 5e mechanics to Pokémon context"
            }
        },
        
        // Experience
        experience: {
            title: "Work Experience",
            labonc: {
                title: "Software Developer",
                d1: "Desktop application development with Tauri and React",
                d2: "Migration from legacy MS Access system to modern architecture",
                d3: "SQLite database implementation and PDF report generation"
            },
            odontoline: {
                title: "Application Developer",
                d1: "Frontend development with Expo (React Native)",
                d2: "Backend implementation with Flask and Supabase",
                d3: "Creation of automatic notifications and database management"
            },
            teleperformance: {
                title: "Interpreter",
                d1: "Simultaneous interpretation of international calls",
                d2: "High standards of accuracy, confidentiality and quality",
                d3: "Collaboration with supervisors to optimize efficiency"
            }
        },
        
        // Education
        education: {
            title: "Education",
            degree: "Computer Engineer",
            status: "Graduated",
            languages: "Languages",
            spanish: "Spanish",
            native: "Native",
            english: "English",
            advanced: "Advanced"
        },
        
        // Resume
        resume: {
            title: "Resume",
            subtitle: "Download my professional resume in your preferred language.",
            spanish: "Español",
            english: "English",
            view: "View PDF →"
        },
        
        // Contact
        contact: {
            title: "Contact",
            subtitle: "Have a project in mind? Let's talk!"
        },
        
        // Footer
        footer: {
            rights: "All rights reserved.",
            tagline: "Designed and developed with ❤️ from La Serena, Chile"
        },
        
        // Cookies
        cookies: {
            message: "This site uses cookies to remember your theme and language preferences.",
            accept: "Accept",
            reject: "Reject"
        }
    }
};

/**
 * Clase para manejar la internacionalización
 */
class I18n {
    constructor() {
        this.currentLang = this.getSavedLanguage() || this.detectLanguage();
    }
    
    /**
     * Detecta el idioma preferido del navegador
     */
    detectLanguage() {
        const browserLang = navigator.language || navigator.userLanguage;
        return browserLang.startsWith('es') ? 'es' : 'en';
    }
    
    /**
     * Obtiene el idioma guardado en cookies
     */
    getSavedLanguage() {
        const cookies = document.cookie.split(';');
        for (let cookie of cookies) {
            const [name, value] = cookie.trim().split('=');
            if (name === 'lang') {
                return value;
            }
        }
        return null;
    }
    
    /**
     * Guarda el idioma en cookies
     */
    saveLanguage(lang) {
        const expiryDate = new Date();
        expiryDate.setFullYear(expiryDate.getFullYear() + 1);
        document.cookie = `lang=${lang};expires=${expiryDate.toUTCString()};path=/;SameSite=Lax`;
    }
    
    /**
     * Obtiene una traducción por su clave (notación punto)
     */
    t(key) {
        const keys = key.split('.');
        let value = translations[this.currentLang];
        
        for (const k of keys) {
            if (value && typeof value === 'object' && k in value) {
                value = value[k];
            } else {
                // Fallback al español si no existe la traducción
                value = translations['es'];
                for (const fk of keys) {
                    if (value && typeof value === 'object' && fk in value) {
                        value = value[fk];
                    } else {
                        return key; // Retorna la clave si no existe
                    }
                }
                break;
            }
        }
        
        return typeof value === 'string' ? value : key;
    }
    
    /**
     * Cambia el idioma actual
     */
    setLanguage(lang) {
        if (lang === this.currentLang) return;
        
        this.currentLang = lang;
        this.saveLanguage(lang);
        this.updatePageContent();
        this.updateLangIndicator();
        
        // Dispatch event para otros scripts
        document.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
    }
    
    /**
     * Alterna entre idiomas
     */
    toggleLanguage() {
        const newLang = this.currentLang === 'es' ? 'en' : 'es';
        this.setLanguage(newLang);
    }
    
    /**
     * Actualiza el indicador visual del idioma
     */
    updateLangIndicator() {
        const indicator = document.querySelector('.lang-indicator');
        if (indicator) {
            indicator.textContent = this.currentLang.toUpperCase();
        }
        
        // Actualiza el atributo lang del HTML
        document.documentElement.lang = this.currentLang;
    }
    
    /**
     * Actualiza todo el contenido de la página
     */
    updatePageContent() {
        const elements = document.querySelectorAll('[data-i18n]');
        
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.t(key);
            
            // Maneja diferentes tipos de elementos
            if (element.tagName === 'INPUT' && element.placeholder) {
                element.placeholder = translation;
            } else {
                element.textContent = translation;
            }
        });
    }
    
    /**
     * Inicializa el sistema de traducciones
     */
    init() {
        // Actualiza el contenido inicial
        this.updatePageContent();
        this.updateLangIndicator();
        
        // Configura el toggle de idioma
        const langToggle = document.getElementById('langToggle');
        if (langToggle) {
            langToggle.addEventListener('click', () => this.toggleLanguage());
        }
    }
}

// Exporta la instancia para uso global
const i18n = new I18n();

// Inicializa cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    i18n.init();
});
