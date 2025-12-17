import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import OptimizedImage from "@/components/optimized-image"
import { Badge } from "@/components/ui/badge"
import { MapPin, Users, Clock, Star, Euro } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Rüdesheim am Rhein Rundflug - Dross:Air",
  description:
    "Drosselgasse, Niederwalddenkmal und Weinberge – Deutschlands romantischster Weinort aus der Vogelperspektive mit steilen Rheingau-Weinbergterrassen.",
}

export default function RuedesheimFlightPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative w-full min-h-[500px] flex items-center justify-center overflow-hidden">
          <OptimizedImage
            src="/assets/flights/ruedesheim-hero.jpg"
            alt="Rüdesheim am Rhein Rundflug über Drosselgasse und Weinberge"
            title="Rüdesheim Rundflug"
            width={1920}
            height={600}
            loading="eager"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
          <div className="relative container mx-auto px-4 md:px-6 z-10">
            <Badge className="mb-4">EDFE</Badge>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-4">Rüdesheim am Rhein</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mb-8">
              Drosselgasse, Niederwalddenkmal und Weinberge – Deutschlands romantischster Weinort aus der
              Vogelperspektive mit steilen Rheingau-Weinbergterrassen.
            </p>
            <div className="flex items-center gap-6 text-sm flex-wrap">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                <span>ab Frankfurt Egelsbach</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                <span>30-45 Minuten</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <span>1-3 Passagiere</span>
              </div>
              <div className="flex items-center gap-2">
                <Euro className="h-5 w-5 text-primary" />
                <span className="text-2xl font-bold text-primary">ab 129€</span>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div>
                <h2 className="text-3xl font-bold mb-6">Über diesen Rundflug</h2>
                <p className="text-muted-foreground mb-4">
                  Erleben Sie Rüdesheim am Rhein aus der Vogelperspektive – den romantischsten Weinort Deutschlands mit
                  seiner weltberühmten Drosselgasse und den spektakulären Steillagen-Weinbergen des Rheingaus.
                </p>
                <p className="text-muted-foreground mb-4">
                  Das imposante Niederwalddenkmal mit der Germania-Statue thront über der Stadt und bietet einen
                  atemberaubenden Blick auf das romantische Rheintal. Die steilen Weinbergterrassen ziehen sich
                  malerisch die Hänge hinauf.
                </p>
                <p className="text-muted-foreground">
                  Während des Fluges genießen Sie spektakuläre Ausblicke auf die Altstadt, die Drosselgasse, das
                  Niederwalddenkmal und die weltberühmten Rheingau-Weinlagen.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-6">Highlights</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Star className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold">Niederwalddenkmal mit Germania-Statue</div>
                      <div className="text-sm text-muted-foreground">Monumentales Denkmal über dem Rheintal</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Star className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold">Weltberühmte Drosselgasse</div>
                      <div className="text-sm text-muted-foreground">Malerische Weingasse mit historischem Flair</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Star className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold">Steile Weinbergterrassen des Rheingaus</div>
                      <div className="text-sm text-muted-foreground">Weltberühmte Riesling-Lagen in Steilhanglage</div>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <Link
                    href="/contact/?topic=dross-air/"
                    className="inline-flex items-center justify-center w-full bg-primary text-primary-foreground px-8 py-4 rounded-md hover:bg-primary/90 transition-colors font-semibold"
                  >
                    Jetzt anfragen & buchen
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
