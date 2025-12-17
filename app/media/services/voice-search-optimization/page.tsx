import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Sparkles, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Voice Search & AI Assistant SEO - Dross:Media",
  description:
    "Optimierung für Sprachsuche und Smart Assistants wie Alexa, Siri und Google Assistant. Conversational SEO für natürliche Sprachanfragen.",
  keywords: ["Voice Search", "AI Assistant SEO", "Alexa SEO", "Siri Optimization", "Google Assistant", "Voice SEO"],
}

export default function VoiceSearchOptimizationPage() {
  const benefits = [
    "Optimierung für natürliche Sprachanfragen",
    "Featured Snippets für Voice Answers",
    "FAQ Schema für Voice Assistants",
    "Local SEO für 'near me' Voice Searches",
    "Conversational Long-Tail Keywords",
    "Question-Based Content Optimization",
    "Mobile-First Voice Search Readiness",
    "Integration mit Smart Home Devices",
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
                <Sparkles className="h-12 w-12 text-primary" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-2">Voice Search & AI Assistant SEO</h1>
                <p className="text-xl text-muted-foreground">Die Zukunft der Suche ist sprachbasiert</p>
              </div>
            </div>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Über 50% der Suchanfragen werden bald über Sprachassistenten erfolgen. Alexa, Siri, Google Assistant und
              andere AI-Assistenten verändern die Art, wie Menschen nach Informationen suchen. Wir optimieren Ihre
              Inhalte für diese konversationelle, sprachbasierte Zukunft.
            </p>
          </div>

          {/* Benefits Section */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">Ihre Vorteile</CardTitle>
              <CardDescription>Maximale Präsenz in Voice Search und AI Assistants</CardDescription>
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

          {/* Voice vs Text Search */}
          <Card className="mb-12 bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl">Voice Search vs. Text Search</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Sprachsuchen unterscheiden sich fundamental von getippten Suchanfragen:</p>
              <div className="grid md:grid-cols-2 gap-6 mt-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Text Search:</h3>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>"Restaurant München"</li>
                    <li>"Beste Pizzeria"</li>
                    <li>Kurz und keyword-fokussiert</li>
                    <li>Multiple Ergebnisse werden gescannt</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Voice Search:</h3>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>"Wo ist das beste italienische Restaurant in meiner Nähe?"</li>
                    <li>"Welche Pizzeria hat jetzt geöffnet?"</li>
                    <li>Lang, natürlich, fragebasiert</li>
                    <li>Meist nur EINE Antwort wird vorgelesen</li>
                  </ul>
                </div>
              </div>
              <p className="font-semibold mt-4">
                Voice Search bedeutet: Position Zero oder gar nicht sichtbar. Wir optimieren für die Spitzenposition.
              </p>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Bereiten Sie sich auf Voice Search vor</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Sichern Sie Ihre Sichtbarkeit in der sprachbasierten Zukunft der Suche.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/contact/" title="Jetzt Voice Search Optimization anfragen">
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
