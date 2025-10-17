import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function CookiePolicyPage() {
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
            Política de Cookies
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
              <p className="text-foreground leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:mr-1 first-letter:float-left first-letter:font-serif">
                O melhorsitesdecasinospt.com utiliza cookies e tecnologias semelhantes para melhorar a sua experiência
                de navegação, analisar o tráfego do site e personalizar conteúdo. Esta Política de Cookies explica o que
                são cookies, como os utilizamos e como pode controlá-los.
              </p>
            </section>

            <section className="border-b-2 border-border pb-6">
              <h2 className="text-2xl md:text-3xl font-bold font-serif mb-4 uppercase">2. O que são Cookies?</h2>
              <p className="text-foreground leading-relaxed mb-4">
                Cookies são pequenos ficheiros de texto armazenados no seu dispositivo quando visita um website. Estes
                ficheiros permitem que o site reconheça o seu dispositivo e memorize informações sobre a sua visita.
              </p>
              <div className="bg-muted border-l-4 border-border p-4">
                <p className="text-sm text-foreground">
                  <strong>Tipos:</strong> Os cookies podem ser "persistentes" (permanecem até expirarem) ou "de sessão"
                  (eliminados quando fecha o navegador).
                </p>
              </div>
            </section>

            <section className="border-b-2 border-border pb-6">
              <h2 className="text-2xl md:text-3xl font-bold font-serif mb-4 uppercase">
                3. Tipos de Cookies que Utilizamos
              </h2>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="border-2 border-border p-4 bg-card">
                  <h3 className="text-lg font-bold font-serif mb-2 text-primary">Cookies Necessários</h3>
                  <p className="text-sm text-foreground leading-relaxed">
                    Essenciais para o funcionamento do website. Não podem ser desativados.
                  </p>
                  <p className="text-xs text-muted-foreground mt-2 italic">Ex: cookies de sessão, segurança</p>
                </div>

                <div className="border-2 border-border p-4 bg-card">
                  <h3 className="text-lg font-bold font-serif mb-2 text-primary">Cookies de Análise</h3>
                  <p className="text-sm text-foreground leading-relaxed">
                    Permitem medir e melhorar o desempenho do site através de dados agregados e anónimos.
                  </p>
                  <p className="text-xs text-muted-foreground mt-2 italic">Ex: Google Analytics</p>
                </div>

                <div className="border-2 border-border p-4 bg-card">
                  <h3 className="text-lg font-bold font-serif mb-2 text-primary">Cookies de Funcionalidade</h3>
                  <p className="text-sm text-foreground leading-relaxed">
                    Fornecem funcionalidades melhoradas e personalização da experiência.
                  </p>
                  <p className="text-xs text-muted-foreground mt-2 italic">Ex: preferências de idioma</p>
                </div>

                <div className="border-2 border-border p-4 bg-card">
                  <h3 className="text-lg font-bold font-serif mb-2 text-primary">Cookies de Marketing</h3>
                  <p className="text-sm text-foreground leading-relaxed">
                    Usados para mostrar anúncios relevantes baseados nos seus interesses.
                  </p>
                  <p className="text-xs text-muted-foreground mt-2 italic">Ex: cookies de afiliados</p>
                </div>
              </div>
            </section>

            <section className="border-b-2 border-border pb-6">
              <h2 className="text-2xl md:text-3xl font-bold font-serif mb-4 uppercase">4. Cookies de Terceiros</h2>
              <p className="text-foreground leading-relaxed mb-4">
                Alguns cookies são colocados por serviços de terceiros que aparecem nas nossas páginas. Não controlamos
                a definição destes cookies.
              </p>
              <p className="text-foreground leading-relaxed">
                <strong>Terceiros incluem:</strong> fornecedores de análise (Google Analytics), plataformas de
                publicidade, redes sociais e parceiros de afiliados de casinos online.
              </p>
            </section>

            <section className="border-b-2 border-border pb-6">
              <h2 className="text-2xl md:text-3xl font-bold font-serif mb-4 uppercase">5. Como Gerir Cookies</h2>
              <p className="text-foreground leading-relaxed mb-4">
                Pode controlar e eliminar cookies através das configurações do seu navegador:
              </p>

              <div className="space-y-3">
                <div className="border border-border p-3 flex items-start bg-card">
                  <span className="font-bold mr-3">→</span>
                  <div>
                    <p className="font-bold">Google Chrome</p>
                    <p className="text-sm text-muted-foreground">Definições → Privacidade e segurança → Cookies</p>
                  </div>
                </div>
                <div className="border border-border p-3 flex items-start bg-card">
                  <span className="font-bold mr-3">→</span>
                  <div>
                    <p className="font-bold">Mozilla Firefox</p>
                    <p className="text-sm text-muted-foreground">Opções → Privacidade e Segurança → Cookies</p>
                  </div>
                </div>
                <div className="border border-border p-3 flex items-start bg-card">
                  <span className="font-bold mr-3">→</span>
                  <div>
                    <p className="font-bold">Safari</p>
                    <p className="text-sm text-muted-foreground">Preferências → Privacidade → Cookies</p>
                  </div>
                </div>
                <div className="border border-border p-3 flex items-start bg-card">
                  <span className="font-bold mr-3">→</span>
                  <div>
                    <p className="font-bold">Microsoft Edge</p>
                    <p className="text-sm text-muted-foreground">Definições → Cookies e permissões do site</p>
                  </div>
                </div>
              </div>

              <div className="bg-muted border-2 border-border p-4 mt-4">
                <p className="text-sm text-foreground">
                  <strong>Nota:</strong> Se desativar cookies, algumas funcionalidades do site podem não funcionar
                  corretamente.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold font-serif mb-4 uppercase">6. Contacto</h2>
              <p className="text-foreground leading-relaxed">
                Se tiver questões sobre a nossa Política de Cookies, pode contactar-nos através do formulário de
                contacto disponível no nosso website.
              </p>
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
