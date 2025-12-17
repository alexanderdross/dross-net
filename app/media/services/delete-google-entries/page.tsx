import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trash2, Shield, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Google Einträge löschen | Dross:Media",
  description:
    "Unfahre Bewertungen, falsche Daten, etc – Ich helfe Ihnen weiter, wenn Sie aus dem Suchmaschinen Index unrichtig abgegebene Kommentare löschen möchten.",
  keywords: [
    "Google Einträge löschen",
    "Negative Bewertungen entfernen",
    "Online Reputation",
    "DSGVO Löschung",
    "Recht auf Vergessenwerden",
  ],
}

export default function DeleteGoogleEntriesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="w-full py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="flex flex-col items-center text-center space-y-6 max-w-4xl mx-auto">
              <Badge variant="outline" className="bg-primary/10">
                <Trash2 className="w-4 h-4 mr-2" />
                Google Einträge Löschen
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-balance">
                Google Einträge professionell entfernen
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl text-balance">
                Unfahre Bewertungen, falsche Daten, etc – Ich helfe Ihnen weiter, wenn Sie aus dem Suchmaschinen Index
                unrichtig abgegebene Kommentare löschen möchten.
              </p>
              <Button asChild size="lg">
                <Link href="/contact/">Jetzt Hilfe anfragen</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Wann können Einträge gelöscht werden?</h2>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Falsche oder veraltete Informationen</h3>
                      <p className="text-sm text-muted-foreground">
                        Personenbezogene Daten, die nicht mehr aktuell oder falsch sind
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Rufschädigende Inhalte</h3>
                      <p className="text-sm text-muted-foreground">
                        Bewertungen oder Kommentare, die gegen Richtlinien verstoßen
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">DSGVO-Anfragen</h3>
                      <p className="text-sm text-muted-foreground">
                        Recht auf Vergessenwerden nach EU-Datenschutzgrundverordnung
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Fake-Bewertungen</h3>
                      <p className="text-sm text-muted-foreground">
                        Eindeutig gefälschte oder manipulierte Rezensionen
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-primary" />
                    Unser Vorgehen
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">1. Analyse</h4>
                    <p className="text-sm text-muted-foreground">Prüfung der rechtlichen Grundlage für eine Löschung</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">2. Antragstellung</h4>
                    <p className="text-sm text-muted-foreground">
                      Professionelle Formulierung und Einreichung des Löschantrags bei Google
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">3. Follow-up</h4>
                    <p className="text-sm text-muted-foreground">Nachverfolgung des Antrags und ggf. Eskalation</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">4. Dokumentation</h4>
                    <p className="text-sm text-muted-foreground">
                      Vollständige Dokumentation des Prozesses für Ihre Unterlagen
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl text-center">
            <h2 className="text-3xl font-bold mb-4">Benötigen Sie Unterstützung?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Kontaktieren Sie mich für eine kostenlose Ersteinschätzung Ihres Falls.
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
