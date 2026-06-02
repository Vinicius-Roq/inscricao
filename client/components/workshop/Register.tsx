import { AlertCircle } from "lucide-react";

export default function Register() {
  return (
    <section id="register" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Inscrição
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ainda há vagas disponíveis! Preencha o formulário abaixo para garantir seu lugar no workshop.
          </p>
        </div>

        <div className="mb-8 p-4 bg-accent/10 border border-accent/20 rounded-lg flex gap-3">
          <AlertCircle className="text-accent flex-shrink-0 mt-0.5" size={20} />
          <div className="text-sm">
            <p className="font-semibold text-accent mb-1">Vagas Limitadas!</p>
            <p className="text-muted-foreground">
              As inscrições são limitadas. Garanta sua vaga preenchendo o formulário de inscrição abaixo.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-border">
          <div className="flex justify-center p-4">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSeG3TRyBH988HUajvu1SNjE7zDGDKkgFW6HCK2lMsDekFm6Tw/viewform?embedded=true"
              width="100%"
              height="985"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              style={{ maxWidth: "640px" }}
              title="Formulário de Inscrição"
            >
              Carregando…
            </iframe>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-muted/50 rounded-lg border border-border">
            <p className="text-3xl font-bold text-primary mb-2">✓</p>
            <h4 className="font-semibold text-foreground mb-2">Rápido e Fácil</h4>
            <p className="text-sm text-muted-foreground">
              Inscrição em menos de 1 minuto
            </p>
          </div>
          <div className="p-6 bg-muted/50 rounded-lg border border-border">
            <p className="text-3xl font-bold text-primary mb-2">🔒</p>
            <h4 className="font-semibold text-foreground mb-2">Seguro</h4>
            <p className="text-sm text-muted-foreground">
              Seus dados são protegidos e seguros
            </p>
          </div>
          <div className="p-6 bg-muted/50 rounded-lg border border-border">
            <p className="text-3xl font-bold text-primary mb-2">📧</p>
            <h4 className="font-semibold text-foreground mb-2">Confirmação</h4>
            <p className="text-sm text-muted-foreground">
              Receba um email de confirmação
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
