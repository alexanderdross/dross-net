import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Lightbulb, Target, TrendingUp, Users } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "SEO Consulting & Strategie | Dross:Media",
  description:
    "Die richtige SEO Strategie bildet das Fundament für den langfristigen Erfolg Ihrer Webseite. Als SEO Lead eines Pharmakonzerns helfe ich Ihnen dabei.",
  keywords: ["SEO Strategie", "SEO Consulting", "SEO Beratung", "Content Strategie", "Keyword Strategie"],
}

export default function SEOStrategyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="w-full py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="flex flex-col items-center text-center space-y-6 max-w-4xl mx-auto">
              <Badge variant="outline" className="bg-primary/10">
                <Lightbulb className="w-4 h-4 mr-2" />
                SEO Consulting
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-balance">
                SEO Consulting & Strategie
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl text-balance">
                Die richtige SEO Strategie bildet das Fundament für den langfristigen Erfolg Ihrer Webseite. Als SEO
                Lead eines Pharmakonzerns helfe ich Ihnen dabei.
              </p>
              <Button asChild size="lg">
                <Link href="/contact/">Beratung anfragen</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <h2 className="text-3xl font-bold mb-8 text-center">Strategische SEO Beratung</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Zieldefinition</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Klare Definition messbarer SEO-Ziele basierend auf Ihren Business-Zielen
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Zielgruppen-Analyse</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Tiefes Verständnis Ihrer Zielgruppen und deren Suchverhalten
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Roadmap</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Entwicklung einer priorisierten Roadmap mit Quick Wins und langfristigen Zielen
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Lightbulb className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Ongoing Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Kontinuierliche Beratung und Anpassung der Strategie basierend auf Ergebnissen
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl text-center">
            <h2 className="text-3xl font-bold mb-4">Bereit für eine nachhaltige SEO-Strategie?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Lassen Sie uns gemeinsam eine Strategie entwickeln, die Ihre Webseite langfristig erfolgreich macht.
            </p>
            <Button asChild size="lg">
              <Link href="/contact/">Jetzt Beratung anfragen</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
