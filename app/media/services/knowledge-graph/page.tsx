import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Lightbulb, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Knowledge Graph Optimization - Dross:Media",
  description:
    "Aufbau und Optimierung Ihrer Präsenz im Google Knowledge Graph und anderen Wissensdatenbanken für maximale Autorität.",
  keywords: ["Knowledge Graph", "Entity SEO", "Brand Authority", "Google Knowledge Panel", "Wikidata"],
}

export default function KnowledgeGraphPage() {
  const benefits = [
    "Knowledge Panel in Google-Suche",
    "Verbesserung der Brand Entity Recognition",
    "Wikipedia und Wikidata Präsenz",
    "Structured Data Implementation",
    "Disambiguierung von Brand Entities",
    "Relationship Mapping zu relevanten Entitäten",
    "Authority Signals für AI-Systeme",
    "Persistente Markenpräsenz in Search",
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
                <Lightbulb className="h-12 w-12 text-primary" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-2">Knowledge Graph Optimization</h1>
                <p className="text-xl text-muted-foreground">Werden Sie eine anerkannte Entität im Web</p>
              </div>
            </div>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Der Google Knowledge Graph ist Googles Datenbank über Entitäten – Personen, Orte, Marken und Konzepte.
              Eine starke Präsenz im Knowledge Graph bedeutet höhere Autorität, bessere Rankings und Sichtbarkeit in
              Knowledge Panels.
            </p>
          </div>

          {/* Benefits Section */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">Ihre Vorteile</CardTitle>
              <CardDescription>Etablierung als anerkannte Autorität im semantischen Web</CardDescription>
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

          {/* What is Knowledge Graph */}
          <Card className="mb-12 bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl">Was ist der Google Knowledge Graph?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Der Knowledge Graph ist Googles Wissensdatenbank, die Milliarden von Fakten über reale Entitäten und
                deren Beziehungen zueinander speichert. Eine starke Präsenz bedeutet:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Knowledge Panel rechts in den Suchergebnissen</li>
                <li>Höhere Klickraten durch visuelle Hervorhebung</li>
                <li>Bessere Sprachsuche-Ergebnisse</li>
                <li>Autorität in AI-generierten Antworten</li>
                <li>Verbesserte mobile Sichtbarkeit</li>
              </ul>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Etablieren Sie Ihre Brand Entity</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Sichern Sie Ihre Präsenz im Google Knowledge Graph und werden Sie zur anerkannten Autorität in Ihrer
              Branche.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/contact/" title="Jetzt Knowledge Graph Optimization anfragen">
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
