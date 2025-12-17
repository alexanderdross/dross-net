import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Code, CheckCircle2, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Schema.org & Structured Data Implementation | Dross:Media",
  description:
    "Professionelle Schema.org und Structured Data Implementation für bessere Sichtbarkeit in Suchmaschinen. Rich Snippets, Knowledge Graph Optimierung und semantische Auszeichnung.",
  openGraph: {
    title: "Schema.org & Structured Data Implementation | Dross:Media",
    description:
      "Professionelle Schema.org und Structured Data Implementation für bessere Sichtbarkeit in Suchmaschinen.",
  },
}

export default function SchemaImplementationPage() {
  const benefits = [
    "Rich Snippets in Suchergebnissen",
    "Höhere Click-Through-Rate (CTR)",
    "Bessere Darstellung im Knowledge Graph",
    "Verbesserte Sprachsuche-Optimierung",
    "Erhöhte Relevanz für semantische Suche",
    "Strukturierte Produktinformationen",
  ]

  const schemaTypes = [
    { name: "Organization", description: "Unternehmens- und Markendaten" },
    { name: "Product", description: "Produktinformationen mit Bewertungen" },
    { name: "Article", description: "Blog-Artikel und News-Inhalte" },
    { name: "LocalBusiness", description: "Lokale Geschäftsinformationen" },
    { name: "FAQ", description: "Häufig gestellte Fragen" },
    { name: "HowTo", description: "Schritt-für-Schritt-Anleitungen" },
    { name: "Event", description: "Veranstaltungen und Termine" },
    { name: "Recipe", description: "Rezepte und Kochanleitungen" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
            <Code className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Schema.org & Structured Data</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Professionelle Implementation von strukturierten Daten für maximale Sichtbarkeit in Suchmaschinen. Rich
            Snippets, Knowledge Graph Optimierung und semantische Auszeichnung für Ihre Website.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Ihre Vorteile</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-start gap-3 bg-card p-4 rounded-lg border">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Schema Types */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Unterstützte Schema-Typen</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {schemaTypes.map((schema) => (
              <div key={schema.name} className="bg-card p-6 rounded-lg border hover:border-primary transition-colors">
                <h3 className="font-semibold mb-2">{schema.name}</h3>
                <p className="text-sm text-muted-foreground">{schema.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Implementation Process */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Unser Implementierungs-Prozess</h2>
          <div className="space-y-6">
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="font-semibold mb-2">1. Analyse & Strategie</h3>
              <p className="text-sm text-muted-foreground">
                Wir analysieren Ihre Website und bestimmen die relevantesten Schema-Typen für Ihre Inhalte und
                Geschäftsziele.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="font-semibold mb-2">2. Schema-Design</h3>
              <p className="text-sm text-muted-foreground">
                Entwicklung einer umfassenden Schema-Struktur mit allen relevanten Entitäten und Beziehungen für
                optimale Darstellung.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="font-semibold mb-2">3. Technische Implementation</h3>
              <p className="text-sm text-muted-foreground">
                Professionelle Implementierung der strukturierten Daten in JSON-LD Format mit Best Practices und
                Schema.org Guidelines.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="font-semibold mb-2">4. Validierung & Testing</h3>
              <p className="text-sm text-muted-foreground">
                Gründliche Überprüfung mit Google Rich Results Test und Schema Markup Validator für fehlerfreie
                Implementierung.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="font-semibold mb-2">5. Monitoring & Optimierung</h3>
              <p className="text-sm text-muted-foreground">
                Kontinuierliche Überwachung der Rich Snippets Performance in der Google Search Console und fortlaufende
                Optimierung.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-muted/50 rounded-lg p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Bereit für Rich Snippets?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Lassen Sie uns Ihre strukturierten Daten implementieren und Ihre Sichtbarkeit in Suchmaschinen maximieren.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/contact/" title="Kontaktieren Sie uns für Schema.org Implementation">
                Jetzt anfragen
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/media/" title="Zurück zu allen Dross:Media Dienstleistungen">
                Alle Dienstleistungen
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
