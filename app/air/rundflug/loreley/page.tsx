import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import OptimizedImage from "@/components/optimized-image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Check, Plane, Users, Clock, ArrowLeft, Star } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Loreley-Felsen Rundflug - Dross:Air",
  description:
    "Der Loreley-Felsen ist eine der bekanntesten Sehenswürdigkeiten Deutschlands und ein Muss für jeden Rheinbesucher. Der 120 Meter hohe Schieferfelsen ragt majestätisch über die tiefste und engste Stelle des Rheins empor – genau dort, wo die gefährliche Strömung einst zahlreiche Schiffe in Not brachte und die berühmte Sage der Loreley inspirierte.",
}

export default function LoreleyFlightPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full min-h-[600px] flex items-center justify-center overflow-hidden">
          <OptimizedImage
            src="/assets/flights/loreley-hero"
            alt="Rundflug über den Loreley-Felsen im UNESCO Welterbe Oberes Mittelrheintal"
            title="Loreley-Felsen Sightseeing-Flug"
            width={1920}
            height={800}
            loading="eager"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        </section>

        {/* Content Section */}
        <section className="w-full py-16 -mt-32 relative z-10">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <Link
                  href="/air/standorte/mainz/"
                  className="inline-flex items-center gap-2 text-sm text-primary hover:underline mb-4"
                  title="Zurück zu allen Sehenswürdigkeiten ab Mainz"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Alle Sehenswürdigkeiten
                </Link>
                <div className="flex items-center gap-2 mb-4">
                  <Badge>
                    <MapPin className="h-3 w-3 mr-1" />
                    Sehenswürdigkeit
                  </Badge>
                  <Badge variant="outline">Oberes Mittelrheintal</Badge>
                </div>
                <Badge className="mb-4">Ab Mainz-Finthen Flugplatz</Badge>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Loreley-Felsen</h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Der Loreley-Felsen ist eine der bekanntesten Sehenswürdigkeiten Deutschlands und ein Muss für jeden
                  Rheinbesucher. Der 120 Meter hohe Schieferfelsen ragt majestätisch über die tiefste und engste Stelle
                  des Rheins empor – genau dort, wo die gefährliche Strömung einst zahlreiche Schiffe in Not brachte und
                  die berühmte Sage der Loreley inspirierte. Bei einem Rundflug ab Mainz oder Frankfurt erleben Sie das
                  gesamte UNESCO Welterbe Oberes Mittelrheintal aus der Vogelperspektive: Sie sehen die dramatischen
                  Rheinschleifen bei St. Goarshausen, über 40 mittelalterliche Burgen und Festungen wie die Marksburg
                  und Burg Rheinfels, sowie die steilen Weinbergterrassen, die sich bis ans Wasser schmiegen. Die
                  einzigartige Kombination aus Naturschönheit, mythischer Geschichte und mittelalterlicher Architektur
                  macht den Loreley-Rundflug zu einem unvergesslichen Erlebnis für Romantiker, Fotografen und
                  Geschichtsliebhaber.
                </p>

                <h2 className="text-2xl font-bold mb-4">Das sehen Sie bei diesem Flug:</h2>
                <div className="space-y-4 mb-8">
                  {[
                    "UNESCO Welterbe Oberes Mittelrheintal",
                    "120 Meter hoher Schieferfelsen",
                    "Über 40 Rheinburgen und Festungen",
                    "Sagenumwobene Loreley-Statue",
                    "Engste und tiefste Stelle des Rheins",
                    "Weinbergterrassen und Rheinschleifen",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="mt-1 flex-shrink-0">
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                          <Check className="h-3 w-3 text-primary" />
                        </div>
                      </div>
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Booking Sidebar */}
              <div className="lg:col-span-1">
                <Card className="sticky top-20">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-4">Rundflug buchen</h3>
                    <p className="text-sm text-muted-foreground mb-4">Sightseeing-Flug über Loreley-Felsen</p>

                    {/* Flight Details */}
                    <div className="space-y-4 mb-6 pb-6 border-b">
                      <div className="flex items-center gap-2 text-sm">
                        <Plane className="h-4 w-4 text-muted-foreground" />
                        <span>Flugzeug</span>
                      </div>
                      <div className="text-sm text-muted-foreground pl-6">Bristell RG (1 Passagier)</div>

                      <div className="flex items-center gap-2 text-sm">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span>Passagiere</span>
                      </div>
                      <div className="text-sm text-muted-foreground pl-6">max. 1</div>

                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>Flugdauer</span>
                      </div>
                      <div className="text-sm text-muted-foreground pl-6">45 Minuten</div>
                    </div>

                    {/* Price */}
                    <div className="mb-6">
                      <div className="text-sm text-muted-foreground mb-1">Gesamtpreis</div>
                      <div className="text-3xl font-bold text-primary">195€</div>
                      <div className="text-sm text-muted-foreground">für 1 Person • 45 Min</div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="space-y-3">
                      <Button asChild size="lg" className="w-full">
                        <Link href="/contact/" title="Loreley-Felsen Rundflug jetzt buchen - Termin anfragen">
                          Jetzt buchen
                        </Link>
                      </Button>
                      <Button asChild variant="outline" size="lg" className="w-full bg-transparent">
                        <Link href="/air/standorte/mainz/" title="Alle Rundflugziele ab Mainz-Finthen anzeigen">
                          Alle Ziele ab Mainz
                        </Link>
                      </Button>
                    </div>

                    {/* Additional Options */}
                    <div className="mt-6 pt-6 border-t">
                      <h4 className="font-medium mb-3">Weitere Flugoptionen:</h4>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                          <span>Taxi-Flug ab 289€</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                          <span>Individualflug ab 199€</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-16 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Star className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">Einmalige Perspektiven</h3>
                  <p className="text-sm text-muted-foreground">
                    Erleben Sie Loreley-Felsen aus einer Perspektive, die nur wenige Menschen sehen.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Plane className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">Flexible Termine</h3>
                  <p className="text-sm text-muted-foreground">
                    Wir finden gemeinsam den perfekten Termin für Ihr Flugerlebnis.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Plane className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">6 Flugzeugtypen</h3>
                  <p className="text-sm text-muted-foreground">
                    Bristell RG, Cessna 172, Cessna P210, Piper PA-28, Cirrus SR22 oder Tragschrauber – wählen Sie Ihr
                    Wunschflugzeug.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Other Flights */}
        <section className="w-full py-16">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl font-bold mb-8">Weitere Sehenswürdigkeiten ab Mainz</h2>
            <div className="grid md:grid-cols-3 gap-6">{/* Additional flight cards would go here */}</div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
