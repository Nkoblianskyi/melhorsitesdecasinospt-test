import { Users, Award, Shield } from "lucide-react"

export function AboutUsSection() {
  return (
    <section className="py-4 md:py-6 bg-background border-b-2 border-border">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-4 pb-2 border-b-2 border-border">
          <h2 className="text-2xl md:text-4xl font-black font-serif uppercase tracking-tight">Sobre a Redação</h2>
          <p className="text-[10px] md:text-xs text-muted-foreground mt-1 uppercase tracking-widest">
            Jornalismo independente sobre casinos online
          </p>
        </div>

        <div className="mb-6 border-l-2 border-primary pl-3">
          <p className="text-sm md:text-base leading-relaxed text-foreground font-serif">
            <span className="text-4xl md:text-5xl font-bold float-left mr-2 mt-0.5 leading-none text-primary">M</span>
            elhorsitesdecasinospt.com é a principal publicação portuguesa dedicada à análise crítica e independente de
            casinos online. Com uma equipa de jornalistas especializados e analistas certificados, mantemos os mais
            altos padrões de rigor editorial e transparência informativa.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-3 md:gap-4">
          <div className="border-2 border-border p-3 md:p-4 bg-card">
            <div className="flex items-center gap-2 mb-2 pb-2 border-b border-border">
              <Users className="h-4 w-4 md:h-5 md:w-5" />
              <h3 className="text-xs md:text-sm font-black uppercase">Equipa Editorial</h3>
            </div>
            <p className="text-xs leading-relaxed text-muted-foreground">
              Jornalistas com mais de uma década de experiência coletiva na cobertura da indústria de jogos online.
            </p>
          </div>

          <div className="border-2 border-border p-3 md:p-4 bg-card">
            <div className="flex items-center gap-2 mb-2 pb-2 border-b border-border">
              <Award className="h-4 w-4 md:h-5 md:w-5" />
              <h3 className="text-xs md:text-sm font-black uppercase">Independência</h3>
            </div>
            <p className="text-xs leading-relaxed text-muted-foreground">
              Mantemos total independência editorial. As nossas classificações baseiam-se exclusivamente em critérios
              objetivos.
            </p>
          </div>

          <div className="border-2 border-border p-3 md:p-4 bg-card">
            <div className="flex items-center gap-2 mb-2 pb-2 border-b border-border">
              <Shield className="h-4 w-4 md:h-5 md:w-5" />
              <h3 className="text-xs md:text-sm font-black uppercase">Verificação SRIJ</h3>
            </div>
            <p className="text-xs leading-relaxed text-muted-foreground">
              Apenas recomendamos operadores com licença válida emitida pelo Serviço de Regulação e Inspeção de Jogos.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
