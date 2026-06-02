import { CheckCircle2, Target, Users } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Sobre o Workshop
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubra como as ferramentas mais modernas podem impulsionar sua carreira e negócio
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">
              Desenvolvido para iniciantes e intermediários
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Se você quer aprender as tecnologias mais requisitadas pelo mercado ou aprimorar seus conhecimentos, este workshop foi feito para você. Você não precisa de conhecimento prévio para começar.
            </p>

            <div className="space-y-4">
              <div className="flex gap-3 items-start">
                <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-semibold text-foreground">100% Prático</p>
                  <p className="text-sm text-muted-foreground">
                    Aulas com exercícios reais e projetos aplicados
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-semibold text-foreground">Ao Vivo e Interativo</p>
                  <p className="text-sm text-muted-foreground">
                    Tire dúvidas em tempo real com instrutores especialistas
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-semibold text-foreground">Certificado Oficial</p>
                  <p className="text-sm text-muted-foreground">
                    Receba um certificado de conclusão ao final do workshop
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div className="p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl border border-primary/20">
              <Target className="text-primary mb-3" size={28} />
              <h4 className="text-lg font-semibold text-foreground mb-2">
                Objetivo
              </h4>
              <p className="text-muted-foreground">
                Capacitar profissionais com habilidades práticas em tecnologias transformadoras
              </p>
            </div>
            <div className="p-8 bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl border border-accent/20">
              <Users className="text-accent mb-3" size={28} />
              <h4 className="text-lg font-semibold text-foreground mb-2">
                Público-Alvo
              </h4>
              <p className="text-muted-foreground">
                Profissionais que querem se especializar em tecnologia e inovação
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
