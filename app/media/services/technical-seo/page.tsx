import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Code2, Gauge, Shield } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Technisches / OnPage SEO - Dross:Media",
  description:
    "Optimierung des Website Quellcodes nach Google-Richtlinien für Webmaster. Verbesserte Crawlbarkeit und Indexierung durch technisches SEO.",
}

export default function TechnicalSEOPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="w-full py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <Badge className="mb-4">Technisches SEO</Badge>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-6">Technisches / OnPage SEO</h1>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Optimierung des Website Quellcodes nach den Google-Richtlinien für Webmaster, sodass Suchmaschinen
                  Inhalte besser verstehen. Technisches SEO ist die Grundlage für alle weiteren Optimierungsmaßnahmen.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <Code2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Sauberer Code</h3>
                      <p className="text-sm text-muted-foreground">
                        Optimierung der HTML-Struktur, Schema Markup und semantische Auszeichnung
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Gauge className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Core Web Vitals</h3>
                      <p className="text-sm text-muted-foreground">
                        Verbesserung der Ladegeschwindigkeit und User Experience Metriken
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Crawling & Indexierung</h3>
                      <p className="text-sm text-muted-foreground">
                        Optimale Konfiguration für Suchmaschinen-Bots und sichere Indexierung
                      </p>
                    </div>
                  </div>
                </div>

                <Button asChild size="lg">
                  <Link href="/contact/">Technisches SEO Audit anfragen</Link>
                </Button>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-lg mb-4">Technische Optimierungen</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                        Mobile Optimierung und Responsive Design
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                        Pagespeed Optimierung und Core Web Vitals
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                        Strukturierte Daten (Schema.org Markup)
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                        XML Sitemap und Robots.txt Optimierung
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                        Canonical Tags und URL-Struktur
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                        HTTPS-Migration und Sicherheit
                      </li>
                    </ul>
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
