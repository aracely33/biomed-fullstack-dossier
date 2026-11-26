import type { ReactNode } from 'react';
import { Network, LayoutTemplate, GitPullRequestArrow, CheckCircle2 } from 'lucide-react';
import type { HowIWorkSectionData, WorkPillar } from '../../types/dossier';

interface HowIWorkProps {
  data: HowIWorkSectionData;
}

const PILLAR_ICONS: Record<WorkPillar['id'], ReactNode> = {
  systems: <Network className="h-5 w-5 text-teal-700" />,
  ui: <LayoutTemplate className="h-5 w-5 text-sky-700" />,
  ownership: <GitPullRequestArrow className="h-5 w-5 text-emerald-700" />,
};

export function HowIWork({ data }: HowIWorkProps) {
  return (
    <section id="how-i-work" className="border-b border-slate-200 bg-slate-50/60 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl space-y-2">
          <p className="font-mono text-xs font-semibold uppercase tracking-wider text-teal-700">
            {data.eyebrow}
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            {data.heading}
          </h2>
          <p className="text-sm leading-relaxed text-slate-600 sm:text-base">{data.intro}</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {data.pillars.map((pillar) => (
            <PillarCard key={pillar.id} pillar={pillar} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PillarCard({ pillar }: { pillar: WorkPillar }) {
  return (
    <article className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 shadow-xs transition hover:border-slate-300">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-100 bg-slate-50">
            {PILLAR_ICONS[pillar.id]}
          </div>
          <span className="font-mono text-xs font-medium text-slate-400">{pillar.code}</span>
        </div>

        <div className="space-y-1">
          <h3 className="text-lg font-bold text-slate-900">{pillar.title}</h3>
          <p className="text-xs font-semibold text-teal-700">{pillar.subtitle}</p>
        </div>

        <p className="text-sm leading-relaxed text-slate-600">{pillar.description}</p>
      </div>

      <ul className="mt-6 space-y-2.5 border-t border-slate-100 pt-4">
        {pillar.proofPoints.map((point) => (
          <li key={point} className="flex items-start gap-2 text-xs leading-snug text-slate-700">
            <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-teal-600" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
