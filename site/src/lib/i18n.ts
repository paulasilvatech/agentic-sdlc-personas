import enStrings from '../i18n/en.json';
import ptStrings from '../i18n/pt.json';
import esStrings from '../i18n/es.json';
import { personas as personaData, type Cluster, type Accent } from './personas';

export type Locale = 'en' | 'pt' | 'es';

export const LOCALES: Locale[] = ['en', 'pt', 'es'];
export const DEFAULT_LOCALE: Locale = 'en';

const STRINGS: Record<Locale, any> = {
  en: enStrings,
  pt: ptStrings,
  es: esStrings,
};

export function getStrings(locale: Locale) {
  return STRINGS[locale] ?? STRINGS[DEFAULT_LOCALE];
}

/**
 * Extract locale from Astro.url.pathname. Defaults to 'en' (unprefixed).
 */
export function getLocaleFromUrl(pathname: string): Locale {
  const segments = pathname.split('/').filter(Boolean);
  const firstReal = segments.find(s => s !== 'agentic-sdlc-personas');
  if (firstReal === 'pt' || firstReal === 'es') return firstReal;
  return 'en';
}

/**
 * Build a locale-aware path. Default locale 'en' gets no prefix.
 */
export function localePath(locale: Locale, path: string): string {
  const clean = path.startsWith('/') ? path : '/' + path;
  if (locale === DEFAULT_LOCALE) return clean;
  return `/${locale}${clean}`;
}

/**
 * Persona metadata, shared between sidebar, landing and detail pages.
 * Mirrors src/lib/personas.ts (source of truth for cluster → accent map).
 */
export interface PersonaMeta {
  id: string;
  slug: string;
  number: number;
  cluster: Cluster;
  accent: Accent;
}

export const PERSONA_META: PersonaMeta[] = personaData.map(p => ({
  id: p.id,
  slug: p.slug,
  number: p.number,
  cluster: p.cluster,
  accent: p.accent,
}));

export function getPersonaBySlug(slug: string): PersonaMeta | undefined {
  return PERSONA_META.find(p => p.slug === slug);
}

export function getPersonaNeighbors(slug: string): { prev?: PersonaMeta; next?: PersonaMeta } {
  const idx = PERSONA_META.findIndex(p => p.slug === slug);
  if (idx === -1) return {};
  return {
    prev: idx > 0 ? PERSONA_META[idx - 1] : undefined,
    next: idx < PERSONA_META.length - 1 ? PERSONA_META[idx + 1] : undefined,
  };
}

export function personaUrl(locale: Locale, slug: string): string {
  return localePath(locale, `/personas/${slug}/`);
}
