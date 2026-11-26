import { useState } from "react";
import { dossierContent } from "./data/dossierContent";
import { HeroContact } from "./components/sections/HeroContact";
import type { Language } from "./types/dossier";

function App() {
  const [lang, setLang] = useState<Language>("es");
  const content = dossierContent[lang];

  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased">
      {/* Barra superior temporal para probar cambio de idioma */}
      <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/90 backdrop-blur-xs">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <span className="font-mono text-xs font-semibold text-slate-500">
            aracely.cruz // technical-dossier
          </span>
          <button
            type="button"
            onClick={() => setLang((prev) => (prev === "es" ? "en" : "es"))}
            className="rounded-md border border-slate-300 px-3 py-1 text-xs font-semibold text-slate-700 hover:bg-slate-100"
          >
            {lang === "es" ? "EN" : "ES"}
          </button>
        </div>
      </header>

      <main>
        <HeroContact data={content.hero} />
      </main>
    </div>
  );
}

export default App;
