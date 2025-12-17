import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plane, MapPin, Clock, Users, Euro, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Rundflug Frankfurter Skyline | Dross:Air",
  description:
    "Erleben Sie die Frankfurter Skyline aus der Luft. Sightseeing-Flug über die beeindruckende Bankenmetropole und den Main Tower.",
  keywords: ["Rundflug Frankfurt", "Frankfurter Skyline", "Sightseeing Flug", "Main Tower", "EZB-Neubau"],
}

export default function FrankfurterSkylinePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section with Image */}
        <section className="relative w-full h-[400px] md:h-[500px] bg-gradient-to-b from-gray-900 to-gray-700">
          <div className="absolute inset-0 bg-[url('/assets/flights/frankfurter-skyline-hero.jpg')] bg-cover bg-center opacity-60" />
          <div className="relative container mx-auto px-4 md:px-6 max-w-7xl h-full flex flex-col justify-end pb-12">
            <Badge className="w-fit mb-4">
              <MapPin className="w-4 h-4 mr-2" />
              Ab Frankfurt Egelsbach Flugplatz
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 text-balance">
              Frankfurter Skyline
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl">
              Die Frankfurter Skyline ist einzigartig in Deutschland und kontinentaleuropa
            </p>
          </div>
        </section>

        {/* Back Link */}
        <section className="w-full py-4 bg-background border-b">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <Link href="/air/" className="text-sm text-primary hover:underline inline-flex items-center gap-2">
              ← Alle Sehenswürdigkeiten
            </Link>
          </div>
        </section>

        {/* Main Content */}
        <section className="w-full py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="grid md:grid-cols-3 gap-12">
              {/* Left Column - Description */}
              <div className="md:col-span-2 space-y-6">
                <div>
                  <h2 className="text-3xl font-bold mb-4">Frankfurter Skyline</h2>
                  <div className="prose prose-gray max-w-none space-y-4 text-muted-foreground">
                    <p>
                      Die Frankfurter Skyline ist einzigartig in Deutschland und kontinentaleuropa – nirgendwo sonst
                      ragen so viele Wolkenkratzer in den Himmel wie in der Finanzmetropole am Main. Bei Ihrem Rundflug
                      erleben Sie 'Mainhattan' aus einer Perspektive, die selbst Einheimische selten genießen: Sie
                      umkreisen den 260 Meter hohen Commerzbank Tower, den ikonischen Main Tower mit seiner
                      Aussichtsplattform, den futuristischen EZB-Neubau am Osthafen und die gesamte
                      Bankenviertel-Silhouette. Unter Ihnen schlängelt sich der Main mit seinen historischen Brücken
                      durch die Stadt – im Kontrast zur modernen Skyline entdecken Sie den historischen Römerberg, die
                      Paulskirche als Wiege der deutschen Demokratie, den Palmengarten und das grüne Gürtel, der die
                      Innenstadt umgibt. Dieser Flug ist perfekt für Architekturliebhaber, Fotografen und alle, die das
                      pulsierende Herz der deutschen Wirtschaft aus der Vogelperspektive erleben möchten.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4">Das sehen Sie bei diesem Flug:</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Deutschlands einzige Wolkenkratzer-Skyline</span>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Commerzbank Tower (260m) und Main Tower</span>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Historische Mainbrücken und Römerberg</span>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Paulskirche – Wiege der Demokratie</span>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Frankfurter Grüngürtel und Palmengarten</span>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">EZB-Neubau – Europäische Zentralbank</span>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="grid sm:grid-cols-3 gap-6 pt-6">
                  <Card>
                    <CardContent className="pt-6 text-center">
                      <div className="flex justify-center mb-2">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <Plane className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <h4 className="font-semibold mb-1">Einmalige Perspektiven</h4>
                      <p className="text-sm text-muted-foreground">
                        Erleben Sie Frankfurter Skyline aus einer Perspektive, die nur wenige Menschen sehen
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
                      <h4 className="font-semibold mb-1">6 Flugzeugtypen</h4>
                      <p className="text-sm text-muted-foreground">
                        Bristell RG, Cessna 172, Cessna P210, Piper PA-28, Cirrus SR22 oder Tragschrauber
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Right Column - Booking */}
              <div className="md:col-span-1">
                <Card className="sticky top-24">
                  <CardHeader className="bg-primary/5">
                    <CardTitle>Rundflug buchen</CardTitle>
                    <p className="text-sm text-muted-foreground">Sightseeing-Flug über Frankfurter Skyline</p>
                  </CardHeader>
                  <CardContent className="pt-6 space-y-6">
                    {/* Flight Details */}
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

                    {/* Price */}
                    <div className="border-t pt-6">
                      <div className="flex items-center justify-between mb-1">
                        <p className="text-sm text-muted-foreground">Gesamtpreis</p>
                        <div className="flex items-center gap-1">
                          <Euro className="h-5 w-5 text-primary" />
                          <span className="text-2xl font-bold text-primary">195</span>
                        </div>
                      </div>
                      <p className="text-xs text-center text-muted-foreground">für 1 Person · 45 Min</p>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-3">
                      <Button asChild size="lg" className="w-full">
                        <Link href="/contact/">
                          <Plane className="mr-2 h-4 w-4" />
                          Jetzt buchen
                        </Link>
                      </Button>
                      <p className="text-xs text-center text-muted-foreground">Abflug: Frankfurt Egelsbach Flugplatz</p>
                    </div>

                    {/* Additional Info */}
                    <div className="border-t pt-6">
                      <h4 className="font-semibold mb-3 text-sm">Alle Ziele ab Frankfurt</h4>
                      <Link href="/air/standorte/frankfurt/" className="text-sm text-primary hover:underline">
                        Weitere Flugoptionen →
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* More Sights Section */}
        <section className="w-full py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <h2 className="text-3xl font-bold mb-8 text-center">Weitere Sehenswürdigkeiten ab Frankfurt</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Link href="/air/rundflug/loreley/" className="block group">
                <Card className="hover:shadow-lg transition-shadow flex flex-col h-full">
                  <CardHeader>
                    <Badge className="w-fit mb-2">Rheintal</Badge>
                    <CardTitle className="group-hover:text-primary transition-colors">Loreley-Felsen</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <p className="text-sm text-muted-foreground mb-4">
                      Der berühmte Loreley-Felsen im UNESCO-Welterbe Oberes Mittelrheintal
                    </p>
                    <div className="flex items-center gap-4 text-sm mt-auto">
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        45 Min
                      </span>
                      <span className="flex items-center gap-1">
                        <Euro className="h-4 w-4" />
                        195€
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/air/rundflug/schloss-johannisberg/" className="block group">
                <Card className="hover:shadow-lg transition-shadow flex flex-col h-full">
                  <CardHeader>
                    <Badge className="w-fit mb-2">Rheingau</Badge>
                    <CardTitle className="group-hover:text-primary transition-colors">Schloss Johannisberg</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <p className="text-sm text-muted-foreground mb-4">
                      Das berühmte Weingut Schloss Johannisberg im Rheingau
                    </p>
                    <div className="flex items-center gap-4 text-sm mt-auto">
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        45 Min
                      </span>
                      <span className="flex items-center gap-1">
                        <Euro className="h-4 w-4" />
                        195€
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
