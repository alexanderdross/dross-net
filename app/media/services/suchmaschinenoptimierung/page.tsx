import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, TrendingUp, Users, Award } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Suchmaschinenoptimierung (SEO) - Dross:Media",
  description:
    "Professionelle Suchmaschinenoptimierung für bessere Rankings und mehr organischen Traffic. Maßnahmen zur Erhöhung der Sichtbarkeit Ihrer Webseite.",
}

export default function SuchmaschinenoptimierungPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="w-full py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <Badge className="mb-4">SEO Service</Badge>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-6">Suchmaschinenoptimierung</h1>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Maßnahmen, mit dem Ziel, die Sichtbarkeit Ihrer Webseite in der organischen (kostenlosen) Suche durch
                  bessere Rankings zu erhöhen. Als erfahrener SEO-Experte und Google Partner helfe ich Ihnen, mehr
                  qualifizierten Traffic auf Ihre Website zu bringen.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Höhere Rankings</h3>
                      <p className="text-sm text-muted-foreground">
                        Verbesserte Platzierungen in den Suchergebnissen für relevante Keywords
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <TrendingUp className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Mehr organischer Traffic</h3>
                      <p className="text-sm text-muted-foreground">
                        Nachhaltige Steigerung der Besucherzahlen ohne bezahlte Werbung
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Qualifizierte Leads</h3>
                      <p className="text-sm text-muted-foreground">
                        Gezielte Ansprache Ihrer Zielgruppe durch relevante Inhalte
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Award className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Langfristiger Erfolg</h3>
                      <p className="text-sm text-muted-foreground">
                        Nachhaltige Optimierung für dauerhaften Wettbewerbsvorteil
                      </p>
                    </div>
                  </div>
                </div>

                <Button asChild size="lg">
                  <Link href="/contact/">Jetzt SEO-Beratung anfragen</Link>
                </Button>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-lg mb-4">Unsere SEO-Leistungen</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                        Keyword-Recherche und Wettbewerbsanalyse
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                        OnPage-Optimierung (Content, Meta-Tags, Struktur)
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                        Technisches SEO (Core Web Vitals, Crawling, Indexierung)
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                        Content-Strategie und Erstellung
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                        Linkbuilding und OffPage-Optimierung
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                        Monitoring und Reporting
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-primary text-primary-foreground">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-lg mb-2">15+ Jahre Erfahrung</h3>
                    <p className="text-sm text-primary-foreground/90">
                      Als Google Partner zertifizierter Experte mit über 15 Jahren Erfahrung habe ich mehr als 2.000
                      Websites in 60+ Märkten weltweit betreut.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
