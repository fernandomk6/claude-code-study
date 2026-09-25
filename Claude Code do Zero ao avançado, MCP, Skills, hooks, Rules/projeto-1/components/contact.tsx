const contactInfo = [
  {
    label: "Endereço",
    value: "Rua das Flores, 123 — Jardim das Acácias, São Paulo - SP",
  },
  { label: "Telefone", value: "(11) 4002-8922" },
  { label: "WhatsApp", value: "(11) 98765-4321" },
  { label: "E-mail", value: "contato@amigofiel.com.br" },
];

const hours = [
  { day: "Segunda a sexta", time: "8h às 19h" },
  { day: "Sábado", time: "8h às 14h" },
  { day: "Domingo", time: "Fechado" },
];

export function Contact() {
  return (
    <section id="contato" className="px-6 py-24 sm:px-10">
      <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <div className="flex flex-col gap-6">
          <div>
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              Marque a primeira visita
            </h2>
            <p className="mt-3 max-w-sm text-foreground/70">
              Responde mais rápido pelo WhatsApp, mas ligamos de volta se
              preferir.
            </p>
          </div>
          <a
            href="https://wa.me/5511987654321"
            className="inline-flex w-fit items-center gap-2 rounded-lg bg-brand px-6 py-3 font-medium text-brand-foreground transition-colors hover:bg-brand/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            Chamar no WhatsApp
          </a>
          <dl className="mt-2 flex flex-col gap-3">
            {contactInfo.map((item) => (
              <div key={item.label} className="flex gap-3 text-sm">
                <dt className="w-24 shrink-0 text-foreground/50">
                  {item.label}
                </dt>
                <dd className="text-foreground/80">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="rounded-2xl bg-accent-soft p-7">
          <h3 className="font-display text-lg font-bold text-foreground">
            Horário de funcionamento
          </h3>
          <dl className="mt-5 flex flex-col divide-y divide-foreground/10">
            {hours.map((item) => (
              <div
                key={item.day}
                className="flex items-baseline justify-between py-3"
              >
                <dt className="text-foreground/70">{item.day}</dt>
                <dd className="font-medium text-foreground">{item.time}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
