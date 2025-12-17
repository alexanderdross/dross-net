import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Google SGE Optimization - Dross:Media",
  description:
    "Search Generative Experience Optimierung – Bereiten Sie Ihre Website auf Googles KI-gestützte Suchergebnisse vor.",
  keywords: ["Google SGE", "Search Generative Experience", "AI Search", "Google AI", "Generative Search"],
}

export default function GoogleSGEPage() {
  const benefits = [
    "Erscheinen Sie in AI-generierten Snapshots",
    "Optimierung für SGE Follow-up Questions",
    "Strukturierte Daten für SGE-Verständnis",
    "Content-Formatierung für AI-Generierung",
    "Position Zero in SGE-Antworten",
    "Multimodal Content Optimization",
    "Conversational Query Optimization",
    "Featured in Conversational Mode",
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
                <Search className="h-12 w-12 text-primary" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-2">Google SGE Optimization</h1>
                <p className="text-xl text-muted-foreground">Die Zukunft der Google-Suche ist generativ</p>
              </div>
            </div>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Google's Search Generative Experience (SGE) revolutioniert die Suchergebnisse mit KI-generierten
              Antworten. Wir bereiten Ihre Website optimal auf diese neue Ära der Suche vor und sichern Ihre
              Sichtbarkeit in AI-generierten Snapshots.
            </p>
          </div>

          {/* Benefits Section */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">Ihre Vorteile</CardTitle>
              <CardDescription>Maximale Präsenz in Google's AI-gestützter Suche</CardDescription>
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

          {/* What is SGE */}
          <Card className="mb-12 bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl">Was ist Google SGE?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Google's Search Generative Experience nutzt künstliche Intelligenz, um direkt Antworten auf Suchanfragen
                zu generieren – ähnlich wie ChatGPT, aber integriert in die Google-Suche. SGE erscheint oberhalb der
                traditionellen Suchergebnisse und bietet:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>AI-generierte Zusammenfassungen von Informationen aus mehreren Quellen</li>
                <li>Interaktive Follow-up Questions für tiefere Exploration</li>
                <li>Konversationeller Modus für mehrstufige Anfragen</li>
                <li>Quellenangaben mit Links zu relevanten Websites</li>
              </ul>
              <p className="font-semibold">
                Wer in SGE erscheint, gewinnt massiv an Sichtbarkeit und Traffic – wer nicht, verliert.
              </p>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Bereiten Sie sich auf SGE vor</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Sichern Sie Ihre Sichtbarkeit in der nächsten Generation der Google-Suche.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/contact/" title="Jetzt SGE Optimization anfragen">
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
