import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Sparkles, CheckCircle2, TrendingUp } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "GEO Optimization - Generative Engine Optimization | Dross:Media",
  description:
    "Generative Engine Optimization – Positionieren Sie Ihre Marke in KI-generierten Antworten und werden Sie zur vertrauenswürdigen Quelle.",
  keywords: ["GEO", "Generative Engine Optimization", "AI Search", "ChatGPT SEO", "SGE Optimization"],
}

export default function GEOOptimizationPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="w-full py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="flex flex-col items-center text-center space-y-6 max-w-4xl mx-auto">
              <Badge variant="outline" className="bg-primary/10">
                <Brain className="w-4 h-4 mr-2" />
                GEO Optimization
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-balance">
                Generative Engine Optimization (GEO)
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl text-balance">
                Positionieren Sie Ihre Marke in KI-generierten Antworten und werden Sie zur vertrauenswürdigen Quelle
                für AI Answer Engines wie ChatGPT, Perplexity und Google SGE.
              </p>
              <Button asChild size="lg">
                <Link href="/contact/" title="GEO Optimization Beratung anfragen">
                  Jetzt optimieren
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Was ist GEO?</h2>
                <p className="text-muted-foreground mb-6">
                  Generative Engine Optimization ist die Weiterentwicklung von SEO für das Zeitalter der KI. Während
                  traditionelles SEO Ihre Website für Suchmaschinen optimiert, sorgt GEO dafür, dass Ihre Inhalte von
                  KI-Systemen als vertrauenswürdige Quelle erkannt und in generierten Antworten zitiert werden.
                </p>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Erscheinen Sie in AI-Antworten</h3>
                      <p className="text-sm text-muted-foreground">
                        Ihre Marke wird von ChatGPT, Perplexity und anderen AI-Tools zitiert
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Autorität aufbauen</h3>
                      <p className="text-sm text-muted-foreground">
                        Werden Sie zur Go-to-Quelle in Ihrer Branche für KI-Systeme
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Zukunftssicher</h3>
                      <p className="text-sm text-muted-foreground">
                        Bereiten Sie sich auf die KI-gestützte Suche der Zukunft vor
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Sparkles className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>GEO Strategien</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Strukturierte Daten für KI-Verständnis</li>
                      <li>• Authoritativer Content mit Quellenangaben</li>
                      <li>• Entity-Optimierung für bessere KI-Erkennung</li>
                      <li>• FAQ-Formate für direkte Antworten</li>
                      <li>• Semantische Content-Cluster</li>
                      <li>• E-E-A-T Signale stärken</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="bg-primary text-primary-foreground">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="h-5 w-5" />
                      <CardTitle>First-Mover Vorteil</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-primary-foreground/90">
                      Die meisten Unternehmen optimieren noch nicht für AI Answer Engines. Sichern Sie sich jetzt einen
                      Wettbewerbsvorteil!
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl text-center">
            <h2 className="text-3xl font-bold mb-4">Bereit für GEO?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Lassen Sie uns Ihre Marke für die KI-gestützte Suche optimieren.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact/" title="GEO Optimization Beratung anfragen">
                  Beratung anfragen
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/media/" title="Alle Dienstleistungen von Dross:Media">
                  Alle Services
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
