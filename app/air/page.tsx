import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plane, MapPin, Clock } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dross:Air - Rundflüge über Rheinhessen, Frankfurt & Bodensee",
  description:
    "Erleben Sie Schloss Neuschwanstein, die Frankfurter Skyline, den Loreley-Felsen und die Alpen aus der Vogelperspektive. Unvergessliche Rundflüge für 1-5 Passagiere.",
  keywords: ["Rundflüge", "Sightseeing", "Frankfurt", "Bodensee", "Mainz", "Neuschwanstein", "Cessna", "Bristell"],
}

const locations = [
  {
    code: "EDFZ",
    name: "Mainz",
    fullName: "Mainz-Finthen Flugplatz",
    region: "Rheinhessen & Rheingau",
    description: "Erleben Sie die Weinberge von Rheinhessen und den malerischen Rheingau aus der Vogelperspektive.",
    href: "/air/standorte/mainz/",
  },
  {
    code: "EDFE",
    name: "Frankfurt",
    fullName: "Frankfurt Egelsbach Flugplatz",
    region: "Rhein-Main-Gebiet",
    description: "Bestaunen Sie die Skyline von Manhattan und das Rhein-Main-Gebiet von oben.",
    href: "/air/standorte/frankfurt/",
  },
  {
    code: "EDNY",
    name: "Bodensee",
    fullName: "Friedrichshafen Flughafen",
    region: "Bodensee & Alpenvorland",
    description: "Genießen Sie atemberaubende Ausblicke über den Bodensee und die majestätischen Alpen.",
    href: "/air/standorte/bodensee/",
  },
]

const popularFlights = [
  {
    departure: "Mainz",
    title: "Loreley-Felsen",
    description: "Der legendäre Loreley-Felsen im UNESCO Welterbe Oberes Mittelrheintal – Deutschlands...",
    duration: "45-60 Min.",
    price: "ab 139€",
    href: "/air/rundflug/loreley/",
  },
  {
    departure: "Mainz",
    title: "Schloss Johannisberg",
    description: "Das älteste Riesling-Weingut der Welt – 900 Jahre Weinkultur im Rheingau erleben.",
    duration: "30-45 Min.",
    price: "ab 119€",
    href: "/air/rundflug/schloss-johannisberg/",
  },
  {
    departure: "Frankfurt",
    title: "Frankfurter Skyline",
    description: "Manhattan von oben – Deutschlands einzige Wolkenkratzer-Skyline aus der Vogelperspektive.",
    duration: "30-45 Min.",
    price: "ab 139€",
    href: "/air/rundflug/frankfurter-skyline/",
  },
  {
    departure: "Bodensee",
    title: "Schloss Neuschwanstein",
    description: "Das weltberühmte Märchenschloss König Ludwigs II. – Deutschlands meistbesuchte...",
    duration: "60 Min.",
    price: "ab 199€",
    href: "/air/rundflug/schloss-neuschwanstein/",
  },
  {
    departure: "Bodensee",
    title: "Zugspitze",
    description: "Deutschlands höchster Gipfel auf 2.962 Metern – das ultimative Alpenerlebnis aus der Luft.",
    duration: "60 Min.",
    price: "ab 244€",
    href: "/air/rundflug/zugspitze/",
  },
  {
    departure: "Bodensee",
    title: "Insel Mainau",
    description: "Die Blumeninsel im Bodensee – subtropisches Paradies mit Millionen Blumen und barockem...",
    duration: "30-45 Min.",
    price: "ab 139€",
    href: "/air/rundflug/insel-mainau/",
  },
]

export default function AirPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full min-h-[600px] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url(/assets/air-hero-lg.jpg)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center z-10">
            <Badge variant="outline" className="mb-4 bg-primary/10 backdrop-blur-sm">
              Sightseeing-Flüge ab 99€
            </Badge>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-balance mb-6">
              Rundflüge über Rheinhessen, Frankfurt & Bodensee
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-balance mb-8">
              Erleben Sie Schloss Neuschwanstein, die Frankfurter Skyline, den Loreley-Felsen und die Alpen aus der
              Vogelperspektive.
            </p>
            <p className="text-sm md:text-base text-muted-foreground mb-8">
              Unvergessliche Rundflüge für 1-5 Passagiere • Bristell RG, Tragschrauber, Cessna 172 & Cessna P210
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="#book/">Jetzt Rundflug buchen</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="backdrop-blur-sm bg-background/80">
                <Link href="#aircraft/">Unsere Flugzeuge</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="backdrop-blur-sm bg-background/80">
                <Link href="#locations/">Rundflüge entdecken</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Locations Section */}
        <section id="locations" className="w-full py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                1. Wählen Sie Ihren Abflugort
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {locations.map((location) => (
                <Link key={location.code} href={location.href} className="block group">
                  <Card className="hover:shadow-lg transition-shadow h-full">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <Badge variant="secondary">{location.code}</Badge>
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                        {location.name}
                      </CardTitle>
                      <CardDescription className="text-sm">{location.fullName}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm font-medium mb-2">{location.region}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{location.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Flights Section */}
        <section className="w-full py-16 md:py-24 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Beliebte Rundflüge</h2>
              <p className="text-lg text-muted-foreground">Unsere beliebtesten Flüge an allen Standorten</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularFlights.map((flight, index) => (
                <Link
                  key={index}
                  href={flight.href}
                  className="block group"
                  title={`Rundflug ${flight.title} ab ${flight.departure} - ${flight.duration} - ${flight.price}`}
                >
                  <Card className="hover:shadow-lg transition-shadow h-full">
                    <CardHeader>
                      <div className="flex items-start gap-2 mb-2">
                        <Badge variant="outline" className="text-xs">
                          <Plane className="h-3 w-3 mr-1" />
                          {flight.departure}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {flight.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{flight.description}</p>
                      <div className="flex items-center justify-between pt-4 border-t">
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span>{flight.duration}</span>
                        </div>
                        <div className="flex items-center gap-1 text-lg font-bold text-primary">
                          <span>{flight.price}</span>
                        </div>
                      </div>
                      <span className="inline-block w-full mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-md text-center text-sm font-medium group-hover:bg-primary/90 transition-colors">
                        Mehr erfahren
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Guest Testimonial */}
        <section className="w-full py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Card className="max-w-4xl mx-auto bg-primary/5">
              <CardContent className="pt-8 pb-8">
                <div className="text-center">
                  <p className="text-lg md:text-xl font-medium mb-4 text-balance">
                    "Über 500 zufriedene Passagiere – und Sie könnten der nächste sein!"
                  </p>
                  <p className="text-muted-foreground">Das sagen unsere Flugäste</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section id="book" className="w-full py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-balance">
                Bereit für Ihr Luftabenteuer?
              </h2>
              <p className="text-lg text-primary-foreground/90 text-balance">
                Buchen Sie jetzt Ihren unvergesslichen Rundflug über die schönsten Regionen Deutschlands.
              </p>
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact/">Jetzt Rundflug buchen</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
