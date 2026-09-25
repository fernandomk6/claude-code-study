function PawIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <ellipse cx="12" cy="15.5" rx="5.2" ry="4.3" />
      <ellipse cx="5.2" cy="9.4" rx="2.1" ry="2.6" />
      <ellipse cx="9.6" cy="5.6" rx="2.1" ry="2.7" />
      <ellipse cx="14.4" cy="5.6" rx="2.1" ry="2.7" />
      <ellipse cx="18.8" cy="9.4" rx="2.1" ry="2.6" />
    </svg>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-foreground/10 px-6 pt-16 pb-20 sm:px-10 sm:pt-24 sm:pb-28">
      <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="flex flex-col items-start gap-7">
          <h1 className="font-display max-w-xl text-5xl leading-[1.05] font-bold text-foreground sm:text-6xl">
            Seu pet, tratado como parte da família do bairro
          </h1>
          <p className="max-w-md text-lg leading-relaxed text-foreground/70">
            Banho, tosa, consultas e hospedagem a cinco minutos de casa. A
            mesma equipe cuida do seu cão ou gato desde o primeiro banho até
            a velhice.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#contato"
              className="rounded-lg bg-brand px-6 py-3 font-medium text-brand-foreground transition-colors hover:bg-brand/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              Agendar horário
            </a>
            <a
              href="#servicos"
              className="rounded-lg border border-foreground/20 px-6 py-3 font-medium text-foreground transition-colors hover:bg-foreground/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              Ver serviços
            </a>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="w-full max-w-xs rounded-3xl bg-brand p-7 text-brand-foreground shadow-[0_20px_50px_-20px_rgba(47,93,80,0.55)]">
            <div className="flex items-center gap-3">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                <PawIcon className="size-6" />
              </span>
              <div>
                <p className="text-sm text-brand-foreground/70">
                  Próxima vaga livre
                </p>
                <p className="font-display text-xl font-bold">Hoje, 14h</p>
              </div>
            </div>
            <dl className="mt-6 flex flex-col gap-4 border-t border-brand-foreground/15 pt-6">
              <div className="flex items-center justify-between">
                <dt className="text-sm text-brand-foreground/70">
                  Anos cuidando de pets no bairro
                </dt>
                <dd className="font-display text-2xl font-bold">12</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-sm text-brand-foreground/70">
                  Tutores que voltam sempre
                </dt>
                <dd className="font-display text-2xl font-bold">94%</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
