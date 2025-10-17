import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HelpCircle } from "lucide-react"

const faqs = [
  {
    question: "Os casinos online são legais em Portugal?",
    answer:
      "Sim, completamente legais desde 2015. O mercado português de jogos online é regulamentado pelo SRIJ (Serviço de Regulação e Inspeção de Jogos), entidade dependente do Turismo de Portugal. Todos os operadores devem possuir licença válida para operar legalmente no território nacional.",
  },
  {
    question: "Como verificar se um casino tem licença portuguesa?",
    answer:
      "Consulte a lista oficial de operadores licenciados no site do SRIJ (www.srij.turismodeportugal.pt). Todos os casinos legais exibem o número de licença no rodapé do site. Os casinos recomendados neste ranking possuem licença SRIJ válida e verificada.",
  },
  {
    question: "Que métodos de pagamento estão disponíveis?",
    answer:
      "Os casinos portugueses suportam MB Way, Multibanco, transferências bancárias, cartões de crédito/débito (Visa, Mastercard), Neteller, Skrill e outras carteiras digitais. Todas as transações são processadas em euros. Os depósitos são geralmente instantâneos.",
  },
  {
    question: "Quanto tempo demoram os levantamentos de fundos?",
    answer:
      "Os prazos variam por método: carteiras digitais (0-24 horas), cartões de crédito/débito (1-3 dias úteis), transferências bancárias (1-5 dias úteis). Os casinos licenciados devem processar pedidos de levantamento dentro de prazos razoáveis estabelecidos pelo SRIJ.",
  },
  {
    question: "É possível jogar através de dispositivos móveis?",
    answer:
      "Sim, todos os casinos modernos oferecem versões móveis otimizadas ou aplicações dedicadas para iOS e Android. Pode aceder à totalidade dos jogos e funcionalidades através de qualquer smartphone ou tablet com ligação à internet.",
  },
  {
    question: "Como funcionam os bónus de boas-vindas?",
    answer:
      "Os bónus de boas-vindas são ofertas promocionais para novos jogadores, geralmente consistindo num matching percentual do primeiro depósito. Todos os bónus têm requisitos de apostas (rollover) que devem ser cumpridos antes de poder levantar os ganhos. Leia sempre os termos e condições.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="py-6 md:py-8 bg-muted/30 border-b-2 border-border">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-4 pb-2 border-b-2 border-border">
          <h2 className="text-2xl md:text-4xl font-black font-serif uppercase tracking-tight">Perguntas Frequentes</h2>
          <p className="text-[10px] md:text-xs text-muted-foreground mt-1 uppercase tracking-widest">
            Respostas às questões mais comuns sobre casinos online
          </p>
        </div>

        <div className="border-2 border-border bg-card p-4 md:p-5">
          <div className="flex items-center gap-2 mb-4 pb-2 border-b border-border">
            <HelpCircle className="h-5 w-5 md:h-6 md:w-6 text-primary" />
            <h3 className="text-base md:text-lg font-black uppercase">Questões Essenciais</h3>
          </div>

          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-2 border-border bg-background px-3">
                <AccordionTrigger className="text-left hover:text-primary text-xs md:text-sm font-bold uppercase py-3">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-xs md:text-sm leading-relaxed pb-3 border-t border-border pt-3">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
