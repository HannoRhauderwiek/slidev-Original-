/**
 * KI-Schulung Design System Konfiguration
 * Apple-Ästhetik: Minimalistisch, Hell, Professionell
 */

export const designConfig = {
  // ═══════════════════════════════════════════════════════════════════════════
  // FARBPALETTE
  // ═══════════════════════════════════════════════════════════════════════════
  colors: {
    // Primärfarben (Hell/Weiß-basiert)
    primary: {
      white: '#FFFFFF',
      background: '#FAFAFA',
      surface: '#F5F5F7',
      muted: '#E8E8ED',
    },

    // Akzentfarben (dezent, professionell)
    accent: {
      blue: '#0071E3',        // Apple Blue - Primärer Akzent
      green: '#34C759',       // Erfolg/Positiv
      red: '#FF3B30',         // Fehler/Negativ
      orange: '#FF9500',      // Warnung
      purple: '#AF52DE',      // Highlight
    },

    // Textfarben
    text: {
      primary: '#1D1D1F',     // Fast Schwarz - Haupttext
      secondary: '#6E6E73',   // Grau - Sekundärtext
      tertiary: '#86868B',    // Hellgrau - Tertiärtext
      inverse: '#FFFFFF',     // Weißer Text auf dunklem Hintergrund
    },

    // Semantische Farben
    semantic: {
      success: '#34C759',
      error: '#FF3B30',
      warning: '#FF9500',
      info: '#0071E3',
    },

    // Dark Mode Farben
    dark: {
      background: '#1D1D1F',
      surface: '#2C2C2E',
      muted: '#3A3A3C',
      text: '#F5F5F7',
    },
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // TYPOGRAFIE
  // ═══════════════════════════════════════════════════════════════════════════
  typography: {
    // Schriftfamilien
    fonts: {
      heading: '"Inter", "SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
      body: '"Inter", "SF Pro Text", -apple-system, BlinkMacSystemFont, sans-serif',
      mono: '"SF Mono", "Fira Code", "JetBrains Mono", monospace',
    },

    // Schriftgrößen (rem-basiert für Responsivität)
    sizes: {
      xs: '0.75rem',      // 12px
      sm: '0.875rem',     // 14px
      base: '1rem',       // 16px
      lg: '1.125rem',     // 18px
      xl: '1.25rem',      // 20px
      '2xl': '1.5rem',    // 24px
      '3xl': '1.875rem',  // 30px
      '4xl': '2.25rem',   // 36px
      '5xl': '3rem',      // 48px
      '6xl': '3.75rem',   // 60px
      '7xl': '4.5rem',    // 72px
    },

    // Schriftgewichte
    weights: {
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },

    // Zeilenhöhen
    lineHeights: {
      tight: 1.2,
      snug: 1.375,
      normal: 1.5,
      relaxed: 1.625,
      loose: 2,
    },
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // ANIMATIONEN
  // ═══════════════════════════════════════════════════════════════════════════
  animations: {
    // Dauer (alle unter 300ms für schnelle, sichtbare Animationen)
    duration: {
      instant: '100ms',
      fast: '150ms',
      normal: '200ms',
      slow: '250ms',
      emphasis: '300ms',
    },

    // Easing-Kurven (Apple-typisch)
    easing: {
      default: 'cubic-bezier(0.25, 0.1, 0.25, 1)',      // Standard
      easeIn: 'cubic-bezier(0.42, 0, 1, 1)',
      easeOut: 'cubic-bezier(0, 0, 0.58, 1)',
      easeInOut: 'cubic-bezier(0.42, 0, 0.58, 1)',
      spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',      // Bounce-Effekt
      smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',           // Material-ähnlich
    },

    // Vordefinierte Animationen
    presets: {
      fadeIn: {
        from: { opacity: 0 },
        to: { opacity: 1 },
        duration: '200ms',
      },
      slideUp: {
        from: { opacity: 0, transform: 'translateY(20px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
        duration: '250ms',
      },
      slideLeft: {
        from: { opacity: 0, transform: 'translateX(30px)' },
        to: { opacity: 1, transform: 'translateX(0)' },
        duration: '250ms',
      },
      scaleIn: {
        from: { opacity: 0, transform: 'scale(0.95)' },
        to: { opacity: 1, transform: 'scale(1)' },
        duration: '200ms',
      },
      highlight: {
        keyframes: [
          { boxShadow: '0 0 0 0 rgba(0, 113, 227, 0.4)' },
          { boxShadow: '0 0 0 10px rgba(0, 113, 227, 0)' },
        ],
        duration: '600ms',
      },
    },

    // Stagger-Verzögerung für Listen
    stagger: {
      fast: 50,
      normal: 80,
      slow: 120,
    },
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // ABSTÄNDE (8px Grid System)
  // ═══════════════════════════════════════════════════════════════════════════
  spacing: {
    unit: 8,  // Basis-Einheit
    scale: {
      0: '0',
      1: '0.25rem',   // 4px
      2: '0.5rem',    // 8px
      3: '0.75rem',   // 12px
      4: '1rem',      // 16px
      5: '1.25rem',   // 20px
      6: '1.5rem',    // 24px
      8: '2rem',      // 32px
      10: '2.5rem',   // 40px
      12: '3rem',     // 48px
      16: '4rem',     // 64px
      20: '5rem',     // 80px
      24: '6rem',     // 96px
    },
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SCHATTEN & EFFEKTE
  // ═══════════════════════════════════════════════════════════════════════════
  shadows: {
    none: 'none',
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    glow: '0 0 20px rgba(0, 113, 227, 0.3)',
    focus: '0 0 0 3px rgba(0, 113, 227, 0.3)',
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // BORDER RADIUS
  // ═══════════════════════════════════════════════════════════════════════════
  borderRadius: {
    none: '0',
    sm: '0.25rem',    // 4px
    base: '0.5rem',   // 8px
    md: '0.75rem',    // 12px
    lg: '1rem',       // 16px
    xl: '1.5rem',     // 24px
    full: '9999px',
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // BREAKPOINTS
  // ═══════════════════════════════════════════════════════════════════════════
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // ICONS
  // ═══════════════════════════════════════════════════════════════════════════
  icons: {
    // Status-Icons
    check: '✓',
    cross: '✗',
    warning: '⚠',
    info: 'ℹ',

    // Navigation
    arrowRight: '→',
    arrowLeft: '←',
    arrowUp: '↑',
    arrowDown: '↓',

    // UI
    expand: '▼',
    collapse: '▲',
    menu: '☰',
    close: '×',

    // Inhalt
    bullet: '•',
    star: '★',
    heart: '♥',
    lightning: '⚡',
  },
}

// CSS Custom Properties Generator
export function generateCSSVariables(config = designConfig): string {
  return `
:root {
  /* Farben */
  --color-white: ${config.colors.primary.white};
  --color-background: ${config.colors.primary.background};
  --color-surface: ${config.colors.primary.surface};
  --color-muted: ${config.colors.primary.muted};

  --color-accent-blue: ${config.colors.accent.blue};
  --color-accent-green: ${config.colors.accent.green};
  --color-accent-red: ${config.colors.accent.red};
  --color-accent-orange: ${config.colors.accent.orange};
  --color-accent-purple: ${config.colors.accent.purple};

  --color-text-primary: ${config.colors.text.primary};
  --color-text-secondary: ${config.colors.text.secondary};
  --color-text-tertiary: ${config.colors.text.tertiary};

  /* Typografie */
  --font-heading: ${config.typography.fonts.heading};
  --font-body: ${config.typography.fonts.body};
  --font-mono: ${config.typography.fonts.mono};

  /* Animationen */
  --duration-instant: ${config.animations.duration.instant};
  --duration-fast: ${config.animations.duration.fast};
  --duration-normal: ${config.animations.duration.normal};
  --duration-slow: ${config.animations.duration.slow};
  --duration-emphasis: ${config.animations.duration.emphasis};

  --easing-default: ${config.animations.easing.default};
  --easing-spring: ${config.animations.easing.spring};
  --easing-smooth: ${config.animations.easing.smooth};

  /* Schatten */
  --shadow-sm: ${config.shadows.sm};
  --shadow-base: ${config.shadows.base};
  --shadow-md: ${config.shadows.md};
  --shadow-lg: ${config.shadows.lg};
  --shadow-glow: ${config.shadows.glow};
  --shadow-focus: ${config.shadows.focus};

  /* Border Radius */
  --radius-sm: ${config.borderRadius.sm};
  --radius-base: ${config.borderRadius.base};
  --radius-md: ${config.borderRadius.md};
  --radius-lg: ${config.borderRadius.lg};
}

/* Dark Mode */
.dark {
  --color-background: ${config.colors.dark.background};
  --color-surface: ${config.colors.dark.surface};
  --color-muted: ${config.colors.dark.muted};
  --color-text-primary: ${config.colors.dark.text};
}
  `.trim()
}

export default designConfig
