import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileSearch, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI Content Strategy - Dross:Media",
  description:
    "Entwicklung einer Content-Strategie, die sowohl für Menschen als auch für KI-Systeme optimiert ist. Maximale Reichweite in allen Kanälen.",
  keywords: ["AI Content Strategy", "Content Planning", "AI Optimization", "Content Marketing", "Dual Optimization"],
}

export default function AIContentStrategyPage() {
  const benefits = [
    "Content für Menschen UND AI-Systeme",
    "Multi-Channel Content Distribution",
    "AI-optimierte Content-Formate",
    "Strukturierte Content-Architekturen",
    "Conversational Content Design",
    "Content Repurposing Strategien",
    "Performance Tracking über alle Kanäle",
    "Kontinuierliche Optimierung basierend auf AI-Trends",
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-muted/30">
        <div className="container mx-auto px-4 py-12 max-w-7xl">
          {/* Hero Section */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-primary/10 p-4 rounded-2xl">
                <FileSearch className="h-12 w-12 text-primary" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-2">AI Content Strategy</h1>
                <p className="text-xl text-muted-foreground">Content für Menschen und Maschinen</p>
              </div>
            </div>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Eine erfolgreiche Content-Strategie muss heute zwei Zielgruppen ansprechen: menschliche Leser UND AI-
              Systeme, die Ihren Content finden, verstehen und empfehlen müssen. Wir entwickeln Content-Strategien, die
              in beiden Welten erfolgreich sind.
            </p>
          </div>

          {/* Benefits Section */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">Ihre Vorteile</CardTitle>
              <CardDescription>Maximale Reichweite durch Dual Optimization</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Dual Optimization */}
          <Card className="mb-12 bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl">Dual Optimization: Menschen & AI</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Moderne Content-Strategien müssen zwei unterschiedliche "Leser" ansprechen:</p>
              <div className="grid md:grid-cols-2 gap-6 mt-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Für Menschen:</h3>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Engaging und leicht verständlich</li>
                    <li>Visuell ansprechend formatiert</li>
                    <li>Storytelling und Emotion</li>
                    <li>Scanbarkeit und Struktur</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Für AI-Systeme:</h3>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Strukturierte Daten und Schema Markup</li>
                    <li>Klare semantische Struktur</li>
                    <li>Entity-Beziehungen und Context</li>
                    <li>Maschinell parsbare Formate</li>
                  </ul>
                </div>
              </div>
              <p className="font-semibold mt-4">
                Wir entwickeln Content, der in traditioneller Suche rankt, von AI-Systemen zitiert wird, und menschliche
                Leser begeistert.
              </p>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Entwickeln Sie Ihre AI Content Strategy</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Erreichen Sie maximale Sichtbarkeit in traditioneller Suche und AI-Plattformen.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/contact/" title="Jetzt AI Content Strategy Beratung anfragen">
                  Jetzt Beratung anfragen
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/media/#ki-geo/" title="Zurück zu KI & GEO Services">
                  Alle KI & GEO Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
