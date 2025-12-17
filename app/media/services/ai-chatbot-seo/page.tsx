import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, CheckCircle2, TrendingUp, Users, Zap, Globe } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI Chatbot SEO - Dross:Media",
  description:
    "Die Konvergenz von Chat und Search ist da. Optimieren Sie Ihre Chatbot-Inhalte für maximale Sichtbarkeit in traditionellen und KI-Suchen.",
  keywords: ["AI Chatbot SEO", "Conversational SEO", "Chatbot Optimization", "Chat Search", "Voice Search"],
}

export default function AIchatbotSEOPage() {
  const benefits = [
    "Chatbot-Antworten in Suchergebnissen indizieren",
    "FAQ-Schema für Chatbot-Quellennutzung",
    "Chatbot-generierte Content-Indizierung",
    "Intent-basierte Antwortoptimierung",
    "Konversationelle Keywords optimieren",
    "Natural Language Processing Optimierung",
    "Voice-First Konversationsdesign",
    "Multi-Channel Chat-Sichtbarkeit",
  ]

  const optimizationAreas = [
    {
      title: "Konversationelles SEO",
      description:
        "Optimierung für natürlichsprachliche Anfragen und Chatbot-Interaktionen. Long-Tail Keywords im Frage-Format.",
      icon: MessageCircle,
    },
    {
      title: "Chatbot Content Index",
      description:
        "Strategien zur Indizierung von Chatbot-Antworten in Suchergebnissen. Sichtbarkeit für Chat-Interaktionen.",
      icon: CheckCircle2,
    },
    {
      title: "AI-Ready FAQs",
      description: "FAQ-Strukturen, die von externen Chatbots als Antwortquelle verwendet und zitiert werden können.",
      icon: Users,
    },
    {
      title: "Real-Time Optimization",
      description: "Kontinuierliche Anpassung basierend auf Chatbot-Performance-Daten und Nutzerinteraktionen.",
      icon: Zap,
    },
    {
      title: "Multi-Platform Integration",
      description: "Optimierung für verschiedene Chatbot-Plattformen: Website, WhatsApp, Facebook Messenger, etc.",
      icon: Globe,
    },
    {
      title: "Intent Mapping",
      description: "Systematische Zuordnung von Nutzerintentionen zu optimierten Chatbot-Antworten.",
      icon: TrendingUp,
    },
  ]

  const useCases = [
    {
      title: "E-Commerce Support",
      description: "Produktberatung und FAQ-Bots, die in Google Shopping und Produktsuchen erscheinen.",
    },
    {
      title: "Kundenservice",
      description: "Support-Chatbots mit SEO-optimierten Antworten für häufige Kundenanfragen.",
    },
    {
      title: "Lead Generation",
      description: "Conversational Landing Pages mit Chat-Interfaces für höhere Conversion.",
    },
    {
      title: "Knowledge Base",
      description: "Interaktive Wissensdatenbanken, die in Suchergebnissen als Rich Results erscheinen.",
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
                <MessageCircle className="h-12 w-12 text-primary" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-2">AI Chatbot SEO</h1>
                <p className="text-xl text-muted-foreground">Die Konvergenz von Chat und Search ist da.</p>
              </div>
            </div>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Chatbots werden zum zentralen Touchpoint für Kundeninteraktionen. Doch wie werden die Antworten Ihres
              Chatbots in Suchergebnissen gefunden? Wir optimieren Ihre Konversationsschnittstellen für maximale
              Sichtbarkeit – in traditionellen und KI-Suchen.
            </p>
          </div>

          {/* Benefits Section */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">Ihre Vorteile</CardTitle>
              <CardDescription>Profitieren Sie von der neuen konversationellen Suchlandschaft</CardDescription>
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

          {/* Optimization Areas */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Optimierungsbereiche</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {optimizationAreas.map((area, index) => {
                const Icon = area.icon
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="bg-primary/10 p-3 rounded-lg w-fit mb-3">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{area.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{area.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* Use Cases */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Anwendungsbereiche</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {useCases.map((useCase, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{useCase.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{useCase.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Convergence Section */}
          <Card className="mb-12 bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl">Die Konvergenz von Chat und Search</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Google integriert zunehmend Chat-ähnliche Erfahrungen in die Suche. Unternehmen, die ihre Chatbots
                SEO-optimiert haben, profitieren doppelt: Ihre Chatbot-Inhalte erscheinen in Suchergebnissen und ihre
                Website-Inhalte werden von Chatbots zitiert.
              </p>
              <p>
                Wir schaffen diese bidirektionale Sichtbarkeit – damit Sie in der neuen konversationellen Suchlandschaft
                optimal positioniert sind.
              </p>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Bereit für Conversational SEO?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Lassen Sie uns Ihre Chatbot-Strategie analysieren und für maximale Sichtbarkeit optimieren.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/contact/" title="Jetzt Chatbot SEO Beratung anfragen">
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
