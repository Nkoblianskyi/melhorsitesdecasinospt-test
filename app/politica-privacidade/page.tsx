import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="max-w-5xl mx-auto px-4 py-8 md:py-12">
        <Link
          href="/"
          className="inline-flex items-center text-foreground hover:text-primary mb-6 transition-colors border-2 border-border px-4 py-2 font-serif"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Voltar ao início
        </Link>

        <div className="border-2 border-border bg-card p-3 md:p-4 mb-8">
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-center uppercase tracking-tight">
            Política de Privacidade
          </h1>
          <div className="text-center mt-4 text-sm text-muted-foreground font-sans">
            <p>melhorsitesdecasinospt.com</p>
            <p>
              Última atualização:{" "}
              {new Date().toLocaleDateString("pt-PT", { year: "numeric", month: "long", day: "numeric" })}
            </p>
          </div>
        </div>

        <div className="border-2 border-border bg-card">
          <div className="p-3 md:p-4 space-y-8">
            <section className="border-b-2 border-border pb-6">
              <h2 className="text-2xl md:text-3xl font-bold font-serif mb-4 uppercase">1. Introdução</h2>
              <p className="text-foreground leading-relaxed mb-3 first-letter:text-5xl first-letter:font-bold first-letter:mr-1 first-letter:float-left first-letter:font-serif">
                O melhorsitesdecasinospt.com está comprometido em proteger a sua privacidade e os seus dados pessoais.
                Esta Política de Privacidade explica como recolhemos, utilizamos, divulgamos e protegemos as suas
                informações quando visita o nosso website e utiliza os nossos serviços.
              </p>
              <p className="text-foreground leading-relaxed">
                Ao utilizar o nosso website, você concorda com a recolha e utilização de informações de acordo com esta
                política. Se não concordar com os termos desta política, por favor não utilize o nosso website.
              </p>
            </section>

            <section className="border-b-2 border-border pb-6">
              <h2 className="text-2xl md:text-3xl font-bold font-serif mb-4 uppercase">
                2. Informações que Recolhemos
              </h2>

              <div className="mb-6">
                <h3 className="text-xl font-bold font-serif mb-3 text-primary">
                  2.1 Informações Fornecidas Diretamente
                </h3>
                <p className="text-foreground leading-relaxed mb-2">
                  Podemos recolher informações que você nos fornece diretamente quando:
                </p>
                <ul className="text-foreground list-disc pl-6 space-y-1 leading-relaxed">
                  <li>Se regista para receber a nossa newsletter</li>
                  <li>Preenche formulários de contacto</li>
                  <li>Participa em inquéritos ou promoções</li>
                  <li>Comunica connosco através de email ou redes sociais</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold font-serif mb-3 text-primary">
                  2.2 Informações Recolhidas Automaticamente
                </h3>
                <p className="text-foreground leading-relaxed mb-2">
                  Quando visita o nosso website, recolhemos automaticamente certas informações sobre o seu dispositivo e
                  comportamento de navegação, incluindo endereço IP, tipo de navegador, páginas visitadas e tempo gasto
                  em cada página.
                </p>
                <p className="text-foreground leading-relaxed mt-3">
                  Estas informações são recolhidas através de cookies e tecnologias semelhantes. Para mais informações,
                  consulte a nossa{" "}
                  <Link href="/politica-cookies" className="text-primary hover:underline font-semibold">
                    Política de Cookies
                  </Link>
                  .
                </p>
              </div>
            </section>

            <section className="border-b-2 border-border pb-6">
              <h2 className="text-2xl md:text-3xl font-bold font-serif mb-4 uppercase">
                3. Como Utilizamos as Suas Informações
              </h2>
              <p className="text-foreground leading-relaxed mb-4">
                Utilizamos as informações recolhidas para os seguintes fins:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="border border-border p-4 bg-card">
                  <p className="font-bold mb-2">Fornecer e melhorar os nossos serviços</p>
                  <p className="text-sm text-muted-foreground">Operar, manter e melhorar o nosso website e conteúdo</p>
                </div>
                <div className="border border-border p-4 bg-card">
                  <p className="font-bold mb-2">Comunicação</p>
                  <p className="text-sm text-muted-foreground">Enviar newsletters e atualizações relevantes</p>
                </div>
                <div className="border border-border p-4 bg-card">
                  <p className="font-bold mb-2">Personalização</p>
                  <p className="text-sm text-muted-foreground">Personalizar a sua experiência no site</p>
                </div>
                <div className="border border-border p-4 bg-card">
                  <p className="font-bold mb-2">Segurança</p>
                  <p className="text-sm text-muted-foreground">Detetar e prevenir problemas técnicos</p>
                </div>
              </div>
            </section>

            <section className="border-b-2 border-border pb-6">
              <h2 className="text-2xl md:text-3xl font-bold font-serif mb-4 uppercase">4. Partilha de Informações</h2>
              <p className="text-foreground leading-relaxed mb-4 font-semibold">
                Não vendemos, alugamos ou comercializamos as suas informações pessoais a terceiros.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                No entanto, podemos partilhar as suas informações com parceiros de serviço que nos ajudam a operar o
                nosso website, parceiros de afiliados para rastrear referências (de forma anónima), ou quando exigido
                por lei.
              </p>
            </section>

            <section className="border-b-2 border-border pb-6">
              <h2 className="text-2xl md:text-3xl font-bold font-serif mb-4 uppercase">5. Segurança dos Dados</h2>
              <p className="text-foreground leading-relaxed mb-4">
                Implementamos medidas de segurança técnicas e organizacionais adequadas para proteger as suas
                informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição.
              </p>
              <div className="bg-muted border-l-4 border-border p-4">
                <p className="text-sm text-foreground italic">
                  Nenhum método de transmissão pela internet é 100% seguro. Embora nos esforcemos para proteger as suas
                  informações, não podemos garantir a sua segurança absoluta.
                </p>
              </div>
            </section>

            <section className="border-b-2 border-border pb-6">
              <h2 className="text-2xl md:text-3xl font-bold font-serif mb-4 uppercase">6. Os Seus Direitos (RGPD)</h2>
              <p className="text-foreground leading-relaxed mb-4">
                De acordo com o Regulamento Geral sobre a Proteção de Dados (RGPD), você tem os seguintes direitos:
              </p>
              <ul className="text-foreground space-y-2 leading-relaxed">
                <li className="flex items-start">
                  <span className="font-bold mr-2">•</span>
                  <span>
                    <strong>Direito de acesso:</strong> Solicitar uma cópia das suas informações pessoais
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">•</span>
                  <span>
                    <strong>Direito de retificação:</strong> Corrigir informações incorretas
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">•</span>
                  <span>
                    <strong>Direito ao apagamento:</strong> Solicitar a eliminação dos seus dados
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">•</span>
                  <span>
                    <strong>Direito de oposição:</strong> Opor-se ao processamento para marketing direto
                  </span>
                </li>
              </ul>
            </section>

            <section className="border-b-2 border-border pb-6">
              <h2 className="text-2xl md:text-3xl font-bold font-serif mb-4 uppercase">7. Jogo Responsável</h2>
              <p className="text-foreground leading-relaxed mb-4">
                O melhorsitesdecasinospt.com promove o jogo responsável e seguro. O jogo deve ser uma forma de
                entretenimento e não uma fonte de rendimento.
              </p>
              <div className="border-2 border-primary bg-primary/10 p-4">
                <p className="font-bold text-primary mb-2">Recursos de Ajuda:</p>
                <ul className="text-foreground space-y-1 text-sm">
                  <li>
                    <a
                      href="https://www.jogoresponsavel.pt"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Jogo Responsável Portugal
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.sicad.pt"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      SICAD - Serviço de Intervenção nos Comportamentos Aditivos
                    </a>
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold font-serif mb-4 uppercase">8. Contacto</h2>
              <p className="text-foreground leading-relaxed mb-4">
                Se tiver questões relacionadas com esta Política de Privacidade, pode contactar-nos através do
                formulário de contacto disponível no nosso website.
              </p>
              <p className="text-foreground leading-relaxed">Responderemos ao seu pedido no prazo de 30 dias.</p>
            </section>
          </div>

          <div className="border-t-2 border-border bg-muted p-4 text-center">
            <p className="font-serif text-lg font-bold uppercase tracking-wide">melhorsitesdecasinospt.com</p>
            <p className="text-sm text-muted-foreground mt-2">Todos os direitos reservados</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
