/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'Monaco', 'monospace'],
      },
      colors: {
        ink: {
          DEFAULT: 'var(--ps-color-ink)',
          2: 'var(--ps-color-ink-2)',
          3: 'var(--ps-color-ink-3)',
        },
        paper: 'var(--ps-color-paper)',
        bg: {
          DEFAULT: 'var(--ps-color-bg)',
          alt: 'var(--ps-color-bg-alt)',
        },
        rule: {
          DEFAULT: 'var(--ps-color-rule)',
          2: 'var(--ps-color-rule-2)',
        },
        'ms-red':    { 50: 'var(--ps-color-ms-red-50)',    100: 'var(--ps-color-ms-red-100)',    500: 'var(--ps-color-ms-red-500)',    700: 'var(--ps-color-ms-red-700)' },
        'ms-green':  { 50: 'var(--ps-color-ms-green-50)',  100: 'var(--ps-color-ms-green-100)',  500: 'var(--ps-color-ms-green-500)',  700: 'var(--ps-color-ms-green-700)' },
        'ms-blue':   { 50: 'var(--ps-color-ms-blue-50)',   100: 'var(--ps-color-ms-blue-100)',   500: 'var(--ps-color-ms-blue-500)',   700: 'var(--ps-color-ms-blue-700)' },
        'ms-yellow': { 50: 'var(--ps-color-ms-yellow-50)', 100: 'var(--ps-color-ms-yellow-100)', 500: 'var(--ps-color-ms-yellow-500)', 700: 'var(--ps-color-ms-yellow-700)' },
      },
      letterSpacing: {
        tightest: '-0.035em',
        tighter: '-0.025em',
        tight: '-0.015em',
        mono: '0.14em',
      },
      maxWidth: {
        prose: '70ch',
        reading: '78ch',
      },
    },
  },
};
