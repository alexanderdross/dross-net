import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import OptimizedImage from "@/components/optimized-image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Plane, Users, Clock, Star, Euro, Phone } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Rundflüge ab Frankfurt Egelsbach - Dross:Air",
  description:
    "Erleben Sie die spektakuläre Skyline von Manhattan, den waldreichen Taunusund das gesamte Rhein-Main-Gebiet aus der Vogelperspektive.",
}

const flights = [
  {
    title: "Frankfurter Skyline",
    description: "Mainhattan – Deutschlands einzige Wolkenkratzer-Skyline aus der Vogelperspektive.",
    price: "ab 139€",
    duration: "30-45 Min.",
    highlights: [
      "Deutschlands einzige Wolkenkratzer-Skyline",
      "Commerzbank Tower (260m) und Main Tower",
      "EZB-Neubau am Osthafen",
    ],
    href: "/air/rundflug/frankfurter-skyline/",
  },
  {
    title: "Großer Feldberg",
    description: "Höchster Taunus-Gipfel mit Sendeturm – Panoramablick von der Skyline bis zum...",
    price: "ab 129€",
    duration: "30-45 Min.",
    highlights: [
      "Höchster Taunus-Gipfel (881m)",
      "Markanter Feldberg-Sendeturm",
      "Naturpark Hochtaunus mit Mischwäldern",
    ],
    href: "/air/rundflug/grosser-feldberg/",
  },
  {
    title: "Rüdesheim am Rhein",
    description: "Drosselgasse, Niederwalddenkmal und Weinberge – Deutschlands romantischster Weinort aus der...",
    price: "ab 129€",
    duration: "30-45 Min.",
    highlights: [
      "Niederwalddenkmal mit Germania-Statue",
      "Weltberühmte Drosselgasse",
      "Steile Weinbergterrassen des Rheingaus",
    ],
    href: "/air/rundflug/ruedesheim/",
  },
]

export default function FrankfurtLocationPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative w-full min-h-[500px] flex items-center justify-center overflow-hidden">
          <OptimizedImage
            src="/assets/locations/frankfurt-hero"
            alt="Rundflüge ab Frankfurt Egelsbach über Skyline und Rhein-Main-Gebiet"
            title="Sightseeing-Flüge ab Frankfurt"
            width={1920}
            height={600}
            priority
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
            <Badge className="mb-4">EDFE</Badge>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-4">
              Rundflüge ab Frankfurt Egelsbach
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mb-2">
              Erleben Sie die spektakuläre Skyline von Mainhattan, den waldreichen Taunusund das gesamte
              Rhein-Main-Gebiet aus der Vogelperspektive.
            </p>
            <p className="text-sm text-muted-foreground italic mb-8">
              Hinweis: Die hier genannten Routen sind Vorschläge und dienen als Inspiration. Jeder Flug wird individuell
              mit Ihnen abgestimmt. Flüge ab Frankfurt Egelsbach können gegen Aufpreis auch ab Mainz-Finthen starten –
              und umgekehrt.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Plane className="h-5 w-5 text-primary" />
                <span>Skyline-Flüge</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <span>1-3 Passagiere</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                <span>30-60 Minuten</span>
              </div>
              <div className="flex items-center gap-2">
                <Euro className="h-5 w-5 text-primary" />
                <span>ab 129€</span>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Rundflüge ab Frankfurt Egelsbach</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
              Entdecken Sie unsere Flugrouten über Frankfurt, den Taunus und das Rhein-Main-Gebiet. Jeder Flug bietet
              spektakuläre Ausblicke auf die Region.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {flights.map((flight, index) => (
                <Link
                  key={index}
                  href={flight.href}
                  className="block group"
                  title={`Rundflug ${flight.title} ab Frankfurt - ${flight.duration} - ${flight.price}`}
                >
                  <Card className="hover:shadow-lg transition-shadow flex flex-col h-full">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <Badge variant="outline">
                          <MapPin className="h-3 w-3 mr-1" />
                          Frankfurt
                        </Badge>
                        <div className="text-right">
                          <div className="text-sm text-muted-foreground">{flight.duration}</div>
                          <div className="text-lg font-bold text-primary">{flight.price}</div>
                        </div>
                      </div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {flight.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col">
                      <p className="text-sm text-muted-foreground mb-4">{flight.description}</p>
                      <div className="space-y-2 mb-4">
                        {flight.highlights.map((highlight, i) => (
                          <div key={i} className="flex items-start gap-2 text-sm">
                            <Star className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-auto">
                        <div className="w-full py-2 px-4 bg-primary text-primary-foreground rounded-md text-center font-medium text-sm group-hover:bg-primary/90 transition-colors">
                          Details & Buchen
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-16 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-8 text-center">Flugplatz Frankfurt Egelsbach (EDFE)</h2>
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div>
                <p className="text-muted-foreground mb-6">
                  Der Flugplatz Egelsbach ist einer der verkehrsreichsten Flugplätze für Allgemeine Luftfahrt in Europa.
                  Südlich von Frankfurt gelegen, bietet er eine perfekte Infrastruktur und ist der perfekte
                  Ausgangspunkt für Rundflüge über die Metropolregion.
                </p>
                <p className="text-muted-foreground mb-6">
                  Von hier aus erreichen Sie in wenigen Minuten die Frankfurter Skyline, können über den Großen Feldberg
                  im Taunus fliegen oder das gesamte Rhein-Main-Gebiet bis zur Mündung in Kunden.
                </p>
                <div className="space-y-3">
                  <h3 className="font-semibold mb-4">Anfahrt & Parken</h3>
                  <div className="flex items-start gap-2 text-sm">
                    <Star className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Direkte Anbindung an A5 und A661</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <Star className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Kostenlose Parkplätze am Terminal</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <Star className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Ca. 20 Minuten vom Frankfurter Hauptbahnhof</span>
                  </div>
                </div>
              </div>
              <div className="bg-background p-6 rounded-lg border">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">Flugzeiten</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-6">
                  Rundflüge finden bei gutem Wetter statt. Der Flugplatz Egelsbach ist ganzjährig in Betrieb und bietet
                  flexible Terminoptionen – auch unter der Woche.
                </p>
                <div className="flex items-center gap-2 mb-4">
                  <Star className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">Unsere Highlights ab Frankfurt</h3>
                </div>
                <ul className="space-y-2 text-sm">
                  <li>• Frankfurter Skyline & Bankenviertel</li>
                  <li>• Römerberg & Paulskirche</li>
                  <li>• Großer Feldberg & Taunus</li>
                  <li>• Main-Verlauf bis zum Rhein</li>
                </ul>
              </div>
            </div>
            <div className="text-center mt-12">
              <Link
                href="/contact/"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition-colors"
              >
                <Phone className="h-5 w-5" />
                Beratung anfragen
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
