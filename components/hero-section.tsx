import { TrendingUp, Award } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  const currentDate = new Date()
  const formattedDate = currentDate.toLocaleDateString("pt-PT", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  return (
    <section
      className="relative border-b-2 border-border h-[200px] md:h-[270px] overflow-hidden"
      style={{
        backgroundImage: "url(/hero.jpg)",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute top-0 left-0 right-0 bottom-0 " ></div>
      <div className="w-full mx-auto px-4 pt-3 pb-2 md:pt-4 md:pb-3 h-full flex flex-col justify-start bg-black/70">
        {/* Main headline - newspaper style */}
        <div className="text-center space-y-1 md:space-y-3 mb-2 md:mb-4">
          <div className="inline-block px-2 py-0.5 bg-primary text-primary-foreground text-[9px] md:text-xs font-bold uppercase tracking-widest">
            Especial
          </div>
          <h1 className="text-xl md:text-4xl lg:text-5xl font-black font-serif text-balance leading-tight">
            Os Melhores Casinos de Portugal
          </h1>
          <p className="text-xs md:text-lg text-muted-foreground font-serif italic max-w-3xl mx-auto text-balance leading-tight">
            Ranking profissional e análises independentes dos casinos licenciados pelo SRIJ
          </p>
          <div className="flex items-center justify-center gap-2 text-[10px] md:text-sm text-muted-foreground">
            <span>Atualizado:</span>
            <time className="font-semibold text-foreground">{formattedDate}</time>
          </div>
        </div>

        <div className="flex flex-row gap-1 md:gap-3 max-w-4xl mx-auto w-full">
          <div className="border-2 border-border p-1 md:p-3 bg-card flex-1">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-0.5 md:gap-2">
              <div className="p-0.5 md:p-1.5 bg-primary/10">
                <Image src="/srij.svg" alt="SRIJ" width={20} height={20} />
              </div>
              <div className="text-center md:text-left">
                <h3 className="font-bold text-[8px] md:text-xs uppercase tracking-wide mb-0 leading-tight">
                  100% Licenciados
                </h3>
                <p className="hidden md:block text-xs text-muted-foreground leading-tight">
                  Todos os casinos certificados pelo SRIJ
                </p>
              </div>
            </div>
          </div>

          <div className="border-2 border-border p-1 md:p-3 bg-card flex-1">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-0.5 md:gap-2">
              <div className="p-0.5 md:p-1.5 bg-primary/10">
                <TrendingUp className="h-3 w-3 md:h-5 md:w-5 text-primary" />
              </div>
              <div className="text-center md:text-left">
                <h3 className="font-bold text-[8px] md:text-xs uppercase tracking-wide mb-0 leading-tight">
                  Análise Diária
                </h3>
                <p className="hidden md:block text-xs text-muted-foreground leading-tight">
                  Rankings atualizados constantemente
                </p>
              </div>
            </div>
          </div>

          <div className="border-2 border-border p-1 md:p-3 bg-card flex-1">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-0.5 md:gap-2">
              <div className="p-0.5 md:p-1.5 bg-primary/10">
                <Award className="h-3 w-3 md:h-5 md:w-5 text-primary" />
              </div>
              <div className="text-center md:text-left">
                <h3 className="font-bold text-[8px] md:text-xs uppercase tracking-wide mb-0 leading-tight">
                  Independente
                </h3>
                <p className="hidden md:block text-xs text-muted-foreground leading-tight">
                  Avaliações imparciais e transparentes
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
