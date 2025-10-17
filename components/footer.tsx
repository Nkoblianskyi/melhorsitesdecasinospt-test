import Link from "next/link"

export function Footer() {
  return (
    <footer className="relative border-t-2 border-border bg-card">
      <div className="max-w-7xl mx-auto px-4 py-6 md:py-8">
        <div className="text-center space-y-3 md:space-y-4 mb-6 md:mb-8 pb-6 md:pb-8 border-b-2 border-border">
          <div className="space-y-2">
            <h2 className="text-sm md:text-5xl font-black font-serif text-balance leading-tight uppercase tracking-wide">
              melhorsitesdecasinospt
            </h2>
            
          </div>
          <p className="text-sm md:text-base text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
            O seu jornal digital de referência para análises independentes de casinos online licenciados em Portugal.
            Informação imparcial, rankings atualizados e compromisso com o jogo responsável.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 pb-6 md:pb-8 border-b-2 border-border">
          {/* Navigation */}
          <div className="border-2 border-border p-4 bg-background">
            <h4 className="font-bold mb-3 uppercase tracking-wide text-sm border-b-2 border-border pb-2">Navegação</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#rankings" className="hover:text-primary transition-colors font-medium">
                  Rankings
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-primary transition-colors font-medium">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-primary transition-colors font-medium">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="border-2 border-border p-4 bg-background">
            <h4 className="font-bold mb-3 uppercase tracking-wide text-sm border-b-2 border-border pb-2">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/politica-privacidade" className="hover:text-primary transition-colors font-medium">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="/politica-cookies" className="hover:text-primary transition-colors font-medium">
                  Política de Cookies
                </Link>
              </li>
            </ul>
          </div>

          {/* Responsible Gaming */}
          <div className="border-2 border-border p-4 bg-background">
            <h4 className="font-bold mb-3 uppercase tracking-wide text-sm border-b-2 border-border pb-2">
              Jogo Responsável
            </h4>
            <div className="text-sm space-y-2">
              <p className="font-bold">Jogue com responsabilidade. +18 anos.</p>
              <p>O jogo pode causar dependência.</p>
            </div>
          </div>
        </div>

        {/* Regulatory logos */}
        <div className="py-6 md:py-8 border-b-2 border-border">
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
            <Link
              href="https://www.gambleaware.org"
              target="_blank"
              className="bg-white hover:bg-muted border-2 border-border rounded-lg p-3 flex items-center justify-center transition-colors"
            >
              <img
                src="/gamble.webp"
                alt="GambleAware"
                className="h-8 md:h-10 w-auto object-contain"
              />
            </Link>
            <Link
              href="https://www.srij.turismodeportugal.pt"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity border-2 border-border p-2 bg-background"
            >
              <img src="/srij.svg" alt="SRIJ" className="h-8 w-auto object-contain" />
            </Link>
            <Link
              href="https://www.sicad.pt"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity border-2 border-border p-2 bg-background"
            >
              <img src="/icad.png" alt="ICAD" className="h-10 w-auto object-contain" />
            </Link>
            <Link
              href="https://www.jogoresponsavel.pt"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity border-2 border-border p-2 bg-background"
            >
              <img src="/jogo2.png" alt="Jogo Responsável" className="h-8 w-auto object-contain" />
            </Link>
            <Link
              href="https://www.gamcare.org.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:opacity-80 transition-opacity border-2 border-border p-2"
            >
              <img src="/gamecare.svg" alt="GamCare" className="h-10 w-auto object-contain" />
            </Link>
          </div>
        </div>

        {/* Bottom section */}
        <div className="pt-6 text-center text-xs md:text-sm text-muted-foreground space-y-2">
          <p>
            Este site contém links de afiliados. Podemos receber comissões quando clica nestes links. Isto não afeta as
            nossas análises ou rankings.
          </p>
          <p className="font-bold text-foreground">© 2025 melhorsitesdecasinospt.com - Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  )
}
