/* ===========================================================
   THEME-TOGGLE.JS - Sistema de Temas Dark/Light
   Con persistencia en cookies
   =========================================================== */

/**
 * Clase para manejar el sistema de temas
 */
class ThemeManager {
    constructor() {
        this.currentTheme = this.getSavedTheme() || this.detectPreferredTheme();
        this.themeToggle = null;
    }
    
    /**
     * Detecta el tema preferido del sistema operativo
     */
    detectPreferredTheme() {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
            return 'light';
        }
        return 'dark';
    }
    
    /**
     * Obtiene el tema guardado en cookies
     */
    getSavedTheme() {
        const cookies = document.cookie.split(';');
        for (let cookie of cookies) {
            const [name, value] = cookie.trim().split('=');
            if (name === 'theme') {
                return value;
            }
        }
        return null;
    }
    
    /**
     * Guarda el tema en cookies
     */
    saveTheme(theme) {
        const expiryDate = new Date();
        expiryDate.setFullYear(expiryDate.getFullYear() + 1);
        document.cookie = `theme=${theme};expires=${expiryDate.toUTCString()};path=/;SameSite=Lax`;
    }
    
    /**
     * Aplica el tema al documento
     */
    applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        this.currentTheme = theme;
        this.saveTheme(theme);
        
        // Dispatch event para otros scripts
        document.dispatchEvent(new CustomEvent('themeChanged', { detail: { theme } }));
    }
    
    /**
     * Alterna entre temas
     */
    toggleTheme() {
        const newTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
        this.applyTheme(newTheme);
    }
    
    /**
     * Escucha cambios en las preferencias del sistema
     */
    watchSystemPreference() {
        if (window.matchMedia) {
            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            
            mediaQuery.addEventListener('change', (e) => {
                // Solo cambia si el usuario no ha guardado una preferencia
                if (!this.getSavedTheme()) {
                    this.applyTheme(e.matches ? 'dark' : 'light');
                }
            });
        }
    }
    
    /**
     * Inicializa el sistema de temas
     */
    init() {
        // Aplica el tema inicial
        this.applyTheme(this.currentTheme);
        
        // Configura el toggle
        this.themeToggle = document.getElementById('themeToggle');
        if (this.themeToggle) {
            this.themeToggle.addEventListener('click', () => this.toggleTheme());
            
            // Accesibilidad: actualiza aria-label
            this.updateAriaLabel();
        }
        
        // Escucha cambios del sistema
        this.watchSystemPreference();
        
        // Escucha cambios de tema para actualizar aria-label
        document.addEventListener('themeChanged', () => this.updateAriaLabel());
    }
    
    /**
     * Actualiza el aria-label del toggle
     */
    updateAriaLabel() {
        if (this.themeToggle) {
            const label = this.currentTheme === 'dark' 
                ? 'Cambiar a tema claro' 
                : 'Cambiar a tema oscuro';
            this.themeToggle.setAttribute('aria-label', label);
        }
    }
}

// Exporta la instancia para uso global
const themeManager = new ThemeManager();

// Inicializa inmediatamente para evitar flash de tema incorrecto
(function() {
    // Obtiene el tema guardado o preferido antes de que el DOM se cargue
    const getSavedTheme = () => {
        const cookies = document.cookie.split(';');
        for (let cookie of cookies) {
            const [name, value] = cookie.trim().split('=');
            if (name === 'theme') return value;
        }
        return null;
    };
    
    const detectPreferred = () => {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
            return 'light';
        }
        return 'dark';
    };
    
    const theme = getSavedTheme() || detectPreferred();
    document.documentElement.setAttribute('data-theme', theme);
})();

// Inicializa cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    themeManager.init();
});
