import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, CheckCircle2, Users, Shield, Star, TrendingUp } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "E-E-A-T Optimization - Dross:Media",
  description:
    "Experience, Expertise, Authoritativeness, Trust – Optimierung nach Googles Qualitätsrichtlinien für KI-gestützte Bewertung.",
  keywords: ["E-E-A-T", "EEAT", "Google Quality Guidelines", "Expertise", "Authoritativeness", "Trustworthiness"],
}

export default function EEATOptimizationPage() {
  const benefits = [
    "Demonstration von Expertise und Erfahrung",
    "Aufbau von Autorität in Ihrer Nische",
    "Vertrauenssignale für Nutzer und Algorithmen",
    "Author Bylines und Credentials",
    "Review und Testimonial Integration",
    "About Us und Team-Seiten Optimierung",
    "Citations und Backlinks von Autoritäten",
    "Transparenz und Accountability",
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-muted/30">
        <div className="container mx-auto px-4 py-12 max-w-7xl">
          {/* Hero Section */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-primary/10 p-4 rounded-2xl">
                <Award className="h-12 w-12 text-primary" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-2">E-E-A-T Optimization</h1>
                <p className="text-xl text-muted-foreground">Expertise, Erfahrung, Autorität, Vertrauen</p>
              </div>
            </div>
            <p className="text-lg text-muted-foreground max-w-3xl">
              E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) ist Googles Bewertungsframework für
              Content-Qualität. Besonders wichtig für YMYL-Themen (Your Money Your Life), aber zunehmend relevant für
              alle Websites, da AI-Systeme Vertrauenssignale für Quellenauswahl nutzen.
            </p>
          </div>

          {/* Benefits Section */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">Ihre Vorteile</CardTitle>
              <CardDescription>Etablierung als vertrauenswürdige Expertenquelle</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* The Four E's */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Die vier Säulen von E-E-A-T</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <div className="bg-primary/10 p-3 rounded-lg w-fit mb-3">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Experience (Erfahrung)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    First-hand Erfahrung mit dem Thema. Zeigen Sie, dass Sie das Produkt/Service selbst genutzt oder die
                    Situation erlebt haben.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="bg-primary/10 p-3 rounded-lg w-fit mb-3">
                    <Star className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Expertise (Fachwissen)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Fachliche Qualifikation und Wissen. Credentials, Ausbildung, Zertifikate und nachweisbare Expertise
                    im Themenbereich.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="bg-primary/10 p-3 rounded-lg w-fit mb-3">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Authoritativeness (Autorität)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Anerkennung als führende Quelle im Themenbereich. Citations, Backlinks von Autoritäten, Brand
                    Mentions und Reputation.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="bg-primary/10 p-3 rounded-lg w-fit mb-3">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Trustworthiness (Vertrauen)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Vertrauenswürdigkeit der Website und Autoren. HTTPS, transparente Kontaktinformationen, Reviews,
                    Datenschutz und sichere Zahlungsabwicklung.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Why E-E-A-T Matters */}
          <Card className="mb-12 bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl">Warum E-E-A-T entscheidend ist</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Google's Quality Rater Guidelines betonen E-E-A-T als primären Bewertungsfaktor. Aber noch wichtiger:
                AI- Systeme wie ChatGPT und Google SGE nutzen ähnliche Signale, um vertrauenswürdige Quellen zu
                identifizieren.
              </p>
              <p className="font-semibold">
                Eine starke E-E-A-T-Präsenz bedeutet bessere Rankings in traditioneller Suche UND höhere
                Wahrscheinlichkeit, von AI-Systemen zitiert zu werden.
              </p>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Stärken Sie Ihr E-E-A-T</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Etablieren Sie Ihre Website als vertrauenswürdige Expertenquelle nach Googles Qualitätsrichtlinien.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/contact/" title="Jetzt E-E-A-T Optimization anfragen">
                  Jetzt Beratung anfragen
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/media/#ki-geo/" title="Zurück zu KI & GEO Services">
                  Alle KI & GEO Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
