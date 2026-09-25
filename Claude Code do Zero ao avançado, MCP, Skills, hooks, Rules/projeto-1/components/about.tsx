export function About() {
  return (
    <section className="px-6 py-24 sm:px-10">
      <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
          Um bairro, uma equipe, um só lugar
        </h2>
        <div className="flex flex-col gap-6">
          <p className="max-w-lg text-lg leading-relaxed text-foreground/70">
            Abrimos em 2013 num salão de dois metros quadrados com uma
            banheira e um secador emprestado. Hoje cuidamos de mais de 600
            pets da vizinhança, mas o combinado não mudou: quem atende seu
            pet no banho é quem examina ele na consulta, e quem hospeda é
            quem já sabe que ele não gosta de ração molhada.
          </p>
          <blockquote className="border-l-4 border-accent py-1 pl-5 text-foreground">
            <p className="font-display text-xl font-bold">
              &ldquo;Não trocamos de veterinário a cada visita — seu pet
              sempre encontra uma cara conhecida.&rdquo;
            </p>
            <cite className="mt-2 block text-sm text-foreground/60 not-italic">
              Dra. Marina Ferraz, veterinária responsável
            </cite>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
