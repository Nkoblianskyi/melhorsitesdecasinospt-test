import { Star, CheckCircle, TrendingUp, Search } from "lucide-react"

export function RatingSystemSection() {
  return (
    <section className="py-6 md:py-8 bg-muted/30 border-b-2 border-border">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-4 pb-2 border-b-2 border-border">
          <h2 className="text-2xl md:text-4xl font-black font-serif uppercase tracking-tight">
            Metodologia de Avaliação
          </h2>
          <p className="text-[10px] md:text-xs text-muted-foreground mt-1 uppercase tracking-widest">
            Sistema de classificação rigoroso e transparente
          </p>
        </div>

        <div className="mb-6 border-l-2 border-primary pl-3">
          <p className="text-sm md:text-base leading-relaxed font-serif text-foreground">
            <span className="text-4xl md:text-5xl font-bold float-left mr-2 mt-0.5 leading-none text-primary">C</span>
            ada casino online submetido à nossa análise passa por um processo de avaliação em múltiplas fases. A nossa
            metodologia combina testes práticos em ambiente real, análise técnica de segurança e conformidade
            regulamentar.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
          <div className="border-2 border-border p-2 md:p-3 bg-card">
            <div className="flex flex-col items-center text-center gap-1.5">
              <div className="p-1.5 bg-primary/10">
                <Star className="h-4 w-4 md:h-5 md:w-5 text-primary" />
              </div>
              <h3 className="text-[10px] md:text-xs font-black uppercase tracking-wide">Licenciamento</h3>
              <p className="text-[9px] md:text-[10px] leading-tight text-muted-foreground">Verificação SRIJ</p>
            </div>
          </div>

          <div className="border-2 border-border p-2 md:p-3 bg-card">
            <div className="flex flex-col items-center text-center gap-1.5">
              <div className="p-1.5 bg-primary/10">
                <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-primary" />
              </div>
              <h3 className="text-[10px] md:text-xs font-black uppercase tracking-wide">Segurança</h3>
              <p className="text-[9px] md:text-[10px] leading-tight text-muted-foreground">SSL e proteção</p>
            </div>
          </div>

          <div className="border-2 border-border p-2 md:p-3 bg-card">
            <div className="flex flex-col items-center text-center gap-1.5">
              <div className="p-1.5 bg-primary/10">
                <TrendingUp className="h-4 w-4 md:h-5 md:w-5 text-primary" />
              </div>
              <h3 className="text-[10px] md:text-xs font-black uppercase tracking-wide">Bónus & RTP</h3>
              <p className="text-[9px] md:text-[10px] leading-tight text-muted-foreground">Ofertas e taxas</p>
            </div>
          </div>

          <div className="border-2 border-border p-2 md:p-3 bg-card">
            <div className="flex flex-col items-center text-center gap-1.5">
              <div className="p-1.5 bg-primary/10">
                <Search className="h-4 w-4 md:h-5 md:w-5 text-primary" />
              </div>
              <h3 className="text-[10px] md:text-xs font-black uppercase tracking-wide">Experiência</h3>
              <p className="text-[9px] md:text-[10px] leading-tight text-muted-foreground">Usabilidade</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
