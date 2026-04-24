export default {
  content: ['./src/**/*.{astro,html,mdx,ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        'ds-red':    '#F25022',
        'ds-green':  '#7FBA00',
        'ds-blue':   '#00A4EF',
        'ds-yellow': '#FFB900',
        'ds-ink':    '#1A1A1A',
        'ds-ink-2':  '#3A3A3A',
        'ds-ink-3':  '#737373',
        'ds-paper':  '#FFFFFF',
        'ds-bg':     '#F7F7F5',
        'ds-bg-alt': '#ECECE8',
        'ds-rule':   '#E5E5E0',
        'ds-rule-2': '#CECEC7'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace']
      }
    }
  }
};
