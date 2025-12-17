import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Sparkles } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI Answer Engine Optimization (AEO) - Für KI-Assistenten optimieren | Dross:Media",
  description:
    "Strukturierte Daten und Content-Strategien, damit Ihre Inhalte von KI-Assistenten als vertrauenswürdige Quelle erkannt werden. Positionieren Sie sich als Autorität in der KI-gestützten Suche.",
  keywords: [
    "AI Answer Engine",
    "AEO",
    "AI Search Optimization",
    "ChatGPT SEO",
    "Perplexity Optimization",
    "Google SGE",
    "Bing Copilot",
    "KI Optimierung",
  ],
}

const benefits = [
  "Optimierung für KI-Assistenten",
  "Schema.org & JSON-LD Implementation",
  "Knowledge Graph Präsenz",
  "Featured Answer Optimierung",
  "Entity-basierte SEO-Strategie",
  "Semantische Inhaltsstrukturierung",
]

export default function AiSearchPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-center mb-6 text-balance">
              AI Answer Engine Optimization
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground text-center mb-8 text-balance">
              Strukturierte Daten und Content-Strategien, damit Ihre Inhalte von KI-Assistenten als vertrauenswürdige
              Quelle erkannt werden. Positionieren Sie sich als Autorität in der KI-gestützten Suche.
            </p>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="w-full py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8">Ihre Vorteile</h2>
            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="w-full py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8">Für die KI-Ära optimieren</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-6">
                AI Answer Engines wie Google's SGE, Bing Copilot oder Perplexity nutzen strukturierte Daten und
                Entity-Informationen, um Antworten zu generieren. Mit der richtigen Markup-Strategie erhöhen Sie Ihre
                Chancen, zitiert zu werden.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Ich implementiere umfassende Schema.org-Markups, optimiere Ihre Knowledge-Graph-Präsenz und strukturiere
                Inhalte für maximale KI-Kompatibilität.
              </p>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="w-full py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8">Verwandte Services</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/media/services/technical-seo/" title="Technisches SEO - Optimierung des Website Quellcodes">
                <Card className="hover:shadow-lg transition-shadow h-full">
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-lg mb-2">Technisches SEO</h3>
                    <p className="text-sm text-muted-foreground">
                      Optimierung des Website Quellcodes nach den Google-Richtlinien für maximale Sichtbarkeit.
                    </p>
                  </CardContent>
                </Card>
              </Link>
              <Link
                href="/media/services/seo-strategy/"
                title="SEO Consulting & Strategie - Langfristiger Erfolg für Ihre Website"
              >
                <Card className="hover:shadow-lg transition-shadow h-full">
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-lg mb-2">SEO Strategie</h3>
                    <p className="text-sm text-muted-foreground">
                      Die richtige SEO Strategie bildet das Fundament für den langfristigen Erfolg Ihrer Webseite.
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="pt-8 pb-8">
                <div className="flex flex-col items-center text-center space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-balance">
                    Bereit für die KI-gestützte Suche?
                  </h2>
                  <p className="text-lg max-w-2xl text-primary-foreground/90">
                    Lassen Sie uns gemeinsam Ihre Website für KI-Assistenten optimieren. Kontaktieren Sie mich für eine
                    umfassende AI Answer Engine Optimierung.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild size="lg" variant="secondary">
                      <Link href="/contact/" title="AI-Optimierung anfragen - Kontaktieren Sie Dross:Media">
                        AI-Optimierung starten
                      </Link>
                    </Button>
                    <Button
                      asChild
                      size="lg"
                      variant="outline"
                      className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                    >
                      <Link href="/media/ki-geo/" title="Alle KI & GEO Services von Dross:Media ansehen">
                        Alle KI-Services
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
