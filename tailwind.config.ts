import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],
  theme: {
    extend: {
      colors: {
        // Cores principais
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#020617' // Cor principal central
        },
        secondary: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#00DC82', // Cor secundária do Nuxt
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
          950: '#022c22'
        },
        // Cores neutras
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a'
        },
        // Cores de sistema
        white: '#ffffff',
        black: '#000000',
        // Cores de estado
        success: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d'
        },
        warning: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f'
        },
        error: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d'
        },
        info: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a'
        }
      },
      backgroundImage: {
        // Gradientes principais
        'gradient-primary': 'linear-gradient(135deg, #020617 0%, #0369a1 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #00DC82 0%, #059669 100%)',
        'gradient-primary-secondary': 'linear-gradient(135deg, #020617 0%, #00DC82 100%)',
        'gradient-secondary-primary': 'linear-gradient(135deg, #00DC82 0%, #020617 100%)',
        
        // Gradientes radiais
        'gradient-radial-primary': 'radial-gradient(circle, #020617 0%, #0369a1 100%)',
        'gradient-radial-secondary': 'radial-gradient(circle, #00DC82 0%, #059669 100%)',
        
        // Gradientes com múltiplas cores
        'gradient-hero': 'linear-gradient(135deg, #020617 0%, #0369a1 50%, #00DC82 100%)',
        'gradient-hero-reverse': 'linear-gradient(135deg, #00DC82 0%, #0369a1 50%, #020617 100%)',
        
        // Gradientes sutis
        'gradient-subtle-primary': 'linear-gradient(135deg, #020617 0%, rgba(2, 6, 23, 0.8) 100%)',
        'gradient-subtle-secondary': 'linear-gradient(135deg, #00DC82 0%, rgba(0, 220, 130, 0.8) 100%)',
        
        // Gradientes com transparência
        'gradient-overlay-dark': 'linear-gradient(135deg, rgba(2, 6, 23, 0.9) 0%, rgba(2, 6, 23, 0.6) 100%)',
        'gradient-overlay-light': 'linear-gradient(135deg, rgba(0, 220, 130, 0.9) 0%, rgba(0, 220, 130, 0.6) 100%)',
        
        // Gradientes animados (para usar com animações CSS)
        'gradient-animated': 'linear-gradient(-45deg, #020617, #0369a1, #00DC82, #059669)',
      },
      animation: {
        'gradient': 'gradient 15s ease infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': '0% 50%'
          },
          '50%': {
            'background-size': '400% 400%',
            'background-position': '100% 50%'
          }
        }
      },
      fontFamily: {
        sans: ['Public Sans', 'Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Monaco', 'Consolas', 'ui-monospace', 'monospace'],
        display: ['Public Sans', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['Public Sans', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'primary': '0 4px 14px 0 rgba(2, 6, 23, 0.15)',
        'secondary': '0 4px 14px 0 rgba(0, 220, 130, 0.15)',
        'primary-lg': '0 10px 25px -3px rgba(2, 6, 23, 0.1), 0 4px 6px -2px rgba(2, 6, 23, 0.05)',
        'secondary-lg': '0 10px 25px -3px rgba(0, 220, 130, 0.1), 0 4px 6px -2px rgba(0, 220, 130, 0.05)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      }
    },
  },
  plugins: [],
} satisfies Config