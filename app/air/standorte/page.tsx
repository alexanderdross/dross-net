import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import OptimizedImage from "@/components/optimized-image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plane, Users, Clock } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Unsere Flugplatz-Standorte - Dross:Air",
  description:
    "Starten Sie Ihren unvergesslichen Rundflug von einem unserer drei Standorte. Ob Rheinhessen, Frankfurt oder der Bodensee – wir bringen Sie in die Luft.",
}

const locations = [
  {
    code: "EDFZ",
    name: "Mainz",
    fullName: "Mainz-Finthen Flugplatz",
    region: "Rheinhessen & Rheingau",
    description:
      "Erleben Sie die Weinberge des Rheingaus, das romantische Rheintal mit seinen legendären Burgen und den Loreley-Felsen aus der Vogelperspektive.",
    image: "/assets/locations/mainz",
    features: ["6 Flugzeugtypen verfügbar", "1-3 Passagiere", "30-60 Minuten Flugzeit"],
    href: "/air/standorte/mainz/",
  },
  {
    code: "EDFE",
    name: "Frankfurt",
    fullName: "Frankfurt Egelsbach Flugplatz",
    region: "Rhein-Main-Gebiet",
    description: "Bestaunen Sie die Skyline von Manhattan und das Rhein-Main-Gebiet von oben.",
    image: "/assets/locations/frankfurt",
    features: ["6 Flugzeugtypen verfügbar", "1-3 Passagiere", "30-60 Minuten Flugzeit"],
    href: "/air/standorte/frankfurt/",
  },
  {
    code: "EDNY",
    name: "Bodensee",
    fullName: "Friedrichshafen Flughafen",
    region: "Bodensee & Alpenvorland",
    description: "Genießen Sie atemberaubende Ausblicke über den Bodensee und die majestätischen Alpen.",
    image: "/assets/locations/bodensee",
    features: ["6 Flugzeugtypen verfügbar", "1-3 Passagiere", "30-60 Minuten Flugzeit"],
    href: "/air/standorte/bodensee/",
  },
]

export default function StandortePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="w-full py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-4">
                Unsere Flugplatz-Standorte
              </h1>
              <p className="text-lg text-muted-foreground">
                Starten Sie Ihren unvergesslichen Rundflug von einem unserer drei Standorte. Ob Rheinhessen, Frankfurt
                oder der Bodensee – wir bringen Sie in die Luft.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {locations.map((location) => (
                <Link
                  key={location.code}
                  href={location.href}
                  className="block group"
                  title={`Rundflüge ab ${location.name} - ${location.region} entdecken`}
                >
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
                    <div className="relative h-48">
                      <OptimizedImage
                        src={location.image}
                        alt={`${location.name} Flugplatz - ${location.fullName}`}
                        title={`Rundflüge ab ${location.name}`}
                        width={400}
                        height={300}
                        className="w-full h-full object-cover"
                      />
                      <Badge className="absolute top-4 left-4">{location.code}</Badge>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                        {location.name}
                      </CardTitle>
                      <CardDescription>{location.fullName}</CardDescription>
                      <p className="text-sm font-medium text-primary mt-2">{location.region}</p>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col">
                      <p className="text-sm text-muted-foreground mb-4">{location.description}</p>
                      <div className="space-y-2 mb-4">
                        {location.features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                            {index === 0 && <Plane className="h-4 w-4" />}
                            {index === 1 && <Users className="h-4 w-4" />}
                            {index === 2 && <Clock className="h-4 w-4" />}
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-auto">
                        <div className="w-full py-2 px-4 bg-primary text-primary-foreground rounded-md text-center font-medium group-hover:bg-primary/90 transition-colors">
                          Rundflüge ab {location.name}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Noch Fragen?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Wir beraten Sie gerne bei der Auswahl des passenden Standorts und der idealen Route.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/air/" title="Jetzt Rundflug buchen - Flugzeug auswählen und Termin vereinbaren">
                    Jetzt Rundflug buchen
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact/" title="Kontakt aufnehmen - Wir beraten Sie gerne">
                    Kontakt aufnehmen
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
