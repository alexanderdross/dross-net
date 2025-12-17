import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Zap, CheckCircle2, RefreshCw } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "n8n Workflow Automation | Dross:Media",
  description:
    "Automatisierung von Marketing- und Business-Prozessen mit n8n. Verbinden Sie Ihre Tools und sparen Sie Zeit durch intelligente Workflows.",
  keywords: ["n8n", "Workflow Automation", "Marketing Automation", "Process Automation", "No-Code Automation"],
}

export default function N8nWorkflowAutomationPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="w-full py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="flex flex-col items-center text-center space-y-6 max-w-4xl mx-auto">
              <Badge variant="outline" className="bg-primary/10">
                <Code className="w-4 h-4 mr-2" />
                n8n Automation
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-balance">
                n8n Workflow Automation
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl text-balance">
                Automatisierung von Marketing- und Business-Prozessen mit n8n. Verbinden Sie Ihre Tools und sparen Sie
                Zeit durch intelligente Workflows.
              </p>
              <Button asChild size="lg">
                <Link href="/contact/">Automation starten</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <h2 className="text-3xl font-bold mb-8 text-center">Beispiel-Anwendungsfälle</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Lead Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Automatische Übertragung von Leads aus Formularen in CRM-Systeme und E-Mail-Marketing-Tools
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <RefreshCw className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Content Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Automatisches Teilen neuer Blog-Posts auf Social Media Plattformen
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Data Sync</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Synchronisation von Daten zwischen verschiedenen Business-Tools und Datenbanken
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">Vorteile von n8n</h2>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Open Source & Flexibel</h3>
                    <p className="text-sm text-muted-foreground">
                      n8n ist open source und bietet maximale Flexibilität für individuelle Anforderungen
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">400+ Integrationen</h3>
                    <p className="text-sm text-muted-foreground">
                      Verbinden Sie alle Ihre Tools - von CRM bis E-Mail-Marketing
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Zeit & Kosten sparen</h3>
                    <p className="text-sm text-muted-foreground">
                      Automatisieren Sie repetitive Aufgaben und fokussieren Sie sich auf wichtige Tätigkeiten
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl text-center">
            <h2 className="text-3xl font-bold mb-4">Bereit für Automation?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Lassen Sie uns Ihre Prozesse automatisieren und Ihre Effizienz steigern.
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
