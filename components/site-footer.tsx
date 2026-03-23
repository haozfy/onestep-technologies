export function SiteFooter() {
  return (
    <footer className="mx-auto max-w-6xl px-6 pb-10">
      <div className="border-t border-zinc-200 pt-8">
        <div className="text-sm font-medium text-zinc-900">
          OneStep Technologies
        </div>

        <div className="mt-3 text-xs text-zinc-500">
          Stabilized reagent systems and reaction-kinetic detection platforms for
          practical online free chlorine monitoring.
        </div>

        <div className="mt-4 text-xs">
          <a
            href="mailto:contact@onestep-technologies.com"
            className="text-zinc-600 hover:text-zinc-900"
          >
            contact@onestep-technologies.com
          </a>
        </div>

        <div className="mt-6 text-xs text-zinc-400">
          © 2026 OneStep Technologies
        </div>
      </div>
    </footer>
  );
}