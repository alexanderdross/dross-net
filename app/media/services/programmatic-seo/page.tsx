import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code2, Database, TrendingUp, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Programmatic SEO - Skalierbare SEO | Dross:Media",
  description:
    "Automatisierte Seitenerstellung im großen Maßstab für maximale organische Sichtbarkeit bei Produktkatalogen und lokalen Landingpages.",
  keywords: ["Programmatic SEO", "Automated SEO", "Scalable SEO", "Dynamische Landingpages", "SEO at Scale"],
}

export default function ProgrammaticSEOPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="w-full py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="flex flex-col items-center text-center space-y-6 max-w-4xl mx-auto">
              <Badge variant="outline" className="bg-primary/10">
                <Code2 className="w-4 h-4 mr-2" />
                Programmatic SEO
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-balance">
                Programmatic SEO für maximale Skalierung
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl text-balance">
                Automatisierte Seitenerstellung im großen Maßstab für maximale organische Sichtbarkeit bei
                Produktkatalogen und lokalen Landingpages.
              </p>
              <Button asChild size="lg">
                <Link href="/contact/">Projekt besprechen</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Was ist Programmatic SEO?</h2>
                <p className="text-muted-foreground mb-6">
                  Programmatic SEO ist die automatisierte Erstellung von hunderten oder tausenden SEO-optimierten Seiten
                  basierend auf Datenbanken und Templates. Perfekt für E-Commerce, Immobilien, lokale Dienstleistungen
                  und andere skalierbare Geschäftsmodelle.
                </p>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Skalierbare Content-Produktion</h3>
                      <p className="text-sm text-muted-foreground">
                        Erstellen Sie tausende unique Seiten in kurzer Zeit
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Long-Tail Keywords abdecken</h3>
                      <p className="text-sm text-muted-foreground">
                        Optimierung für spezifische Suchanfragen mit geringer Konkurrenz
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Datenbasiert & automatisiert</h3>
                      <p className="text-sm text-muted-foreground">
                        Dynamische Seiten basierend auf Ihren Produktdaten oder Services
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Database className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Anwendungsbereiche</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• E-Commerce Produktseiten</li>
                      <li>• Lokale Service-Landingpages (Stadt + Dienstleistung)</li>
                      <li>• Immobilien-Portale</li>
                      <li>• Job-Portale</li>
                      <li>• Vergleichsportale</li>
                      <li>• Branchen-Verzeichnisse</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <TrendingUp className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Erfolgsbeispiele</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Große Plattformen wie Airbnb, Zillow und TripAdvisor nutzen Programmatic SEO, um Millionen von
                      Seiten zu ranken und enormen organischen Traffic zu generieren.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl text-center">
            <h2 className="text-3xl font-bold mb-4">Bereit für SEO im großen Maßstab?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Lassen Sie uns Ihre Programmatic SEO Strategie entwickeln und umsetzen.
            </p>
            <Button asChild size="lg">
              <Link href="/contact/">Jetzt Projekt starten</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
