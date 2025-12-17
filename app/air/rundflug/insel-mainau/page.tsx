import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plane, MapPin, Clock, Users, Euro, CheckCircle2, Flower2 } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Rundflug Insel Mainau | Dross:Air",
  description:
    "Die Blumeninsel im Bodensee aus der Luft erleben. Subtropisches Paradies mit Millionen Blumen und barockem Schloss.",
  keywords: ["Rundflug Mainau", "Insel Mainau", "Blumeninsel", "Bodensee Rundflug", "Konstanz"],
}

export default function InselMainauPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative w-full h-[400px] md:h-[500px] bg-gradient-to-b from-gray-900 to-gray-700">
          <div className="absolute inset-0 bg-[url('/assets/flights/mainau-hero.jpg')] bg-cover bg-center opacity-60" />
          <div className="relative container mx-auto px-4 md:px-6 max-w-7xl h-full flex flex-col justify-end pb-12">
            <Badge className="w-fit mb-4">
              <MapPin className="w-4 h-4 mr-2" />
              Ab Bodensee Friedrichshafen
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 text-balance">Insel Mainau</h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl">
              Die Blumeninsel im Bodensee – subtropisches Paradies
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
                  <h2 className="text-3xl font-bold mb-4">Insel Mainau</h2>
                  <div className="prose prose-gray max-w-none space-y-4 text-muted-foreground">
                    <p>
                      Die Blumeninsel im Bodensee – subtropisches Paradies mit Millionen Blumen und barockem Schloss,
                      das der Gräflichen Familie Bernadotte gehört. Bei diesem malerischen Rundflug erleben Sie die 45
                      Hektar große Insel Mainau aus der Luft, die jedes Jahr über 1,2 Millionen Besucher anzieht. Sie
                      überfliegen die farbenprächtigen Blumenbeete, die je nach Jahreszeit in unterschiedlichen Farben
                      leuchten – von Tulpen und Narzissen im Frühling über Rosen im Sommer bis zu Dahlien im Herbst. Das
                      barocke Schloss mit seinen mediterran angelegten Gärten, das historische Schmetterlingshaus mit
                      tropischen Schmetterlingen, und das beeindruckende Palmenhaus sind von oben besonders gut zu
                      erkennen. Der Rundflug führt Sie auch über das kristallklare Wasser des Bodensees, vorbei an der
                      Stadt Konstanz mit ihrer historischen Altstadt und dem Münster, der Insel Reichenau
                      (UNESCO-Weltkulturerbe) und den schneebedeckten Alpengipfeln am Horizont. Dieser Flug ist perfekt
                      für Naturliebhaber, Gartenbegeisterte und alle, die die Vielfalt des Bodensees aus der
                      Vogelperspektive genießen möchten.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4">Das sehen Sie bei diesem Flug:</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Insel Mainau mit Millionen Blumen</span>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Barockes Schloss Bernadotte</span>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Schmetterlingshaus & Palmenhaus</span>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Stadt Konstanz & historische Altstadt</span>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Insel Reichenau (UNESCO-Welterbe)</span>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Bodensee Panorama mit Alpenkette</span>
                    </div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-3 gap-6 pt-6">
                  <Card>
                    <CardContent className="pt-6 text-center">
                      <div className="flex justify-center mb-2">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <Flower2 className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <h4 className="font-semibold mb-1">Blütenpracht</h4>
                      <p className="text-sm text-muted-foreground">
                        Erleben Sie die farbenprächtige Blumeninsel aus der Luft
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
                      <h4 className="font-semibold mb-1">45 Minuten</h4>
                      <p className="text-sm text-muted-foreground">Perfekte Dauer für den Bodensee-Rundblick</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6 text-center">
                      <div className="flex justify-center mb-2">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <Users className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <h4 className="font-semibold mb-1">Für Naturfreunde</h4>
                      <p className="text-sm text-muted-foreground">Ideal für Garten- und Naturliebhaber</p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="md:col-span-1">
                <Card className="sticky top-24">
                  <CardHeader className="bg-primary/5">
                    <CardTitle>Rundflug buchen</CardTitle>
                    <p className="text-sm text-muted-foreground">Sightseeing-Flug über die Insel Mainau</p>
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
                          <p className="text-sm text-muted-foreground">45 Minuten</p>
                        </div>
                      </div>
                    </div>

                    <div className="border-t pt-6">
                      <div className="flex items-center justify-between mb-1">
                        <p className="text-sm text-muted-foreground">Gesamtpreis</p>
                        <div className="flex items-center gap-1">
                          <Euro className="h-5 w-5 text-primary" />
                          <span className="text-2xl font-bold text-primary">139</span>
                        </div>
                      </div>
                      <p className="text-xs text-center text-muted-foreground">für 1 Person · 45 Min</p>
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
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
