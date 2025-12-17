import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import OptimizedImage from "@/components/optimized-image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Plane, Users, Clock, Star, Euro } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Rundflüge ab Bodensee Friedrichshafen - Dross:Air",
  description:
    "Erleben Sie den glitzernden Bodensee, das majestätische Alpenpanorama, Schloss Neuschwanstein und die Zugspitze aus der Vogelperspektive.",
}

const flights = [
  {
    title: "Schloss Neuschwanstein",
    description: "Das weltberühmte Märchenschloss König Ludwigs II. – Deutschlands meistbesuchte...",
    price: "ab 199€",
    duration: "60-90 Min.",
    highlights: [
      "Weltberühmtes Märchenschloss König Ludwigs II.",
      "Meistbesuchte Sehenswürdigkeit Deutschlands",
      "Schloss Hohenschwangau und Marienbrücke",
    ],
    href: "/air/rundflug/schloss-neuschwanstein/",
  },
  {
    title: "Zugspitze",
    description: "Deutschlands höchster Gipfel auf 2.962 Metern – das ultimative Alpenerlebnis aus der Luft.",
    price: "ab 244€",
    duration: "90-120 Min.",
    highlights: [
      "Deutschlands höchster Berg (2.962m)",
      "Schloss Neuschwanstein aus der Vogelperspektive",
      "Eibsee – türkisblauer Bergsee am Zugspitz-Fuß",
    ],
    href: "/air/rundflug/zugspitze/",
  },
  {
    title: "Insel Mainau",
    description: "Die Blumeninsel im Bodensee – subtropisches Paradies mit Millionen Blumen und barockem...",
    price: "ab 139€",
    duration: "45-60 Min.",
    highlights: ["Subtropische Blumeninsel mit Palmen", "Barockes Schloss Bernadotte", "Millionen saisonaler Blumen"],
    href: "/air/rundflug/insel-mainau/",
  },
  {
    title: "Rheinfall Schaffhausen",
    description: "Europas größter Wasserfall – 23 Meter Fallhöhe, 150 Meter Breite und 600.000 Liter pro Sekunde.",
    price: "ab 169€",
    duration: "60-75 Min.",
    highlights: [
      "Europas größter Wasserfall",
      "23 Meter Fallhöhe, 150 Meter Breite",
      "Bis zu 600.000 Liter pro Sekunde",
    ],
    href: "/air/rundflug/rheinfall-schaffhausen/",
  },
  {
    title: "Lindau Inselstadt",
    description: "Die malerische Inselstadt im Bodensee – bayerische Hafenromantik mit Alpenkulisse.",
    price: "ab 129€",
    duration: "45-60 Min.",
    highlights: [
      "Historische Inselstadt im Bodensee",
      "Berühmte Hafeneinfahrt mit Löwe und Leuchtturm",
      "Mittelalterliche Altstadt mit Fachwerk",
    ],
    href: "/air/rundflug/lindau-inselstadt/",
  },
  {
    title: "Mont Blanc",
    description: "Das Dach Europas auf 4.810 Metern – der höchste Berg der Alpen und Westeuropas.",
    price: "ab 244€",
    duration: "120-150 Min.",
    highlights: [
      "Höchster Berg der Alpen und Westeuropas (4.810m)",
      "Spektakuläre Gletscherwelt mit ewigem Eis",
      "Mer de Glace – größter Gletscher Frankreichs",
    ],
    href: "/air/rundflug/mont-blanc/",
  },
  {
    title: "Dolomiten & Gardasee",
    description: "UNESCO Weltnaturerbe Dolomiten und mediterraner Gardasee – Alpendrania trifft...",
    price: "ab 460€",
    duration: "180-210 Min.",
    highlights: [
      "Dolomiten – UNESCO Weltnaturerbe seit 2009",
      "Gardasee – größter See Italiens",
      "Reschenpass mit versunkenem Kirchturm",
    ],
    href: "/air/rundflug/dolomiten-gardasee/",
  },
  {
    title: "Matterhorn",
    description: "Das Wahrzeichen der Schweiz auf 4.478 Metern – der berühmteste Berggipfel der Welt.",
    price: "ab 460€",
    duration: "180-210 Min.",
    highlights: [
      "Matterhorn – berühmtester Alpengipfel (4.478m)",
      "Unverwachselbare Pyramidensilhouette",
      "Aletschgletscher – längster Alpengletscher",
    ],
    href: "/air/rundflug/matterhorn/",
  },
]

export default function BodenseeLocationPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative w-full min-h-[500px] flex items-center justify-center overflow-hidden">
          <OptimizedImage
            src="/assets/locations/bodensee-hero"
            alt="Rundflüge ab Bodensee Friedrichshafen über Alpen und Bodensee"
            title="Sightseeing-Flüge ab Bodensee"
            width={1920}
            height={600}
            priority
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
            <Badge className="mb-4">EDNY</Badge>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-4">
              Rundflüge ab Bodensee Friedrichshafen
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mb-8">
              Erleben Sie den glitzernden Bodensee, das majestätische Alpenpanorama, Schloss Neuschwanstein und die
              Zugspitze aus der Vogelperspektive.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Plane className="h-5 w-5 text-primary" />
                <span>Alpenflüge</span>
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
            <h2 className="text-3xl font-bold mb-12 text-center">Rundflüge ab Friedrichshafen</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
              Entdecken Sie unsere spektakulären Flugrouten über den Bodensee, die Alpen und die Region Dreiländereck.
              Jeder Flug bietet atemberaubende Perspektiven.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {flights.map((flight, index) => (
                <Link
                  key={index}
                  href={flight.href}
                  className="block group"
                  title={`Rundflug ${flight.title} ab Bodensee - ${flight.duration} - ${flight.price}`}
                >
                  <Card className="hover:shadow-lg transition-shadow flex flex-col h-full">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <Badge variant="outline">
                          <MapPin className="h-3 w-3 mr-1" />
                          Friedrichshafen
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
      </main>
      <Footer />
    </div>
  )
}
