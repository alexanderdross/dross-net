import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Brain, Globe2, TrendingUp, Search, Network } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "KI & GEO Services - AI Answer Engine & Generative Engine Optimization | Dross:Media",
  description:
    "Optimierung für KI-Assistenten und die Suche von morgen. AI Answer Engine Optimization (AEO), Generative Engine Optimization (GEO) und strukturierte Daten für maximale Sichtbarkeit in der KI-gestützten Suche.",
  keywords: [
    "AI Search",
    "GEO",
    "AEO",
    "Generative Engine Optimization",
    "AI Answer Engine",
    "KI Optimierung",
    "ChatGPT SEO",
    "Perplexity Optimization",
  ],
}

const aiServices = [
  {
    icon: Sparkles,
    title: "AI Search",
    description:
      "Optimierung für KI-Assistenten wie ChatGPT, Perplexity und Google SGE. Positionieren Sie sich als Autorität in der KI-gestützten Suche.",
    href: "/media/services/ai-search/",
  },
  {
    icon: Brain,
    title: "Generative Engine Optimization",
    description:
      "Strukturierte Daten und Content-Strategien, damit Ihre Inhalte von KI-Assistenten als vertrauenswürdige Quelle erkannt werden.",
    href: "/media/services/generative-engine-optimization/",
  },
  {
    icon: Network,
    title: "Entity-basierte SEO",
    description: "Entity-Optimierung und Knowledge Graph Präsenz für maximale Autorität in Ihrem Fachgebiet.",
    href: "/media/services/entity-seo/",
  },
  {
    icon: Search,
    title: "Schema.org Implementierung",
    description: "Umfassende Schema.org-Markups für optimale Darstellung in Search Engines und KI-Systemen.",
    href: "/media/services/schema-implementation/",
  },
  {
    icon: TrendingUp,
    title: "Featured Answer Optimierung",
    description: "Strategien zur Positionierung Ihrer Inhalte in Featured Snippets und AI-generierten Antworten.",
    href: "/media/services/featured-answer-optimization/",
  },
  {
    icon: Globe2,
    title: "Semantische Inhaltsstrukturierung",
    description: "Optimierung der Content-Struktur für maximale KI-Kompatibilität und Verständlichkeit.",
    href: "/media/services/semantic-content/",
  },
]

export default function KiGeoPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="flex flex-col items-center text-center space-y-6 max-w-4xl mx-auto">
              <Badge variant="outline" className="bg-primary/10">
                <Sparkles className="w-4 h-4 mr-2 inline" />
                Die Zukunft der Suche
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-balance">
                <span className="text-primary">KI & GEO Services</span> für die Suche von morgen
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl text-balance">
                Strukturierte Daten und Content-Strategien, damit Ihre Inhalte von KI-Assistenten als vertrauenswürdige
                Quelle erkannt werden. Positionieren Sie sich als Autorität in der KI-gestützten Suche.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link href="/contact/" title="Kontaktieren Sie uns für KI & GEO Optimierung - Dross:Media">
                    Jetzt KI-Optimierung starten
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/media/" title="Alle Dienstleistungen von Dross:Media ansehen">
                    Alle Services
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* AI Services Section */}
        <section className="w-full py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                Für die KI-Ära optimieren
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                AI Answer Engines wie Google's SGE, Bing Copilot oder Perplexity nutzen strukturierte Daten und
                Entity-Informationen, um Antworten zu generieren. Mit der richtigen Markup-Strategie erhöhen Sie Ihre
                Chancen, zitiert zu werden.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {aiServices.map((service, index) => (
                <Link
                  key={index}
                  href={service.href}
                  className="block group"
                  title={`${service.title} - ${service.description.substring(0, 100)}`}
                >
                  <Card className="hover:shadow-lg transition-shadow h-full">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                        <service.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm leading-relaxed">{service.description}</CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="w-full py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Ihre Vorteile</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg mb-2">Optimierung für KI-Assistenten</h3>
                  <p className="text-sm text-muted-foreground">
                    Strukturieren Sie Ihre Inhalte so, dass KI-Assistenten sie als vertrauenswürdige Quelle erkennen und
                    in generierten Antworten verwenden.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg mb-2">Schema.org & JSON-LD Implementierung</h3>
                  <p className="text-sm text-muted-foreground">
                    Umfassende Schema.org-Markups, optimierte Knowledge-Graph-Präsenz und strukturierte Inhalte für
                    maximale KI-Kompatibilität.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg mb-2">Knowledge Graph Präsenz</h3>
                  <p className="text-sm text-muted-foreground">
                    Etablieren Sie sich als anerkannte Entität im Google Knowledge Graph für maximale Autorität in Ihrem
                    Fachgebiet.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg mb-2">Featured Answer Optimierung</h3>
                  <p className="text-sm text-muted-foreground">
                    Positionieren Sie Ihre Inhalte für Featured Snippets und AI-generierte Antworten durch gezielte
                    Content-Strukturierung.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg mb-2">Entity-basierte SEO-Strategie</h3>
                  <p className="text-sm text-muted-foreground">
                    Entwickeln Sie eine umfassende Entity-SEO-Strategie für langfristige Sichtbarkeit in der
                    KI-gestützten Suche.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg mb-2">Semantische Inhaltsstrukturierung</h3>
                  <p className="text-sm text-muted-foreground">
                    Optimieren Sie Ihre Content-Struktur für maximale Verständlichkeit und Verarbeitung durch
                    KI-Systeme.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="pt-8 pb-8">
                <div className="flex flex-col items-center text-center space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-balance">
                    Für die KI-Ära optimieren
                  </h2>
                  <p className="text-lg max-w-2xl text-primary-foreground/90">
                    Ich implementiere umfassende Schema.org-Markups, optimiere Ihre Knowledge-Graph-Präsenz und
                    strukturiere Inhalte für maximale KI-Kompatibilität.
                  </p>
                  <Button asChild size="lg" variant="secondary">
                    <Link href="/contact/" title="KI-Optimierung anfragen - Dross:Media">
                      AI-Optimierung starten
                    </Link>
                  </Button>
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
