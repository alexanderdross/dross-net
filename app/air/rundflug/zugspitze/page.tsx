import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plane, MapPin, Clock, Users, Euro, CheckCircle2, Mountain } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Rundflug Zugspitze | Dross:Air",
  description:
    "Deutschlands höchster Gipfel auf 2.962 Metern aus der Luft erleben. Das ultimative Alpenerlebnis mit atemberaubenden Ausblicken über die bayerischen Alpen.",
  keywords: ["Rundflug Zugspitze", "Alpen Rundflug", "Garmisch", "Höchster Berg Deutschland", "Alpenpanorama"],
}

export default function ZugspitzePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative w-full h-[400px] md:h-[500px] bg-gradient-to-b from-gray-900 to-gray-700">
          <div className="absolute inset-0 bg-[url('/assets/flights/zugspitze-hero.jpg')] bg-cover bg-center opacity-60" />
          <div className="relative container mx-auto px-4 md:px-6 max-w-7xl h-full flex flex-col justify-end pb-12">
            <Badge className="w-fit mb-4">
              <MapPin className="w-4 h-4 mr-2" />
              Ab Bodensee Friedrichshafen
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 text-balance">Zugspitze</h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl">Deutschlands höchster Gipfel auf 2.962 Metern</p>
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
                  <h2 className="text-3xl font-bold mb-4">Zugspitze</h2>
                  <div className="prose prose-gray max-w-none space-y-4 text-muted-foreground">
                    <p>
                      Deutschlands höchster Gipfel auf 2.962 Metern – das ultimative Alpenerlebnis aus der Luft. Erleben
                      Sie die majestätische Zugspitze, die an der Grenze zwischen Deutschland und Österreich thront, aus
                      einer Perspektive, die nur wenige Menschen je genießen durften. Dieser spektakuläre Rundflug führt
                      Sie über das imposante Wettersteingebirge, vorbei an schroffen Felswänden, tiefblauen Bergseen und
                      dem ewigen Eis des Zugspitzgletschers. Sie überfliegen die weltberühmte Partnachklamm, deren
                      tosende Wasserfälle 80 Meter tief durch schmale Felsschluchten stürzen, die malerische Ortschaft
                      Garmisch-Partenkirchen – Austragungsort der Olympischen Winterspiele 1936 – und den türkisblauen
                      Eibsee, der zu den schönsten Bergseen der Alpen zählt. Die 360-Grad-Panoramen über die endlosen
                      Alpenketten, von den Ammergauer Alpen bis zu den Tiroler Bergen, sind atemberaubend. Dieser Flug
                      ist perfekt für Bergliebhaber, Naturbegeisterte und alle, die die alpine Majestät in ihrer
                      reinsten Form erleben möchten – ohne mehrstündige Wanderungen oder Seilbahnfahrten.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4">Das sehen Sie bei diesem Flug:</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Zugspitze – Deutschlands höchster Gipfel (2.962m)</span>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Zugspitzgletscher mit ewigem Eis</span>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Eibsee – türkisblauer Bergsee</span>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Partnachklamm – spektakuläre Schlucht</span>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Garmisch-Partenkirchen Olympiaort</span>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Wettersteingebirge Panorama</span>
                    </div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-3 gap-6 pt-6">
                  <Card>
                    <CardContent className="pt-6 text-center">
                      <div className="flex justify-center mb-2">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <Mountain className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <h4 className="font-semibold mb-1">Alpines Highlight</h4>
                      <p className="text-sm text-muted-foreground">
                        Erleben Sie Deutschlands höchsten Gipfel aus der Vogelperspektive
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
                      <h4 className="font-semibold mb-1">60 Minuten</h4>
                      <p className="text-sm text-muted-foreground">
                        Ausreichend Zeit für das vollständige Alpenpanorama
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
                      <h4 className="font-semibold mb-1">Für Bergfans</h4>
                      <p className="text-sm text-muted-foreground">
                        Perfekt für Natur- und Bergliebhaber aller Altersgruppen
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="md:col-span-1">
                <Card className="sticky top-24">
                  <CardHeader className="bg-primary/5">
                    <CardTitle>Rundflug buchen</CardTitle>
                    <p className="text-sm text-muted-foreground">Sightseeing-Flug über die Zugspitze</p>
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
                          <span className="text-2xl font-bold text-primary">244</span>
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
              <Link href="/air/rundflug/schloss-neuschwanstein/" className="block group">
                <Card className="hover:shadow-lg transition-shadow flex flex-col h-full">
                  <CardHeader>
                    <Badge className="w-fit mb-2">Allgäu</Badge>
                    <CardTitle className="group-hover:text-primary transition-colors">Schloss Neuschwanstein</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <p className="text-sm text-muted-foreground mb-4">
                      Das weltberühmte Märchenschloss König Ludwigs II.
                    </p>
                    <div className="flex items-center gap-4 text-sm mt-auto">
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        60 Min
                      </span>
                      <span className="flex items-center gap-1">
                        <Euro className="h-4 w-4" />
                        199€
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/air/rundflug/insel-mainau/" className="block group">
                <Card className="hover:shadow-lg transition-shadow flex flex-col h-full">
                  <CardHeader>
                    <Badge className="w-fit mb-2">Bodensee</Badge>
                    <CardTitle className="group-hover:text-primary transition-colors">Insel Mainau</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <p className="text-sm text-muted-foreground mb-4">
                      Die Blumeninsel im Bodensee mit subtropischem Paradies
                    </p>
                    <div className="flex items-center gap-4 text-sm mt-auto">
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
