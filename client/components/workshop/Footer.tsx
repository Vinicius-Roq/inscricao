import { Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">W</span>
              </div>
              <span className="font-bold">Workshop Tech</span>
            </div>
            <p className="text-sm opacity-75">
              Desenvolvendo o futuro através da educação em tecnologia.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Links Rápidos</h4>
            <ul className="space-y-2 text-sm opacity-75">
              <li>
                <a href="#home" className="hover:opacity-100 transition-opacity">
                  Início
                </a>
              </li>
              <li>
                <a href="#about" className="hover:opacity-100 transition-opacity">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#program" className="hover:opacity-100 transition-opacity">
                  Programação
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Mais Informações</h4>
            <ul className="space-y-2 text-sm opacity-75">
              <li>
                <a href="#register" className="hover:opacity-100 transition-opacity">
                  Inscrição
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:opacity-100 transition-opacity">
                  Contato
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Contato</h4>
            <p className="text-sm opacity-75 mb-2">contato@workshop.com</p>
            <p className="text-sm opacity-75">(11) 99999-9999</p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-sm opacity-75">
          <p className="flex items-center justify-center gap-1">
            Feito com <Heart size={16} className="text-accent" /> © {currentYear} Workshop de Tecnologia. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
