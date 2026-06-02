import {
  Brain,
  MessageSquare,
  Zap,
  Code2,
  Layers,
} from "lucide-react";

const modules = [
  {
    icon: Brain,
    title: "Inteligência Artificial",
    description: "Aprenda os fundamentos de IA, machine learning e redes neurais. Use ferramentas como ChatGPT e outras plataformas.",
    color: "from-blue-500/20 to-blue-500/5",
    borderColor: "border-blue-500/30",
  },
  {
    icon: MessageSquare,
    title: "Prompt Engineering",
    description: "Domine a arte de criar prompts eficientes. Maximize o poder de modelos de linguagem e IAs generativas.",
    color: "from-purple-500/20 to-purple-500/5",
    borderColor: "border-purple-500/30",
  },
  {
    icon: Zap,
    title: "Automação",
    description: "Automatize processos repetitivos. Integre sistemas e aumente sua produtividade exponencialmente.",
    color: "from-amber-500/20 to-amber-500/5",
    borderColor: "border-amber-500/30",
  },
  {
    icon: Code2,
    title: "Apps Script",
    description: "Crie soluções personalizadas com Google Apps Script. Automatize Google Sheets, Forms e muito mais.",
    color: "from-green-500/20 to-green-500/5",
    borderColor: "border-green-500/30",
  },
  {
    icon: Layers,
    title: "Low-Code",
    description: "Desenvolva aplicações sem precisar escrever muito código. Use plataformas visuais e intuitivas.",
    color: "from-pink-500/20 to-pink-500/5",
    borderColor: "border-pink-500/30",
  },
];

export default function Program() {
  return (
    <section id="program" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Programação do Workshop
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conteúdo abrangente e atualizado com as tendências de mercado
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {modules.map((module) => {
            const Icon = module.icon;
            return (
              <div
                key={module.title}
                className={`p-6 bg-gradient-to-br ${module.color} rounded-xl border ${module.borderColor} hover:shadow-lg transition-shadow group`}
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Icon className="text-foreground group-hover:scale-110 transition-transform" size={28} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {module.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {module.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 p-8 bg-white rounded-xl border border-border">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Informações Importantes
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="font-semibold text-foreground mb-2">📅 Duração</p>
              <p className="text-muted-foreground">15 horas de aulas ao vivo e gravadas</p>
            </div>
            <div>
              <p className="font-semibold text-foreground mb-2">⏰ Horário</p>
              <p className="text-muted-foreground">2 encontros por semana, 2h30 cada</p>
            </div>
            <div>
              <p className="font-semibold text-foreground mb-2">💻 Formato</p>
              <p className="text-muted-foreground">100% online - acesse de qualquer lugar</p>
            </div>
            <div>
              <p className="font-semibold text-foreground mb-2">🎓 Certificado</p>
              <p className="text-muted-foreground">Certificado ao completar todos os módulos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
