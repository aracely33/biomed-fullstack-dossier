import type { DossierContent, Language } from '../types/dossier';
export const dossierContent: Record<Language, DossierContent> = {
  es: {
    hero: {
      statusBadge: 'Disponible para roles Remotos · Solapamiento horario US',
      name: 'Aracely Cruz',
      roleTitle: 'Desarrolladora Full Stack · Ingeniera Biomédica · HL7 FHIR & HealthTech',
      tagline:
        'Construyo aplicaciones web escalables y confiables combinando criterio clínico, arquitectura PostgreSQL/Supabase e interoperabilidad HL7 FHIR R4.',
      primaryCta: 'Explorar Caso de Estudio FHIR',
      secondaryCta: 'Ver GitHub',
      copiedFeedback: '¡Copiado!',
      copyTooltip: 'Copiar correo',
      contacts: [
        {
          id: 'email',
          label: 'Email',
          value: 'aracelycruzdlangel@gmail.com',
          href: 'mailto:aracelycruzdlangel@gmail.com',
          copyable: true,
        },
        {
          id: 'github',
          label: 'GitHub',
          value: 'github.com/aracely33',
          href: 'https://github.com',
        },
        {
          id: 'linkedin',
          label: 'LinkedIn',
          value: 'linkedin.com/in/aracruzdelangel',
          href: 'https://linkedin.com',
        },
        {
          id: 'location',
          label: 'Ubicación',
          value: 'México (Remoto — Zona Horaria US)',
        },
      ],
    },
  },
  en: {
    hero: {
      statusBadge: 'Open to Remote Roles · US Timezone Overlap',
      name: 'Aracely Cruz',
      roleTitle: 'Full Stack Developer · Biomedical Engineer · HL7 FHIR & HealthTech',
      tagline:
        'Building scalable, reliable web applications by combining clinical domain intuition, PostgreSQL/Supabase architecture, and HL7 FHIR R4 interoperability.',
      primaryCta: 'Explore FHIR Case Study',
      secondaryCta: 'View GitHub',
      copiedFeedback: 'Copied!',
      copyTooltip: 'Copy email',
      contacts: [
        {
          id: 'email',
          label: 'Email',
          value: 'aracelycruzdlangel@gmail.com',
          href: 'mailto:aracelycruzdlangel@gmail.com',
          copyable: true,
        },
        {
          id: 'github',
          label: 'GitHub',
          value: 'github.com/aracely33',
          href: 'https://github.com',
        },
        {
          id: 'linkedin',
          label: 'LinkedIn',
          value: 'linkedin.com/in/aracruzdelangel',
          href: 'https://linkedin.com',
        },
        {
          id: 'location',
          label: 'Location',
          value: 'Mexico (Remote — US Timezone Overlap)',
        },
      ],
    },
  },
};