import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Languages, Globe, TrendingUp, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Internationales SEO - Globale Sichtbarkeit | Dross:Media",
  description:
    "Soll sich Ihre Webseite nicht nur lokal etablieren, so sind einige technische Änderungen notwendig, damit diese global ein Erfolg wird.",
  keywords: ["Internationales SEO", "Globales SEO", "Mehrsprachige Website", "International Targeting", "hreflang"],
}

export default function InternationalSEOPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="w-full py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="flex flex-col items-center text-center space-y-6 max-w-4xl mx-auto">
              <Badge variant="outline" className="bg-primary/10">
                <Languages className="w-4 h-4 mr-2" />
                Internationales SEO
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-balance">
                Internationales SEO für globale Sichtbarkeit
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl text-balance">
                Soll sich Ihre Webseite nicht nur lokal etablieren, so sind einige technische Änderungen notwendig,
                damit diese global ein Erfolg wird.
              </p>
              <Button asChild size="lg">
                <Link href="/contact/">Jetzt beraten lassen</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Warum Internationales SEO?</h2>
                <p className="text-muted-foreground mb-6">
                  Mit internationalem SEO erreichen Sie neue Märkte und Zielgruppen weltweit. Durch die richtige
                  technische Implementierung stellen Sie sicher, dass Suchmaschinen Ihre mehrsprachigen Inhalte korrekt
                  verstehen und den richtigen Nutzern anzeigen.
                </p>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">hreflang-Tags Implementierung</h3>
                      <p className="text-sm text-muted-foreground">
                        Korrekte Auszeichnung mehrsprachiger Versionen Ihrer Website
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Internationale URL-Struktur</h3>
                      <p className="text-sm text-muted-foreground">
                        Optimale Domain-Strategie (ccTLD, Subdomain oder Subfolder)
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Geo-Targeting</h3>
                      <p className="text-sm text-muted-foreground">
                        Präzise Ausrichtung auf spezifische Länder und Regionen
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Lokalisierte Inhalte</h3>
                      <p className="text-sm text-muted-foreground">
                        Nicht nur Übersetzung, sondern kulturelle Anpassung Ihrer Inhalte
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle>Unsere Leistungen</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-3 items-start">
                    <Globe className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1">Internationale Keyword-Recherche</h4>
                      <p className="text-sm text-muted-foreground">Marktspezifische Keywords für jeden Zielmarkt</p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <TrendingUp className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1">Wettbewerbsanalyse</h4>
                      <p className="text-sm text-muted-foreground">Analyse der Konkurrenz in Ihren Zielmärkten</p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <Languages className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1">Technische Implementierung</h4>
                      <p className="text-sm text-muted-foreground">
                        Setup von hreflang, Geo-Targeting und internationaler Site-Struktur
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl text-center">
            <h2 className="text-3xl font-bold mb-4">Bereit für internationale Märkte?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Lassen Sie uns gemeinsam Ihre Website für globalen Erfolg optimieren.
            </p>
            <Button asChild size="lg">
              <Link href="/contact/">Kontakt aufnehmen</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
