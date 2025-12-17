import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, CheckCircle2, Sparkles, TrendingUp, Users, Zap } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "ChatGPT & LLM Optimization - Dross:Media",
  description:
    "Spezialisierte Optimierung für Large Language Models wie ChatGPT, Claude und Gemini. Erscheinen Sie in AI-generierten Antworten.",
  keywords: ["ChatGPT Optimization", "LLM SEO", "AI Language Models", "GPT SEO", "Claude Optimization"],
}

export default function ChatGPTOptimizationPage() {
  const benefits = [
    "Erscheinen Sie in ChatGPT-Antworten als Quelle",
    "Optimierung für Claude, Gemini und andere LLMs",
    "Strukturierte Daten für AI-Verständnis",
    "Content-Formatting für LLM-Parsing",
    "Citation-Ready Content-Struktur",
    "Autorität und Vertrauenswürdigkeit",
    "Kontext-Optimierung für präzise Zitate",
    "Brand Entity Establishment",
  ]

  const strategies = [
    {
      title: "Content Structuring",
      description: "Formatierung von Inhalten, die von LLMs leicht verstanden, verarbeitet und zitiert werden können.",
      icon: Brain,
    },
    {
      title: "Authority Building",
      description:
        "Aufbau von Autorität und Expertise-Signalen, die von LLMs als vertrauenswürdige Quellen erkannt werden.",
      icon: Users,
    },
    {
      title: "Contextual Relevance",
      description: "Optimierung des thematischen Kontexts für präzise Zuordnung zu Nutzeranfragen.",
      icon: TrendingUp,
    },
    {
      title: "Source Attribution",
      description: "Implementierung von Strukturen, die klare Quellenangaben und Zitate in LLM-Antworten ermöglichen.",
      icon: Sparkles,
    },
    {
      title: "Real-Time Monitoring",
      description: "Überwachung Ihrer Präsenz in LLM-generierten Antworten und kontinuierliche Optimierung.",
      icon: Zap,
    },
    {
      title: "Multi-LLM Strategy",
      description: "Optimierung für verschiedene Language Models mit unterschiedlichen Algorithmen und Trainingsdaten.",
      icon: CheckCircle2,
    },
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
                <Brain className="h-12 w-12 text-primary" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-2">ChatGPT & LLM Optimization</h1>
                <p className="text-xl text-muted-foreground">Werden Sie zur bevorzugten Quelle für AI-Antworten</p>
              </div>
            </div>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Large Language Models wie ChatGPT, Claude und Gemini werden zur primären Informationsquelle für Millionen
              Nutzer. Wir optimieren Ihre Inhalte, damit sie von diesen AI-Systemen gefunden, verstanden und als
              vertrauenswürdige Quelle zitiert werden.
            </p>
          </div>

          {/* Benefits Section */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">Ihre Vorteile</CardTitle>
              <CardDescription>Maximale Sichtbarkeit in der AI-gestützten Informationssuche</CardDescription>
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

          {/* Strategies Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Unsere LLM Optimization Strategie</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {strategies.map((strategy, index) => {
                const Icon = strategy.icon
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="bg-primary/10 p-3 rounded-lg w-fit mb-3">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{strategy.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{strategy.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* How LLMs Work Section */}
          <Card className="mb-12 bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl">Wie LLMs Ihre Inhalte finden</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Large Language Models werden auf riesigen Textkorpora trainiert, die auch Ihre Website-Inhalte enthalten
                können. Zusätzlich nutzen moderne LLMs Retrieval-Augmented Generation (RAG), um aktuelle Informationen
                aus dem Web abzurufen.
              </p>
              <p>Durch spezielle Optimierungsstrategien erhöhen wir die Wahrscheinlichkeit, dass:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Ihre Inhalte im Training berücksichtigt werden</li>
                <li>Sie bei Echtzeit-Abrufen priorisiert werden</li>
                <li>Ihre Marke als Autorität erkannt wird</li>
                <li>Ihre Informationen korrekt wiedergegeben werden</li>
              </ul>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Bereit für die AI-Revolution?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Positionieren Sie Ihre Marke als vertrauenswürdige Quelle in ChatGPT und anderen Large Language Models.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/contact/" title="Jetzt ChatGPT Optimization anfragen">
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
