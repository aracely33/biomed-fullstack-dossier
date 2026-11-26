import type { DossierContent, Language } from '../types/dossier';
export const dossierContent: Record<Language, DossierContent> = {
  es: {
    hero: {
      statusBadge: "Disponible para roles Remotos · Solapamiento horario US",
      name: "Aracely Cruz",
      roleTitle:
        "Desarrolladora Full Stack · Ingeniera Biomédica · HL7 FHIR & HealthTech",
      tagline:
        "Construyo aplicaciones web escalables y confiables combinando criterio clínico, arquitectura PostgreSQL/Supabase e interoperabilidad HL7 FHIR R4.",
      primaryCta: "Explorar Caso de Estudio FHIR",
      secondaryCta: "Ver GitHub",
      copiedFeedback: "¡Copiado!",
      copyTooltip: "Copiar correo",
      contacts: [
        {
          id: "email",
          label: "Email",
          value: "aracelycruzdlangel@gmail.com",
          href: "mailto:aracelycruzdlangel@gmail.com",
          copyable: true,
        },
        {
          id: "github",
          label: "GitHub",
          value: "github.com/aracely33",
          href: "https://github.com",
        },
        {
          id: "linkedin",
          label: "LinkedIn",
          value: "linkedin.com/in/aracruzdelangel",
          href: "https://linkedin.com",
        },
        {
          id: "location",
          label: "Ubicación",
          value: "México (Remoto — Zona Horaria US)",
        },
      ],
    },
    howIWork: {
      eyebrow: "02 // METODOLOGÍA DE INGENIERÍA",
      heading: "Cómo trabajo",
      intro:
        "Abordo el desarrollo de software con el mismo rigor que un sistema clínico: modelos de datos claros, interfaces predecibles y ejecución autónoma.",
      pillars: [
        {
          id: "systems",
          code: "SYS_01",
          title: "Systems Thinking (Biomédica)",
          subtitle: "De flujos clínicos complejos a datos íntegros",
          description:
            "Mi formación en Ingeniería Biomédica (IPN) me enseñó a detectar fallos en cadena antes de escribir código. Modelo reglas de negocio estrictas desde la base de datos hacia la interfaz.",
          proofPoints: [
            "Esquemas relacionales en PostgreSQL con Row Level Security (RLS)",
            "Modelado de entidades bajo estándares HL7 FHIR R4",
            "Validación estricta en tiempo de ejecución con Zod",
          ],
        },
        {
          id: "ui",
          code: "UI_02",
          title: "User-Centric UI",
          subtitle: "Claridad operativa sin fricción visual",
          description:
            "Una interfaz útil reduce la carga cognitiva de quien la opera. Diseño componentes responsivos y accesibles pensando en usuarios reales, desde personal de salud hasta adultos mayores.",
          proofPoints: [
            "Arquitectura modular en React, TypeScript y Tailwind CSS",
            "Estados de carga, error y validación explícitos en cada flujo",
            "Diseño mobile-first con contratos de API limpios",
          ],
        },
        {
          id: "ownership",
          code: "OWN_03",
          title: "Async Ownership",
          subtitle: "Documentación clara y desbloqueo autónomo",
          description:
            "Trabajo de forma asíncrona en horarios de EE. UU. dejando contexto escrito para que ningún equipo dependa de reuniones innecesarias para avanzar.",
          proofPoints: [
            "Integración autónoma de PostHog en 30 días para validar producto",
            "Tickets atómicos, PRs documentados y peer code reviews",
            "Comunicación técnica directa en inglés y español",
          ],
        },
      ],
    },
  },
  en: {
    hero: {
      statusBadge: "Open to Remote Roles · US Timezone Overlap",
      name: "Aracely Cruz",
      roleTitle:
        "Full Stack Developer · Biomedical Engineer · HL7 FHIR & HealthTech",
      tagline:
        "Building scalable, reliable web applications by combining clinical domain intuition, PostgreSQL/Supabase architecture, and HL7 FHIR R4 interoperability.",
      primaryCta: "Explore FHIR Case Study",
      secondaryCta: "View GitHub",
      copiedFeedback: "Copied!",
      copyTooltip: "Copy email",
      contacts: [
        {
          id: "email",
          label: "Email",
          value: "aracelycruzdlangel@gmail.com",
          href: "mailto:aracelycruzdlangel@gmail.com",
          copyable: true,
        },
        {
          id: "github",
          label: "GitHub",
          value: "github.com/aracely33",
          href: "https://github.com",
        },
        {
          id: "linkedin",
          label: "LinkedIn",
          value: "linkedin.com/in/aracruzdelangel",
          href: "https://linkedin.com",
        },
        {
          id: "location",
          label: "Location",
          value: "Mexico (Remote — US Timezone Overlap)",
        },
      ],
    },
    howIWork: {
      eyebrow: "02 // ENGINEERING WORKFLOW",
      heading: "How I Work",
      intro:
        "I build web software with the same rigor required in clinical systems: explicit data contracts, predictable interfaces, and self-directed execution.",
      pillars: [
        {
          id: "systems",
          code: "SYS_01",
          title: "Systems Thinking (Biomedical)",
          subtitle: "Turning messy real-world workflows into reliable schemas",
          description:
            "My B.Sc. in Biomedical Engineering (IPN) trained me to trace downstream failure points before writing code. I enforce data integrity at the database and API boundaries first.",
          proofPoints: [
            "Relational PostgreSQL schemas with Row Level Security (RLS)",
            "Domain modeling aligned with HL7 FHIR R4 resources",
            "Strict runtime payload validation using Zod",
          ],
        },
        {
          id: "ui",
          code: "UI_02",
          title: "User-Centric UI",
          subtitle: "Clear interfaces that reduce cognitive load",
          description:
            "Software fails when users have to guess what the system is doing. I build accessible, responsive interfaces tested against real workflows—from clinical tracking to senior communities.",
          proofPoints: [
            "Modular React, TypeScript, and Tailwind CSS components",
            "Explicit loading, empty, and error states across every flow",
            "Mobile-first layouts backed by documented REST contracts",
          ],
        },
        {
          id: "ownership",
          code: "OWN_03",
          title: "Async Ownership",
          subtitle: "Written context and unblocked delivery",
          description:
            "Operating across US timezones, I default to clear documentation and proactive problem-solving so product milestones keep moving without meeting bottlenecks.",
          proofPoints: [
            "Shipped PostHog analytics solo in 30 days to unblock product decisions",
            "Atomic GitHub issues, structured PRs, and peer code reviews",
            "Direct technical communication in English and Spanish",
          ],
        },
      ],
    },
  },
};