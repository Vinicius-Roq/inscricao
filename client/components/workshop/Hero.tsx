import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  const scrollToRegister = () => {
    const element = document.querySelector("#register");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="pt-32 pb-20 px-4 bg-gradient-to-br from-background via-background to-primary/5"
    >
      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full border border-accent/20">
            <Sparkles size={16} className="text-accent" />
            <span className="text-sm font-medium text-accent">
              Edição 2024 - Aulas ao vivo
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
            Participe do <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">Workshop de Tecnologia</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Aprenda as tecnologias mais demandadas do mercado: IA, Automação, Low-Code e muito mais. Aulas práticas e ao vivo com especialistas da área.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button
              onClick={scrollToRegister}
              className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all transform hover:scale-105 flex items-center justify-center gap-2 group"
            >
              Garantir minha vaga
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
            <button className="px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors">
              Saiba mais
            </button>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row gap-8 justify-center text-center">
            <div>
              <p className="text-3xl font-bold text-primary">500+</p>
              <p className="text-sm text-muted-foreground">Inscrições</p>
            </div>
            <div className="hidden sm:block w-px bg-border"></div>
            <div>
              <p className="text-3xl font-bold text-primary">15h</p>
              <p className="text-sm text-muted-foreground">De conteúdo</p>
            </div>
            <div className="hidden sm:block w-px bg-border"></div>
            <div>
              <p className="text-3xl font-bold text-primary">20+</p>
              <p className="text-sm text-muted-foreground">Certificado</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
