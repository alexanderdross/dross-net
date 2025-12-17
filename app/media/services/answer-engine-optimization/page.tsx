import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Answer Engine Optimization (AEO) | Dross:Media",
  description:
    "Optimieren Sie Ihre Inhalte für direkte Antworten in Suchmaschinen und AI-Assistenten. Featured Snippets und Position Zero Strategien.",
  keywords: ["AEO", "Answer Engine Optimization", "Featured Snippets", "Position Zero", "Direct Answers"],
}

export default function AnswerEngineOptimizationPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="w-full py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="flex flex-col items-center text-center space-y-6 max-w-4xl mx-auto">
              <Badge variant="outline" className="bg-primary/10">
                <TrendingUp className="w-4 h-4 mr-2" />
                AEO
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-balance">
                Answer Engine Optimization
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl text-balance">
                Optimieren Sie Ihre Inhalte für direkte Antworten in Suchmaschinen und AI-Assistenten. Erreichen Sie
                Featured Snippets und Position Zero.
              </p>
              <Button asChild size="lg">
                <Link href="/contact/" title="AEO Beratung anfragen">
                  Jetzt optimieren
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-4">Warum AEO?</h3>
                  <p className="text-muted-foreground mb-4">
                    Nutzer erwarten schnelle, direkte Antworten. Answer Engines wie Google, Bing und AI-Assistenten
                    präsentieren Antworten prominenter als traditionelle Suchergebnisse. Position Zero bedeutet maximale
                    Sichtbarkeit.
                  </p>
                  <div className="space-y-3">
                    <div className="flex gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-sm">Höhere Klickraten durch Featured Snippets</span>
                    </div>
                    <div className="flex gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-sm">Sichtbarkeit auch ohne Klick (Brand Awareness)</span>
                    </div>
                    <div className="flex gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-sm">Optimierung für Voice Search</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-4">Unsere AEO Methoden</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Fragenbasierte Content-Struktur</li>
                    <li>• Schema Markup für FAQs und How-Tos</li>
                    <li>• Präzise, konzise Antwortformate</li>
                    <li>• Listen und Tabellen für Snippet-Optimierung</li>
                    <li>• Long-Tail Keyword Integration</li>
                    <li>• Semantische Content-Optimierung</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl text-center">
            <h2 className="text-3xl font-bold mb-4">Erreichen Sie Position Zero</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Lassen Sie uns Ihre Inhalte für Featured Snippets und direkte Antworten optimieren.
            </p>
            <Button asChild size="lg">
              <Link href="/contact/" title="AEO Strategie besprechen">
                Jetzt starten
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
