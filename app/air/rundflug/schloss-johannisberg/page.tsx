import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import OptimizedImage from "@/components/optimized-image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin, Plane, CheckCircle2, Users } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Schloss Johannisberg Rundflug - Dross:Air",
  description:
    "Das älteste Riesling-Weingut der Welt – 900 Jahre Weinkultur im Rheingau erleben. Sightseeing-Flug ab Mainz über Schloss Johannisberg.",
}

export default function SchlossJohannisbergPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full min-h-[400px] flex items-center justify-center overflow-hidden">
          <OptimizedImage
            src="/assets/flights/johannisberg-hero"
            alt="Schloss Johannisberg Rundflug"
            title="Sightseeing-Flug über Schloss Johannisberg"
            width={1920}
            height={600}
            loading="eager"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        </section>

        {/* Content Section */}
        <section className="w-full py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <div className="mb-6">
                  <Link
                    href="/air/rundflug/"
                    className="text-sm text-primary hover:underline inline-flex items-center gap-1 mb-4"
                    title="Zurück zur Rundflug-Übersicht - Alle Sehenswürdigkeiten anzeigen"
                  >
                    ← Alle Sehenswürdigkeiten
                  </Link>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">
                    <MapPin className="h-3 w-3 mr-1" />
                    Schloss & Burg
                  </Badge>
                  <Badge variant="outline">Rheingau</Badge>
                  <Badge variant="outline">Ab Mainz-Finthen Flugplatz</Badge>
                </div>

                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-6">Schloss Johannisberg</h1>

                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Schloss Johannisberg thront majestätisch über den weltberühmten Weinbergen des Rheingaus und gilt als
                  Geburtsort des Riesling-Weins. Seit dem Jahr 1100 wird hier ununterbrochen Wein kultiviert – eine
                  Geschichte, die das Schloss zum ältesten Riesling-Weingut der Welt macht. Bei einem Rundflug über den
                  Rheingau entfaltet sich die einzigartige Kulturlandschaft in ihrer vollen Pracht: die geometrisch
                  angelegten Rebzeilen, die sich wie ein grüner Teppich über die Südhänge ziehen, das barocke Schloss
                  mit seiner markanten Basilika, und der majestätische Rhein, der sich silbern durch das Tal schlängelt.
                  Im gleichen Flug sehen Sie weitere Highlights wie das benachbarte Kloster Eberbach, die Weinorte
                  Geisenheim und Oestrich-Winkel sowie die Ursprünge der deutschen Spätlese-Tradition. Dieser Flug ist
                  ein Muss für Weinliebhaber, Kulturinteressierte und alle, die die romantische Rheinlandschaft von oben
                  erleben möchten.
                </p>

                <div className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">Das sehen Sie bei diesem Flug:</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Ältestes Riesling-Weingut der Welt</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Historisches Schloss mit Basilika</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Weltberühmte Rheingau-Weinlagen</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Geburtsort der Spätlese-Tradition</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Panoramablick über das Rheintal</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Nahe Kloster Eberbach und Geisenheim</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Booking Sidebar */}
              <div className="lg:col-span-1">
                <Card className="sticky top-24">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-lg mb-4">Rundflug buchen</h3>
                    <p className="text-sm text-muted-foreground mb-6">Sightseeing-Flug über Schloss Johannisberg</p>

                    <div className="space-y-4 mb-6 pb-6 border-b">
                      <div className="flex items-center gap-2 text-sm">
                        <Plane className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium">Flugzeug</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Bristell RG (1 Passagier)</p>

                      <div className="flex items-center gap-2 text-sm mt-4">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium">Passagiere</span>
                      </div>
                      <p className="text-sm text-muted-foreground">1 Passagier, max. 1</p>

                      <div className="flex items-center gap-2 text-sm mt-4">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium">Flugdauer</span>
                      </div>
                      <p className="text-sm text-muted-foreground">45 Minuten</p>
                    </div>

                    <div className="mb-6">
                      <div className="flex items-baseline justify-between mb-2">
                        <span className="text-sm text-muted-foreground">Gesamtpreis</span>
                        <span className="text-3xl font-bold text-primary">167€</span>
                      </div>
                      <p className="text-xs text-muted-foreground">für 1 Person • 45 Min</p>
                    </div>

                    <Button asChild className="w-full" size="lg">
                      <Link href="/contact/" title="Schloss Johannisberg Rundflug buchen - Termin anfragen">
                        Jetzt buchen
                      </Link>
                    </Button>

                    <div className="mt-4 text-center">
                      <p className="text-xs text-muted-foreground">Abflug: Mainz-Finthen Flugplatz</p>
                      <p className="text-xs text-muted-foreground">Flugzeug: Bristell RG</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">Einmalige Perspektiven</h3>
                    <p className="text-sm text-muted-foreground">
                      Erleben Sie Schloss Johannisberg aus einer Perspektive, die nur wenige Menschen je sehen.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">Flexible Termine</h3>
                    <p className="text-sm text-muted-foreground">
                      Wir finden gemeinsam den perfekten Termin für Ihr Flugerlebnis.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Plane className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">6 Flugzeugtypen</h3>
                    <p className="text-sm text-muted-foreground">
                      Bristell RG, Cessna 172, Cessna P210, Piper PA-28, Cirrus SR22 oder Tragschrauber – wählen Sie Ihr
                      Wunschflugzeug.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
