import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileSearch, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "SEO Audit - Analyse & Potenziale | Dross:Media",
  description:
    "Wie stehen Sie gegenüber Ihrer Mitbewerber? Eine SEO Analyse ist die Grundlage jeder Webseiten Optimierung und zeigt Potenziale auf.",
  keywords: ["SEO Audit", "Website Analyse", "SEO Check", "Wettbewerbsanalyse", "Technical SEO Audit"],
}

export default function SEOAuditPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="w-full py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="flex flex-col items-center text-center space-y-6 max-w-4xl mx-auto">
              <Badge variant="outline" className="bg-primary/10">
                <FileSearch className="w-4 h-4 mr-2" />
                SEO Audit
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-balance">
                Professionelles SEO Audit
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl text-balance">
                Wie stehen Sie gegenüber Ihrer Mitbewerber? Eine SEO Analyse ist die Grundlage jeder Webseiten
                Optimierung und zeigt Potenziale auf.
              </p>
              <Button asChild size="lg">
                <Link href="/contact/">Audit anfragen</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <h2 className="text-3xl font-bold mb-8 text-center">Was beinhaltet ein SEO Audit?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    Technische Analyse
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Crawlability & Indexierbarkeit</li>
                    <li>• Page Speed & Core Web Vitals</li>
                    <li>• Mobile Usability</li>
                    <li>• Strukturierte Daten</li>
                    <li>• SSL & Sicherheit</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    OnPage Optimierung
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Meta-Tags & Title Optimierung</li>
                    <li>• Content Qualität</li>
                    <li>• Keyword-Verwendung</li>
                    <li>• Interne Verlinkung</li>
                    <li>• Bilder & Medien</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    OffPage Faktoren
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Backlink-Profil Analyse</li>
                    <li>• Domain Authority</li>
                    <li>• Social Signals</li>
                    <li>• Brand Mentions</li>
                    <li>• Konkurrenanalyse</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    Handlungsempfehlungen
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Priorisierte To-Do Liste</li>
                    <li>• Quick Wins</li>
                    <li>• Langfristige Strategie</li>
                    <li>• ROI-Potenziale</li>
                    <li>• Roadmap</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl text-center">
            <h2 className="text-3xl font-bold mb-4">Bereit für Ihr SEO Audit?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Erhalten Sie eine detaillierte Analyse Ihrer Website und konkrete Handlungsempfehlungen.
            </p>
            <Button asChild size="lg">
              <Link href="/contact/">Jetzt Audit anfragen</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
