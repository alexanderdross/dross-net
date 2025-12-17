import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { RotateCcw, AlertTriangle, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Website Relaunch Begleitung | Dross:Media",
  description:
    "Neue Domain, frisches Design, neues CMS? Wir helfen Ihren Suchmaschinen Bots nicht zu verwirren und Rankingverlust nach einem Relaunch zu vermeiden.",
  keywords: ["Website Relaunch", "Relaunch SEO", "Migration", "Domain Umzug", "CMS Wechsel"],
}

export default function WebsiteRelaunchPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="w-full py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="flex flex-col items-center text-center space-y-6 max-w-4xl mx-auto">
              <Badge variant="outline" className="bg-primary/10">
                <RotateCcw className="w-4 h-4 mr-2" />
                Website Relaunch
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-balance">
                SEO-sicherer Website Relaunch
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl text-balance">
                Neue Domain, frisches Design, neues CMS? Wir helfen Ihren Suchmaschinen Bots nicht zu verwirren und
                Rankingverlust nach einem Relaunch zu vermeiden.
              </p>
              <Button asChild size="lg">
                <Link href="/contact/">Relaunch planen</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Risiken eines Relaunch</h2>
                <Card className="border-orange-200 bg-orange-50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-orange-800">
                      <AlertTriangle className="h-5 w-5" />
                      Häufige Fehler
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    <div className="flex gap-2">
                      <span className="text-orange-600">•</span>
                      <span>Fehlende oder falsche 301-Weiterleitungen</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-orange-600">•</span>
                      <span>Verlust von Rankings und Traffic</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-orange-600">•</span>
                      <span>Indexierungsprobleme nach dem Relaunch</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-orange-600">•</span>
                      <span>Duplicate Content durch alte und neue URLs</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">Unsere Relaunch-Begleitung</h2>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Pre-Relaunch Analyse</h3>
                      <p className="text-sm text-muted-foreground">
                        Erfassung aller relevanten URLs und Rankings vor dem Relaunch
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Redirect-Mapping</h3>
                      <p className="text-sm text-muted-foreground">
                        Detaillierte Planung aller 301-Weiterleitungen für nahtlosen Übergang
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Post-Relaunch Monitoring</h3>
                      <p className="text-sm text-muted-foreground">
                        Überwachung von Rankings, Traffic und Indexierung nach dem Launch
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Schnelle Fehlerbehebung</h3>
                      <p className="text-sm text-muted-foreground">Sofortige Reaktion bei auftretenden Problemen</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl text-center">
            <h2 className="text-3xl font-bold mb-4">Planen Sie einen Relaunch?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Lassen Sie uns gemeinsam sicherstellen, dass Ihr Relaunch ein Erfolg wird.
            </p>
            <Button asChild size="lg">
              <Link href="/contact/">Jetzt Kontakt aufnehmen</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
