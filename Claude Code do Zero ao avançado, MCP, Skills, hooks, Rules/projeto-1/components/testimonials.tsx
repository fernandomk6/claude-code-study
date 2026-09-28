const testimonials = [
  {
    quote:
      "Depois de três petshops diferentes, foi o único lugar onde meu cachorro parou de tremer na hora do banho. Eles conhecem o jeito dele.",
    author: "Camila Torres",
    pet: "tutora da Nina",
  },
  {
    quote:
      "Levei meu gato idoso para uma consulta de rotina e o veterinário já sabia o histórico dele de cabeça, sem eu precisar explicar nada de novo.",
    author: "Roberto Alencar",
    pet: "tutor do Simba",
  },
  {
    quote:
      "Deixei meu cachorro hospedado por uma semana e recebi fotos todo santo dia. Voltei e ele estava mais tranquilo do que quando saiu de casa.",
    author: "Juliana Prado",
    pet: "tutora do Thor",
  },
];

export function Testimonials() {
  return (
    <section className="bg-brand-soft px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col gap-3">
          <h2 className="font-display max-w-md text-3xl font-bold text-foreground sm:text-4xl">
            Quem já passou por aqui
          </h2>
          <p className="max-w-md text-foreground/70">
            Histórias de tutores que confiam a gente com o dia a dia dos seus
            pets.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.author}
              className="flex flex-col justify-between gap-6 rounded-2xl bg-background p-7"
            >
              <blockquote className="text-foreground/80">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <figcaption>
                <p className="font-display font-bold text-foreground">
                  {testimonial.author}
                </p>
                <p className="text-sm text-foreground/60">{testimonial.pet}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
