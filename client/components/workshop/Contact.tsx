import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-white to-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Tem alguma dúvida?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Entre em contato conosco. Estamos aqui para ajudar!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 bg-white rounded-lg border border-border hover:shadow-md transition-shadow">
            <Mail className="text-primary mb-3" size={28} />
            <h3 className="font-semibold text-foreground mb-2">Email</h3>
            <a
              href="mailto:contato@workshop.com"
              className="text-primary hover:underline"
            >
              contato@workshop.com
            </a>
          </div>

          <div className="p-6 bg-white rounded-lg border border-border hover:shadow-md transition-shadow">
            <Phone className="text-primary mb-3" size={28} />
            <h3 className="font-semibold text-foreground mb-2">Telefone</h3>
            <a
              href="tel:+5511999999999"
              className="text-primary hover:underline"
            >
              (11) 99999-9999
            </a>
          </div>

          <div className="p-6 bg-white rounded-lg border border-border hover:shadow-md transition-shadow">
            <MapPin className="text-primary mb-3" size={28} />
            <h3 className="font-semibold text-foreground mb-2">Localização</h3>
            <p className="text-muted-foreground">
              São Paulo, SP - Brasil
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-8 border border-border mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            Siga-nos nas Redes Sociais
          </h3>
          <div className="flex justify-center gap-4">
            <a
              href="#"
              className="p-3 bg-muted rounded-lg hover:bg-primary hover:text-white transition-colors"
              title="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="#"
              className="p-3 bg-muted rounded-lg hover:bg-primary hover:text-white transition-colors"
              title="Twitter"
            >
              <Twitter size={24} />
            </a>
            <a
              href="#"
              className="p-3 bg-muted rounded-lg hover:bg-primary hover:text-white transition-colors"
              title="Instagram"
            >
              <Instagram size={24} />
            </a>
          </div>
        </div>

        <form className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-8 border border-primary/20">
          <h3 className="text-2xl font-bold text-foreground mb-6">
            Envie uma Mensagem
          </h3>
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Seu Nome"
                className="px-4 py-3 bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="email"
                placeholder="Seu Email"
                className="px-4 py-3 bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <input
              type="text"
              placeholder="Assunto"
              className="w-full px-4 py-3 bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <textarea
              placeholder="Sua mensagem..."
              rows={5}
              className="w-full px-4 py-3 bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            />
            <button
              type="submit"
              className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Enviar Mensagem
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
