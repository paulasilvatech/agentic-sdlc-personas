export const locales = ['en', 'pt', 'es'] as const;
export type Locale = typeof locales[number];

export function getLocaleFromUrl(url: URL): Locale {
  const seg = url.pathname.split('/')[1];
  if (seg === 'pt' || seg === 'es') return seg;
  // Respect Astro base when deployed under subpath
  const segBase = url.pathname.split('/')[2];
  if (segBase === 'pt' || segBase === 'es') return segBase;
  return 'en';
}

export function getPersonaPath(locale: Locale, slug: string, base = ''): string {
  if (locale === 'en') return `${base}/personas/${slug}`;
  return `${base}/${locale}/personas/${slug}`;
}

export function getLandingPath(locale: Locale, base = ''): string {
  if (locale === 'en') return `${base}/`;
  return `${base}/${locale}/`;
}

export const ui = {
  en: {
    nav: { personas: 'Personas', mcp: 'MCP Catalog', styleGuide: 'Style guide', github: 'GitHub' },
    hero: {
      eyebrow: 'A framework for AI-native SDLC',
      title: 'Twenty-four personas. One agentic toolkit for the software development lifecycle.',
      subtitle: 'Validated primitives for GitHub Copilot and Claude Code across every role in a modern engineering organization. Agents, prompts, instructions, skills, hooks, and only the MCPs that actually exist.',
      primary: 'Explore the personas',
      secondary: 'Read the style guide'
    },
    sections: {
      stack: 'The stack at a glance',
      stackTitle: 'Four layers of agentic engineering discipline, twenty-four roles.',
      personas: 'Twenty-four personas',
      personasTitle: 'The software development lifecycle, decomposed.',
      personasLead: 'Each persona ships with validated primitives and only the MCPs that appear in the catalog.',
      mcp: 'Validated MCPs',
      mcpTitle: 'Sixteen official servers, no fiction.',
      mcpLead: 'Every MCP recommended by this framework has a live repository or hosted endpoint, a status classification, and an official link.',
      about: 'About',
      aboutTitle: 'Built by Paula Silva'
    },
    about: {
      body: 'Paula Silva is an AI-Native Software Engineer and Global Black Belt at Microsoft Americas. This framework is the public companion to her work on Agentic DevOps and spec-driven development, and is released under MIT.'
    }
  },
  pt: {
    nav: { personas: 'Personas', mcp: 'Catálogo MCP', styleGuide: 'Style guide', github: 'GitHub' },
    hero: {
      eyebrow: 'Um framework para SDLC AI-native',
      title: 'Vinte e quatro personas. Um toolkit agêntico para todo o ciclo de desenvolvimento de software.',
      subtitle: 'Primitivos validados para GitHub Copilot e Claude Code em cada papel de uma organização de engenharia moderna. Agents, prompts, instructions, skills, hooks, e apenas os MCPs que realmente existem.',
      primary: 'Explorar as personas',
      secondary: 'Ler o style guide'
    },
    sections: {
      stack: 'O stack em um relance',
      stackTitle: 'Quatro camadas de disciplina agêntica, vinte e quatro papéis.',
      personas: 'Vinte e quatro personas',
      personasTitle: 'O ciclo de desenvolvimento de software, decomposto.',
      personasLead: 'Cada persona traz primitivos validados e apenas os MCPs que aparecem no catálogo.',
      mcp: 'MCPs validados',
      mcpTitle: 'Dezesseis servidores oficiais, sem ficção.',
      mcpLead: 'Cada MCP recomendado por este framework tem repositório ativo ou endpoint hospedado, classificação de status e link oficial.',
      about: 'Sobre',
      aboutTitle: 'Construído por Paula Silva'
    },
    about: {
      body: 'Paula Silva é AI-Native Software Engineer e Global Black Belt na Microsoft Americas. Este framework é o companheiro público do trabalho dela em Agentic DevOps e spec-driven development, e está licenciado sob MIT.'
    }
  },
  es: {
    nav: { personas: 'Personas', mcp: 'Catálogo MCP', styleGuide: 'Guía de estilo', github: 'GitHub' },
    hero: {
      eyebrow: 'Un framework para SDLC AI-native',
      title: 'Veinticuatro personas. Un toolkit agéntico para todo el ciclo de desarrollo de software.',
      subtitle: 'Primitivos validados para GitHub Copilot y Claude Code en cada rol de una organización de ingeniería moderna. Agents, prompts, instructions, skills, hooks, y solo los MCPs que realmente existen.',
      primary: 'Explorar las personas',
      secondary: 'Leer la guía de estilo'
    },
    sections: {
      stack: 'El stack de un vistazo',
      stackTitle: 'Cuatro capas de disciplina agéntica, veinticuatro roles.',
      personas: 'Veinticuatro personas',
      personasTitle: 'El ciclo de desarrollo de software, descompuesto.',
      personasLead: 'Cada persona incluye primitivos validados y solo los MCPs que aparecen en el catálogo.',
      mcp: 'MCPs validados',
      mcpTitle: 'Dieciséis servidores oficiales, sin ficción.',
      mcpLead: 'Cada MCP recomendado por este framework tiene repositorio activo o endpoint hospedado, clasificación de estado y enlace oficial.',
      about: 'Acerca',
      aboutTitle: 'Construido por Paula Silva'
    },
    about: {
      body: 'Paula Silva es AI-Native Software Engineer y Global Black Belt en Microsoft Americas. Este framework es el compañero público de su trabajo en Agentic DevOps y desarrollo dirigido por especificación, y se publica bajo licencia MIT.'
    }
  }
} as const;
