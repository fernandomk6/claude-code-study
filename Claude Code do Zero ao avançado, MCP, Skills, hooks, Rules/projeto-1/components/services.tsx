function BathIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M4 12h16" />
      <path d="M5 12v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5" />
      <path d="M8 12V7a3 3 0 0 1 5.5-1.7" />
      <path d="M4 9c0-1 .8-1.5 1.5-1 .6.4 1 .1 1-.6" />
    </svg>
  );
}

function StethoscopeIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M6 4v5a4 4 0 0 0 8 0V4" />
      <path d="M10 15a4 4 0 0 0 8 0v-1.5" />
      <circle cx="18" cy="17.5" r="2" />
    </svg>
  );
}

function HouseIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M4 11.5 12 4l8 7.5" />
      <path d="M6 10v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-9" />
      <path d="M10 20v-5h4v5" />
    </svg>
  );
}

function BagIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M6 8h12l-1 12a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2L6 8Z" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" />
    </svg>
  );
}

const services = [
  {
    name: "Banho e tosa",
    description:
      "Cada pet tem uma ficha própria com o corte, o shampoo e o jeito de escovar que ele tolera melhor.",
    icon: BathIcon,
  },
  {
    name: "Consultas veterinárias",
    description:
      "Check-ups, vacinas e atendimento clínico com os mesmos dois veterinários, para o pet reconhecer quem o examina.",
    icon: StethoscopeIcon,
  },
  {
    name: "Hotel para pets",
    description:
      "Baias individuais, três passeios por dia e uma foto no fim da tarde para você acompanhar de onde estiver.",
    icon: HouseIcon,
  },
  {
    name: "Loja de produtos",
    description:
      "Ração, petiscos e acessórios selecionados pela equipe que já conhece as restrições e preferências do seu pet.",
    icon: BagIcon,
  },
];

export function Services() {
  return (
    <section id="servicos" className="bg-brand-soft px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col gap-3">
          <h2 className="font-display max-w-md text-3xl font-bold text-foreground sm:text-4xl">
            O que a gente faz pelo seu pet
          </h2>
          <p className="max-w-md text-foreground/70">
            Quatro serviços, uma equipe só — sem repassar o histórico do seu
            pet de pessoa em pessoa.
          </p>
        </div>

        <div className="mt-12 flex flex-col divide-y divide-foreground/10 border-y border-foreground/10">
          {services.map((service) => (
            <div
              key={service.name}
              className="flex flex-col gap-4 py-8 sm:flex-row sm:items-start sm:gap-8"
            >
              <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-background text-brand">
                <service.icon className="size-6" />
              </span>
              <div className="flex flex-col gap-1.5 sm:max-w-lg">
                <h3 className="font-display text-xl font-bold text-foreground">
                  {service.name}
                </h3>
                <p className="text-foreground/70">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
