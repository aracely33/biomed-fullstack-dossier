import {
  ArrowDownRight,
  Activity
} from 'lucide-react';
import {ContactCard} from '../ui/ContactCard';
import { GithubIcon } from '../ui/BrandIcons';
import type { HeroSectionData } from '../../types/dossier';

interface HeroContactProps {
  data: HeroSectionData;
}

export function HeroContact({ data }: HeroContactProps) {

  return (
    <section
      id="hero"
      className="border-b border-slate-200 bg-linear-to-b from-slate-50 to-white py-14 sm:py-20"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
          {/* Columna izquierda: Identidad y Propuesta de Valor */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50/80 px-3.5 py-1.5 text-xs font-medium text-teal-800">
              <Activity className="h-3.5 w-3.5 text-teal-600" />
              <span>{data.statusBadge}</span>
            </div>

            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                {data.name}
              </h1>
              <p className="text-base font-semibold text-teal-700 sm:text-lg">
                {data.roleTitle}
              </p>
            </div>

            <p className="max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              {data.tagline}
            </p>

            {/* Botones de acción principales */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#case-study-fhir"
                className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
              >
                <span>{data.primaryCta}</span>
                <ArrowDownRight className="h-4 w-4" />
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 shadow-xs transition hover:bg-slate-50 hover:text-slate-900"
              >
                <GithubIcon className="w-6 h-6 text-gray-800 hover:text-black" />
                <span>{data.secondaryCta}</span>
              </a>
            </div>
          </div>

          {/* Columna derecha: Contact Card estilo ficha técnica */}
          <div className="lg:col-span-5">
            <ContactCard
              contacts={data.contacts}
              copiedFeedback={data.copiedFeedback}
              copyTooltip={data.copyTooltip}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
