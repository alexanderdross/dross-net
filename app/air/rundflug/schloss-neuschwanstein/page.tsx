import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plane, MapPin, Clock, Users, Euro, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Rundflug Schloss Neuschwanstein | Dross:Air",
  description:
    "Das weltberühmte Märchenschloss König Ludwigs II. aus der Luft erleben. Unvergesslicher Sightseeing-Flug über das meistbesuchte Schloss Deutschlands.",
  keywords: ["Rundflug Neuschwanstein", "Schloss Neuschwanstein", "Bayern Rundflug", "Märchenschloss", "Allgäu"],
}

export default function NeuschwansteinPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative w-full h-[400px] md:h-[500px] bg-gradient-to-b from-gray-900 to-gray-700">
          <div className="absolute inset-0 bg-[url('/assets/flights/neuschwanstein-hero.jpg')] bg-cover bg-center opacity-60" />
          <div className="relative container mx-auto px-4 md:px-6 max-w-7xl h-full flex flex-col justify-end pb-12">
            <Badge className="w-fit mb-4">
              <MapPin className="w-4 h-4 mr-2" />
              Ab Bodensee Friedrichshafen
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 text-balance">
              Schloss Neuschwanstein
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl">
              Das weltberühmte Märchenschloss König Ludwigs II.
            </p>
          </div>
        </section>

        <section className="w-full py-4 bg-background border-b">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <Link href="/air/" className="text-sm text-primary hover:underline inline-flex items-center gap-2">
              ← Alle Sehenswürdigkeiten
            </Link>
          </div>
        </section>

        <section className="w-full py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="grid md:grid-cols-3 gap-12">
              <div className="md:col-span-2 space-y-6">
                <div>
                  <h2 className="text-3xl font-bold mb-4">Schloss Neuschwanstein</h2>
                  <div className="prose prose-gray max-w-none space-y-4 text-muted-foreground">
                    <p>
                      Das weltberühmte Märchenschloss König Ludwigs II. – Deutschlands meistbesuchte Sehenswürdigkeit
                      und Vorbild für Disneys Dornröschenschloss – thront majestätisch auf einem Felsen im Allgäu. Bei
                      diesem Rundflug erleben Sie das weiße Traumschloss aus einer Perspektive, die selbst den meisten
                      der 1,5 Millionen jährlichen Besucher verwehrt bleibt: aus der Vogelperspektive in all seiner
                      architektonischen Pracht. Sie überfliegen nicht nur Neuschwanstein, sondern auch das nahegelegene
                      gelbe Schloss Hohenschwangau, in dem Ludwig seine Kindheit verbrachte, den türkisblauen
                      Forggensee, der sich malerisch durch das Voralpenland schlängelt, und die dramatische Alpenkulisse
                      mit ihren schneebedeckten Gipfeln. Dieser Flug verbindet bayerische Romantik mit alpiner Majestät
                      und ist perfekt für alle, die Märchen lieben, Geschichte erleben und atemberaubende Landschaften
                      aus der Luft genießen möchten.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4">Das sehen Sie bei diesem Flug:</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Schloss Neuschwanstein – Märchenschloss König Ludwigs II.</span>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Schloss Hohenschwangau – Ludwigs Kindheitssitz</span>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Forggensee – Bayerns fünftgrößter See</span>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Allgäuer Alpen Panorama</span>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Voralpenland mit Wiesen und Wäldern</span>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Marienbrücke – berühmter Aussichtspunkt</span>
                    </div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-3 gap-6 pt-6">
                  <Card>
                    <CardContent className="pt-6 text-center">
                      <div className="flex justify-center mb-2">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <Plane className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <h4 className="font-semibold mb-1">Märchenhafter Ausblick</h4>
                      <p className="text-sm text-muted-foreground">
                        Erleben Sie das meistbesuchte Schloss Deutschlands aus einzigartiger Perspektive
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6 text-center">
                      <div className="flex justify-center mb-2">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <Clock className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <h4 className="font-semibold mb-1">Flexible Termine</h4>
                      <p className="text-sm text-muted-foreground">
                        Wir finden gemeinsam den perfekten Termin für Ihr Flugerlebnis
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6 text-center">
                      <div className="flex justify-center mb-2">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <Users className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <h4 className="font-semibold mb-1">Für alle geeignet</h4>
                      <p className="text-sm text-muted-foreground">
                        Perfekt für Paare, Familien und Gruppen bis 3 Personen
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="md:col-span-1">
                <Card className="sticky top-24">
                  <CardHeader className="bg-primary/5">
                    <CardTitle>Rundflug buchen</CardTitle>
                    <p className="text-sm text-muted-foreground">Sightseeing-Flug über Schloss Neuschwanstein</p>
                  </CardHeader>
                  <CardContent className="pt-6 space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Plane className="h-5 w-5 text-primary" />
                        <div className="flex-1">
                          <p className="text-sm font-medium">Flugzeug</p>
                          <p className="text-sm text-muted-foreground">Piper PA-28 Archer III (3 Passagiere)</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Users className="h-5 w-5 text-primary" />
                        <div className="flex-1">
                          <p className="text-sm font-medium">Passagiere</p>
                          <p className="text-sm text-muted-foreground">max. 3</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock className="h-5 w-5 text-primary" />
                        <div className="flex-1">
                          <p className="text-sm font-medium">Flugdauer</p>
                          <p className="text-sm text-muted-foreground">60 Minuten</p>
                        </div>
                      </div>
                    </div>

                    <div className="border-t pt-6">
                      <div className="flex items-center justify-between mb-1">
                        <p className="text-sm text-muted-foreground">Gesamtpreis</p>
                        <div className="flex items-center gap-1">
                          <Euro className="h-5 w-5 text-primary" />
                          <span className="text-2xl font-bold text-primary">199</span>
                        </div>
                      </div>
                      <p className="text-xs text-center text-muted-foreground">für 1 Person · 60 Min</p>
                    </div>

                    <div className="space-y-3">
                      <Button asChild size="lg" className="w-full">
                        <Link href="/contact/">
                          <Plane className="mr-2 h-4 w-4" />
                          Jetzt buchen
                        </Link>
                      </Button>
                      <p className="text-xs text-center text-muted-foreground">Abflug: Friedrichshafen Flughafen</p>
                    </div>

                    <div className="border-t pt-6">
                      <h4 className="font-semibold mb-3 text-sm">Alle Ziele ab Bodensee</h4>
                      <Link href="/air/standorte/bodensee/" className="text-sm text-primary hover:underline">
                        Weitere Flugoptionen →
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <h2 className="text-3xl font-bold mb-8 text-center">Weitere Sehenswürdigkeiten ab Bodensee</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Link href="/air/rundflug/zugspitze/" className="block group">
                <Card className="hover:shadow-lg transition-shadow flex flex-col h-full">
                  <CardHeader>
                    <Badge className="w-fit mb-2">Bayerische Alpen</Badge>
                    <CardTitle className="group-hover:text-primary transition-colors">Zugspitze</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <p className="text-sm text-muted-foreground mb-4">Deutschlands höchster Gipfel auf 2.962 Metern</p>
                    <div className="flex items-center gap-4 text-sm mt-auto">
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        60 Min
                      </span>
                      <span className="flex items-center gap-1">
                        <Euro className="h-4 w-4" />
                        244€
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/air/rundflug/insel-mainau/" className="block group">
                <Card className="hover:shadow-lg transition-shadow h-full">
                  <CardHeader>
                    <Badge className="w-fit mb-2">Bodensee</Badge>
                    <CardTitle className="group-hover:text-primary transition-colors">Insel Mainau</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Die Blumeninsel im Bodensee mit subtropischem Paradies
                    </p>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        45 Min
                      </span>
                      <span className="flex items-center gap-1">
                        <Euro className="h-4 w-4" />
                        139€
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
