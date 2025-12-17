import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Entity SEO - Dross:Media",
  description:
    "Etablierung Ihrer Marke als anerkannte Entität in Suchmaschinen. Brand Entity Optimization für bessere KI-Erkennung.",
  keywords: ["Entity SEO", "Brand Entity", "Semantic SEO", "Entity Recognition", "Brand Optimization"],
}

export default function EntitySEOPage() {
  const benefits = [
    "Brand als eindeutige Entität etablieren",
    "Disambiguierung von Marken und Produkten",
    "Entity Relationships zu relevanten Themen",
    "Schema.org Entity Markup",
    "Wikipedia und Wikidata Integration",
    "Konsistente NAP (Name, Address, Phone) Daten",
    "Entity-basierte Content-Strategien",
    "Verbesserte AI-Erkennung Ihrer Marke",
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
                <Users className="h-12 w-12 text-primary" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-2">Entity SEO</h1>
                <p className="text-xl text-muted-foreground">Von Keywords zu Entities – die neue SEO-Ära</p>
              </div>
            </div>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Suchmaschinen verstehen nicht mehr nur Keywords, sondern Entitäten – reale Personen, Orte, Marken und
              Konzepte. Entity SEO stellt sicher, dass Ihre Marke als eindeutige, vertrauenswürdige Entität erkannt und
              in relevanten Kontexten priorisiert wird.
            </p>
          </div>

          {/* Benefits Section */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">Ihre Vorteile</CardTitle>
              <CardDescription>Etablierung als anerkannte Brand Entity</CardDescription>
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

          {/* What is Entity SEO */}
          <Card className="mb-12 bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl">Was ist Entity SEO?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Entity SEO geht über traditionelles Keyword-SEO hinaus. Es geht darum, Ihre Marke als eindeutige,
                vertrauenswürdige Entität in Suchmaschinen-Datenbanken zu etablieren. Dies bedeutet:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Eindeutige Identifizierung Ihrer Marke durch AI-Systeme</li>
                <li>Zuordnung zu relevanten Themenbereichen und Industrien</li>
                <li>Aufbau von Entity-Beziehungen zu verwandten Konzepten</li>
                <li>Konsistente Brand Mentions über das gesamte Web</li>
                <li>Strukturierte Daten für maschinelles Verständnis</li>
              </ul>
              <p className="font-semibold mt-4">
                Eine starke Entity presence führt zu besseren Rankings, höherer Sichtbarkeit in AI-Antworten und
                stärkerer Brand Authority.
              </p>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Etablieren Sie Ihre Brand Entity</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Werden Sie zur anerkannten Entität in Suchmaschinen und AI-Systemen.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/contact/" title="Jetzt Entity SEO Beratung anfragen">
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
