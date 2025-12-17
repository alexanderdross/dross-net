import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import OptimizedImage from "@/components/optimized-image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin, Plane, Users } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Schloss Johannisberg Rundflug ab Mainz | Dross:Air",
  description:
    "Das älteste Riesling-Weingut der Welt – 900 Jahre Weinkultur im Rheingau erleben. Rundflug ab Mainz-Finthen.",
}

export default function JohannisbergFlightPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative w-full min-h-[400px] flex items-center justify-center overflow-hidden">
          <OptimizedImage
            src="/assets/flights/johannisberg-hero"
            alt="Schloss Johannisberg Rundflug über Rheingau"
            title="Schloss Johannisberg Rundflug"
            width={1920}
            height={600}
            loading="eager"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
          <div className="relative container mx-auto px-4 md:px-6 text-center z-10">
            <Badge variant="outline" className="mb-4 bg-primary/10 backdrop-blur-sm">
              ab Mainz
            </Badge>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-balance mb-6">
              Schloss Johannisberg Rundflug
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Das älteste Riesling-Weingut der Welt – 900 Jahre Weinkultur
            </p>
          </div>
        </section>

        <section className="w-full py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-4">Über diesen Rundflug</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Erleben Sie das berühmte Schloss Johannisberg aus der Vogelperspektive – das ältestes
                    Riesling-Weingut der Welt mit 900 Jahren Weinkultur im Rheingau. Dieser Rundflug führt Sie über die
                    malerischen Weinberge des Rheingaus, eine der bedeutendsten Weinregionen Deutschlands.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Von der Luft aus genießen Sie den atemberaubenden Blick auf die terrassenförmig angelegten
                    Weinberge, den Rhein und die historischen Weingüter, die diese Region weltberühmt gemacht haben.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4">Highlights</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Schloss Johannisberg – ältestes Riesling-Weingut der Welt</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>900 Jahre Weinkultur im Rheingau</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Terrassenförmige Weinberge</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Historische Weingüter und Klöster</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Panoramablick über den Rhein</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="lg:col-span-1">
                <Card className="sticky top-20">
                  <CardContent className="pt-6">
                    <div className="space-y-6">
                      <div>
                        <div className="text-3xl font-bold text-primary mb-2">ab 119€</div>
                        <p className="text-sm text-muted-foreground">pro Person</p>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-center gap-3 text-sm">
                          <Clock className="h-5 w-5 text-muted-foreground" />
                          <div>
                            <div className="font-medium">30-45 Minuten</div>
                            <div className="text-muted-foreground">Flugdauer</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                          <MapPin className="h-5 w-5 text-muted-foreground" />
                          <div>
                            <div className="font-medium">Mainz-Finthen (EDFZ)</div>
                            <div className="text-muted-foreground">Abflugort</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                          <Plane className="h-5 w-5 text-muted-foreground" />
                          <div>
                            <div className="font-medium">Cessna 172 / Bristell RG</div>
                            <div className="text-muted-foreground">Flugzeugtyp</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                          <Users className="h-5 w-5 text-muted-foreground" />
                          <div>
                            <div className="font-medium">1-3 Passagiere</div>
                            <div className="text-muted-foreground">Kapazität</div>
                          </div>
                        </div>
                      </div>

                      <Button asChild className="w-full" size="lg">
                        <Link href="/contact/">Jetzt buchen</Link>
                      </Button>

                      <p className="text-xs text-center text-muted-foreground">
                        Buchungsanfrage unverbindlich. Wir melden uns zeitnah bei Ihnen.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
