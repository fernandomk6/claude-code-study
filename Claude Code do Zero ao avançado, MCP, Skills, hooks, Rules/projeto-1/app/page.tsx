import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <main className="flex flex-1 flex-col">
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
