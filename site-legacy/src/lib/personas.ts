export type Cluster = 'product' | 'architect' | 'build' | 'ops' | 'quality' | 'data' | 'platform' | 'security' | 'enablement';
export type Accent = 'red' | 'yellow' | 'green' | 'blue' | 'ink';

export interface Persona {
  id: string;
  slug: string;
  number: number;
  cluster: Cluster;
  accent: Accent;
  phase: string;
  title: { en: string; pt: string; es: string };
  one_liner: { en: string; pt: string; es: string };
}

export const personas: Persona[] = [
  { id: '01-product-owner',        slug: 'product-owner',        number: 1,  cluster: 'product',    accent: 'red',    phase: 'Planning',        title: { en: 'Product Owner',          pt: 'Product Owner',           es: 'Product Owner' },           one_liner: { en: 'Writes and governs the spec.', pt: 'Escreve e governa a spec.', es: 'Escribe y gobierna el spec.' } },
  { id: '02-business-manager',     slug: 'business-manager',     number: 2,  cluster: 'product',    accent: 'red',    phase: 'Planning',        title: { en: 'Business Manager',       pt: 'Gerente de Negócios',     es: 'Gerente de Negocio' },      one_liner: { en: 'Translates business into KPIs.', pt: 'Traduz negócio em KPIs.', es: 'Traduce negocio a KPIs.' } },
  { id: '03-requirements-engineer',slug: 'requirements-engineer',number: 3,  cluster: 'product',    accent: 'red',    phase: 'Discovery',       title: { en: 'Requirements Engineer',  pt: 'Engenheiro de Requisitos',es: 'Ingeniero de Requisitos' }, one_liner: { en: 'Encodes requirements in EARS.', pt: 'Codifica requisitos em EARS.', es: 'Codifica requisitos en EARS.' } },
  { id: '04-enterprise-architect', slug: 'enterprise-architect', number: 4,  cluster: 'architect',  accent: 'yellow', phase: 'Governance',      title: { en: 'Enterprise Architect',   pt: 'Arquiteto Corporativo',   es: 'Arquitecto Empresarial' },  one_liner: { en: 'Constitution and ADRs.', pt: 'Constituição e ADRs.', es: 'Constitución y ADRs.' } },
  { id: '05-software-architect',   slug: 'software-architect',   number: 5,  cluster: 'architect',  accent: 'yellow', phase: 'Design',          title: { en: 'Software Architect',     pt: 'Arquiteto de Software',   es: 'Arquitecto de Software' },  one_liner: { en: 'CODEMAP and API contracts.', pt: 'CODEMAP e contratos de API.', es: 'CODEMAP y contratos de API.' } },
  { id: '06-technical-lead',       slug: 'technical-lead',       number: 6,  cluster: 'architect',  accent: 'yellow', phase: 'Design',          title: { en: 'Technical Lead',         pt: 'Tech Lead',               es: 'Tech Lead' },               one_liner: { en: 'Context engineering for the team.', pt: 'Engenharia de contexto para o time.', es: 'Ingeniería de contexto para el equipo.' } },
  { id: '07-engineering-manager',  slug: 'engineering-manager',  number: 7,  cluster: 'enablement', accent: 'ink',    phase: 'Governance',      title: { en: 'Engineering Manager',    pt: 'Gerente de Engenharia',   es: 'Gerente de Ingeniería' },   one_liner: { en: 'People and delivery health.', pt: 'Saúde de pessoas e entrega.', es: 'Salud de personas y entrega.' } },
  { id: '08-ux-designer',          slug: 'ux-designer',          number: 8,  cluster: 'product',    accent: 'red',    phase: 'Design',          title: { en: 'UX Designer',            pt: 'Designer de UX',          es: 'Diseñador UX' },            one_liner: { en: 'Design system and accessibility.', pt: 'Design system e acessibilidade.', es: 'Design system y accesibilidad.' } },
  { id: '09-scrum-master',         slug: 'scrum-master',         number: 9,  cluster: 'enablement', accent: 'ink',    phase: 'Delivery',        title: { en: 'Scrum Master',           pt: 'Scrum Master',            es: 'Scrum Master' },            one_liner: { en: 'Flow, retros, sprint health.', pt: 'Fluxo, retros, saúde de sprint.', es: 'Flujo, retros, salud de sprint.' } },
  { id: '10-project-manager',      slug: 'project-manager',      number: 10, cluster: 'enablement', accent: 'ink',    phase: 'Delivery',        title: { en: 'Project Manager',        pt: 'Gerente de Projeto',      es: 'Gerente de Proyecto' },     one_liner: { en: 'Risk, status, stakeholders.', pt: 'Risco, status, stakeholders.', es: 'Riesgo, estado, stakeholders.' } },
  { id: '11-devops-engineer',      slug: 'devops-engineer',      number: 11, cluster: 'ops',        accent: 'blue',   phase: 'Operation',       title: { en: 'DevOps Engineer',        pt: 'Engenheiro DevOps',       es: 'Ingeniero DevOps' },        one_liner: { en: 'Pipelines and IaC.', pt: 'Pipelines e IaC.', es: 'Pipelines e IaC.' } },
  { id: '12-platform-architect',   slug: 'platform-architect',   number: 12, cluster: 'platform',   accent: 'green',  phase: 'Platform',        title: { en: 'Platform Architect',     pt: 'Arquiteto de Plataforma', es: 'Arquitecto de Plataforma' },one_liner: { en: 'Golden paths and IDP.', pt: 'Golden paths e IDP.', es: 'Golden paths e IDP.' } },
  { id: '13-qa-engineer',          slug: 'qa-engineer',          number: 13, cluster: 'quality',    accent: 'green',  phase: 'Verification',    title: { en: 'QA Engineer',            pt: 'Engenheiro de QA',        es: 'Ingeniero QA' },            one_liner: { en: 'Test strategy and coverage.', pt: 'Estratégia de testes e cobertura.', es: 'Estrategia de tests y cobertura.' } },
  { id: '14-uat-analyst',          slug: 'uat-analyst',          number: 14, cluster: 'quality',    accent: 'green',  phase: 'Verification',    title: { en: 'UAT Analyst',            pt: 'Analista de UAT',         es: 'Analista UAT' },            one_liner: { en: 'Business acceptance tests.', pt: 'Testes de aceitação de negócio.', es: 'Pruebas de aceptación de negocio.' } },
  { id: '15-data-engineer',        slug: 'data-engineer',        number: 15, cluster: 'data',       accent: 'yellow', phase: 'Implementation',  title: { en: 'Data Engineer',          pt: 'Engenheiro de Dados',     es: 'Ingeniero de Datos' },      one_liner: { en: 'Pipelines and data quality.', pt: 'Pipelines e qualidade de dados.', es: 'Pipelines y calidad de datos.' } },
  { id: '16-ml-ai-engineer',       slug: 'ml-ai-engineer',       number: 16, cluster: 'data',       accent: 'yellow', phase: 'Implementation',  title: { en: 'ML AI Engineer',         pt: 'Engenheiro de ML e IA',   es: 'Ingeniero de ML e IA' },    one_liner: { en: 'Model training and evals.', pt: 'Treino e avaliação de modelos.', es: 'Entrenamiento y evaluación de modelos.' } },
  { id: '17-release-manager',      slug: 'release-manager',      number: 17, cluster: 'ops',        accent: 'blue',   phase: 'Release',         title: { en: 'Release Manager',        pt: 'Gerente de Release',      es: 'Gerente de Release' },      one_liner: { en: 'Release notes and risk.', pt: 'Release notes e risco.', es: 'Notas de release y riesgo.' } },
  { id: '18-infosec-officer',      slug: 'infosec-officer',      number: 18, cluster: 'security',   accent: 'red',    phase: 'Governance',      title: { en: 'InfoSec Officer',        pt: 'Oficial de Segurança',    es: 'Oficial de Seguridad' },    one_liner: { en: 'Vuln triage and compliance.', pt: 'Triagem de vulns e compliance.', es: 'Triaje de vulns y cumplimiento.' } },
  { id: '19-compliance-auditor',   slug: 'compliance-auditor',   number: 19, cluster: 'security',   accent: 'red',    phase: 'Governance',      title: { en: 'Compliance Auditor',     pt: 'Auditor de Compliance',   es: 'Auditor de Cumplimiento' }, one_liner: { en: 'SOX, ISO, SOC 2 controls.', pt: 'Controles SOX, ISO, SOC 2.', es: 'Controles SOX, ISO, SOC 2.' } },
  { id: '20-sre',                  slug: 'sre',                  number: 20, cluster: 'ops',        accent: 'blue',   phase: 'Operation',       title: { en: 'SRE',                    pt: 'SRE',                     es: 'SRE' },                     one_liner: { en: 'SLOs, incidents, postmortems.', pt: 'SLOs, incidentes, postmortems.', es: 'SLOs, incidentes, postmortems.' } },
  { id: '21-dba',                  slug: 'dba',                  number: 21, cluster: 'data',       accent: 'yellow', phase: 'Implementation',  title: { en: 'DBA',                    pt: 'DBA',                     es: 'DBA' },                     one_liner: { en: 'Schema, migrations, tuning.', pt: 'Schema, migrações, tuning.', es: 'Schema, migraciones, tuning.' } },
  { id: '22-developer',            slug: 'developer',            number: 22, cluster: 'build',      accent: 'green',  phase: 'Implementation',  title: { en: 'Developer',              pt: 'Desenvolvedor',           es: 'Desarrollador' },           one_liner: { en: 'Implementation, TDD, bug fix.', pt: 'Implementação, TDD, correção.', es: 'Implementación, TDD, corrección.' } },
  { id: '23-tech-writer',          slug: 'tech-writer',          number: 23, cluster: 'enablement', accent: 'ink',    phase: 'Delivery',        title: { en: 'Tech Writer',            pt: 'Redator Técnico',         es: 'Redactor Técnico' },        one_liner: { en: 'Docs as code.', pt: 'Docs como código.', es: 'Docs como código.' } },
  { id: '24-devrel',               slug: 'devrel',               number: 24, cluster: 'enablement', accent: 'ink',    phase: 'Community',       title: { en: 'DevRel',                 pt: 'DevRel',                  es: 'DevRel' },                  one_liner: { en: 'Tutorials, demos, community.', pt: 'Tutoriais, demos, comunidade.', es: 'Tutoriales, demos, comunidad.' } }
];

export const clusters: Record<Cluster, { accent: Accent; label: { en: string; pt: string; es: string } }> = {
  product:    { accent: 'red',    label: { en: 'Product',     pt: 'Produto',     es: 'Producto' } },
  architect:  { accent: 'yellow', label: { en: 'Architect',   pt: 'Arquitetura', es: 'Arquitectura' } },
  build:      { accent: 'green',  label: { en: 'Build',       pt: 'Build',       es: 'Build' } },
  ops:        { accent: 'blue',   label: { en: 'Ops',         pt: 'Ops',         es: 'Ops' } },
  quality:    { accent: 'green',  label: { en: 'Quality',     pt: 'Qualidade',   es: 'Calidad' } },
  data:       { accent: 'yellow', label: { en: 'Data',        pt: 'Dados',       es: 'Datos' } },
  platform:   { accent: 'green',  label: { en: 'Platform',    pt: 'Plataforma',  es: 'Plataforma' } },
  security:   { accent: 'red',    label: { en: 'Security',    pt: 'Segurança',   es: 'Seguridad' } },
  enablement: { accent: 'ink',    label: { en: 'Enablement',  pt: 'Enablement',  es: 'Enablement' } }
};
