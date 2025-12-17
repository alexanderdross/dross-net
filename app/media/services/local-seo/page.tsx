import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Star, Building2 } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Local SEO & Google Business | Dross:Media",
  description:
    "Als lokales Unternehmen ist es wichtig, dass Ihre Webseite von potenziellen Kunden in der Umgebung wahrgenommen werden.",
  keywords: ["Local SEO", "Google Business Profile", "Google My Business", "Lokale Suche", "Lokales Marketing"],
}

export default function LocalSEOPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="w-full py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="flex flex-col items-center text-center space-y-6 max-w-4xl mx-auto">
              <Badge variant="outline" className="bg-primary/10">
                <MapPin className="w-4 h-4 mr-2" />
                Local SEO
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-balance">
                Local SEO & Google Business Optimierung
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl text-balance">
                Als lokales Unternehmen ist es wichtig, dass Ihre Webseite von potenziellen Kunden in der Umgebung
                wahrgenommen werden.
              </p>
              <Button asChild size="lg">
                <Link href="/contact/">Jetzt beraten lassen</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <h2 className="text-3xl font-bold mb-8 text-center">Unsere Local SEO Leistungen</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Building2 className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Google Business Profile</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Optimierung und Verwaltung Ihres Google Business Profils für maximale Sichtbarkeit in der lokalen
                    Suche
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Star className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Bewertungsmanagement</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Strategien zur Generierung positiver Bewertungen und professioneller Umgang mit Kundenfeedback
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Lokale Citations</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Einträge in relevante Branchenverzeichnisse und lokale Plattformen für bessere Rankings
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl text-center">
            <h2 className="text-3xl font-bold mb-4">Starten Sie mit Local SEO</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Werden Sie für Kunden in Ihrer Region besser sichtbar.
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
