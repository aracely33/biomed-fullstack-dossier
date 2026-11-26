import { useState, type ReactNode } from 'react';
import { Mail, MapPin, Copy, Check, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import type { ContactLink } from '../../types/dossier';

interface ContactCardProps {
  contacts: ContactLink[];
  copiedFeedback: string;
  copyTooltip: string;
}

const CONTACT_ICONS: Record<ContactLink['id'], ReactNode> = {
  email: <Mail className="h-4 w-4 text-teal-600 shrink-0" />,
  github: <GithubIcon className="h-4 w-4 text-slate-700 shrink-0" />,
  linkedin: <LinkedinIcon className="h-4 w-4 text-sky-700 shrink-0" />,
  location: <MapPin className="h-4 w-4 text-emerald-600 shrink-0" />,
};

export function ContactCard({ contacts, copiedFeedback, copyTooltip }: ContactCardProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = async (id: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch {
      // Fallback silencioso
    }
  };

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      <div className="mb-4 flex items-center justify-between border-b border-slate-100 pb-3">
        <span className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-400">
          DOSSIER // CONTACT_NODE
        </span>
        <span className="h-2 w-2 rounded-full bg-emerald-500" title="Active" />
      </div>

      <ul className="space-y-3">
        {contacts.map((item) => (
          <ContactRow
            key={item.id}
            item={item}
            isCopied={copiedId === item.id}
            copiedFeedback={copiedFeedback}
            copyTooltip={copyTooltip}
            onCopy={handleCopy}
          />
        ))}
      </ul>
    </div>
  );
}

interface ContactRowProps {
  item: ContactLink;
  isCopied: boolean;
  copiedFeedback: string;
  copyTooltip: string;
  onCopy: (id: string, text: string) => void;
}

function ContactRow({ item, isCopied, copiedFeedback, copyTooltip, onCopy }: ContactRowProps) {
  const isExternal = Boolean(item.href && item.id !== 'email');

  return (
    <li className="flex items-center justify-between gap-2 rounded-lg border border-slate-100 bg-slate-50/70 px-3.5 py-2.5 transition hover:border-slate-200 hover:bg-slate-50">
      <div className="flex min-w-0 items-center gap-3">
        {CONTACT_ICONS[item.id]}
        <div className="min-w-0">
          <p className="text-[11px] font-medium uppercase tracking-wide text-slate-400">
            {item.label}
          </p>
          {item.href ? (
            <a
              href={item.href}
              target={isExternal ? '_blank' : undefined}
              rel={isExternal ? 'noopener noreferrer' : undefined}
              className="block truncate text-sm font-medium text-slate-800 hover:text-teal-700"
            >
              {item.value}
            </a>
          ) : (
            <p className="truncate text-sm font-medium text-slate-800">{item.value}</p>
          )}
        </div>
      </div>

      {item.copyable && (
        <button
          type="button"
          onClick={() => onCopy(item.id, item.value)}
          title={copyTooltip}
          className="inline-flex shrink-0 items-center gap-1 rounded-md border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-medium text-slate-600 transition hover:border-teal-300 hover:text-teal-700"
        >
          {isCopied ? (
            <>
              <Check className="h-3.5 w-3.5 text-emerald-600" />
              <span className="text-emerald-700">{copiedFeedback}</span>
            </>
          ) : (
            <Copy className="h-3.5 w-3.5" />
          )}
        </button>
      )}

      {!item.copyable && item.href && (
        <a
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.label}
          className="shrink-0 rounded-md p-1.5 text-slate-400 transition hover:bg-white hover:text-slate-700"
        >
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      )}
    </li>
  );
}
