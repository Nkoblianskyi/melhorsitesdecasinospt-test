import { MapPin, Trophy, Sparkles, TrendingUp } from "lucide-react"

export function TopSitesPortugalSection() {
  return (
    <section className="py-6 md:py-8 bg-background border-b-2 border-border">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-4 pb-2 border-b-2 border-border">
          <h2 className="text-2xl md:text-4xl font-black font-serif uppercase tracking-tight">Mercado Português</h2>
          <p className="text-[10px] md:text-xs text-muted-foreground mt-1 uppercase tracking-widest">
            Panorama do setor regulamentado em Portugal
          </p>
        </div>

        <div className="mb-6 border-l-2 border-primary pl-3">
          <p className="text-sm md:text-base leading-relaxed font-serif text-foreground">
            <span className="text-4xl md:text-5xl font-bold float-left mr-2 mt-0.5 leading-none text-primary">P</span>
            ortugal estabeleceu em 2015 um dos mercados de jogos online mais bem regulamentados da Europa. Sob a
            supervisão do SRIJ, o setor português garante elevados padrões de segurança, transparência e proteção ao
            consumidor.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-3 md:gap-4">
          <div className="border-2 border-border p-3 md:p-4 bg-card">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 md:w-10 md:h-10 border border-border flex items-center justify-center flex-shrink-0 bg-primary/10">
                <MapPin className="h-4 w-4 md:h-5 md:w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-sm md:text-base font-black uppercase mb-1.5">Regulamentação SRIJ</h3>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  Desde 2015, o mercado português opera sob supervisão do SRIJ. O modelo regulatório é reconhecido
                  internacionalmente pela sua eficácia.
                </p>
              </div>
            </div>
          </div>

          <div className="border-2 border-border p-3 md:p-4 bg-card">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 md:w-10 md:h-10 border border-border flex items-center justify-center flex-shrink-0 bg-primary/10">
                <Trophy className="h-4 w-4 md:h-5 md:w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-sm md:text-base font-black uppercase mb-1.5">Licenças Obrigatórias</h3>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  Todos os operadores devem possuir licença válida emitida pelo SRIJ. O processo inclui verificações
                  rigorosas de idoneidade.
                </p>
              </div>
            </div>
          </div>

          <div className="border-2 border-border p-3 md:p-4 bg-card">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 md:w-10 md:h-10 border border-border flex items-center justify-center flex-shrink-0 bg-primary/10">
                <Sparkles className="h-4 w-4 md:h-5 md:w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-sm md:text-base font-black uppercase mb-1.5">Ofertas Competitivas</h3>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  O mercado português oferece bónus de boas-vindas atrativos, promoções regulares e programas de
                  fidelização.
                </p>
              </div>
            </div>
          </div>

          <div className="border-2 border-border p-3 md:p-4 bg-card">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 md:w-10 md:h-10 border border-border flex items-center justify-center flex-shrink-0 bg-primary/10">
                <TrendingUp className="h-4 w-4 md:h-5 md:w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-sm md:text-base font-black uppercase mb-1.5">Pagamentos Locais</h3>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  Suporte completo para MB Way, Multibanco, transferências bancárias e cartões. Transações em euros.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
