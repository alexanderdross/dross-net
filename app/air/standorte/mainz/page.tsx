import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import OptimizedImage from "@/components/optimized-image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Plane, Users, Clock, Star, Euro } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Rundflüge ab Mainz-Finthen - Dross:Air",
  description:
    "Erleben Sie die Weinberge des Rheingaus, das romantische Rheintal mit seinen legendären Burgen und den Loreley-Felsen aus der Vogelperspektive.",
}

const flights = [
  {
    title: "Loreley-Felsen",
    description: "Der legendäre Loreley-Felsen im UNESCO Welterbe Oberes Mittelrheintal – Deutschlands...",
    price: "ab 139€",
    duration: "45-60 Min.",
    highlights: [
      "UNESCO Welterbe Oberes Mittelrheintal",
      "120 Meter hoher Schieferfelsen",
      "Über 40 Rheinburgen und Festungen",
    ],
    href: "/air/rundflug/loreley/",
  },
  {
    title: "Schloss Johannisberg",
    description: "Das älteste Riesling-Weingut der Welt – 900 Jahre Weinkultur im Rheingau erleben.",
    price: "ab 119€",
    duration: "30-45 Min.",
    highlights: [
      "Ältestes Riesling-Weingut der Welt",
      "Historisches Schloss mit Basilika",
      "Weltberühmte Rheingau-Weinlagen",
    ],
    href: "/air/rundflug/schloss-johannisberg/",
  },
  {
    title: "Kloster Eberbach",
    description: "Romanisches Zisterzienserkloster – weltberühmter Drehort von 'Der Name der Rose'.",
    price: "ab 119€",
    duration: "30-45 Min.",
    highlights: [
      "Drehort 'Der Name der Rose'",
      "Romanische Klosterarchitektur von 1136",
      "Größte mittelalterliche Weinpresse Europas",
    ],
    href: "/air/rundflug/kloster-eberbach/",
  },
  {
    title: "Mainzer Dom",
    description: "Der romanische Kaiserdom – über 1.000 Jahre Geschichte und Wahrzeichen der...",
    price: "ab 99€",
    duration: "30 Min.",
    highlights: [
      "Über 1.000 Jahre Baugeschichte",
      "Sechs markante romanische Domtürme",
      "Historische Altstadt mit Fachwerk",
    ],
    href: "/air/rundflug/mainzer-dom/",
  },
]

export default function MainzLocationPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative w-full h-[500px] overflow-hidden">
          <OptimizedImage
            src="/assets/locations/mainz-hero"
            alt="Rundflüge ab Mainz-Finthen Flugplatz über Rheingau und Rheintal"
            title="Sightseeing-Flüge ab Mainz"
            width={1920}
            height={500}
            priority
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex items-center z-10">
            <div className="max-w-4xl">
              <Badge className="mb-4">EDFZ</Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-4">
                Rundflüge ab Mainz-Finthen
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-2">
                Erleben Sie die Weinberge des Rheingaus, das romantische Rheintal mit seinen legendären Burgen und den
                Loreley-Felsen aus der Vogelperspektive.
              </p>
              <p className="text-sm text-muted-foreground italic mb-8">
                Hinweis: Die hier genannten Routen sind Vorschläge und dienen als Inspiration. Jeder Flug wird
                individuell mit Ihnen abgestimmt. Flüge ab Mainz-Finthen können gegen Aufpreis auch ab Frankfurt
                Egelsbach starten – und umgekehrt.
              </p>
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Plane className="h-5 w-5 text-primary" />
                  <span>6 Flugzeugtypen</span>
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
                  <span>ab 99€</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Rundflüge ab Mainz-Finthen</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
              Entdecken Sie unsere beliebtesten Flugrouten über Rheingau, Rheinhessen und das Rheintal. Jeder Flug
              bietet einzigartige Perspektiven auf die Region.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {flights.map((flight, index) => (
                <Link
                  key={index}
                  href={flight.href}
                  className="block group"
                  title={`Rundflug ${flight.title} ab Mainz - ${flight.duration} - ${flight.price}`}
                >
                  <Card className="hover:shadow-lg transition-shadow flex flex-col h-full">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <Badge variant="outline">
                          <MapPin className="h-3 w-3 mr-1" />
                          Mainz-Finthen
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
            <h2 className="text-2xl font-bold mb-4 text-center">Flugplatz Mainz-Finthen (EDFZ)</h2>
            <div className="max-w-3xl mx-auto text-muted-foreground">
              <p className="mb-4">
                Der Flugplatz Mainz-Finthen liegt nordwestlich der rheinland-pfälzischen Landeshauptstadt und ist einer
                der traditionsreichsten Sportflugplätze in Deutschland. Mit seiner verkehrsgünstigen Lage bietet er den
                idealen Ausgangspunkt für Rundflüge über das Rhein-Main-Gebiet.
              </p>
              <p>
                In nur wenigen Minuten erreichen Sie von hier aus die malerischen Weinberge des Rheingaus, das
                romantische Mittelrheintal oder die Frankfurter Skyline. Der Flugplatz verfügt über moderne
                Einrichtungen und ist gut mit dem Auto oder öffentlichen Verkehrsmitteln erreichbar.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
