import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code2, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Semantic SEO - Dross:Media",
  description:
    "Semantische Optimierung durch Themen-Cluster, Entity-Beziehungen und kontextuelle Relevanz für AI-Verständnis.",
  keywords: ["Semantic SEO", "Topic Clusters", "Entity Relationships", "Contextual Relevance", "NLP SEO"],
}

export default function SemanticSEOPage() {
  const benefits = [
    "Themen-Cluster statt einzelner Keywords",
    "Entity-Beziehungen und Semantic Connections",
    "Kontextuelle Relevanz für bessere Rankings",
    "Topic Authority Aufbau",
    "Natural Language Processing Optimierung",
    "Content Depth und Comprehensiveness",
    "Internal Linking für Topical Authority",
    "Strukturierte Daten für Kontext-Signale",
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
                <Code2 className="h-12 w-12 text-primary" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-2">Semantic SEO</h1>
                <p className="text-xl text-muted-foreground">Von Keywords zu Themen und Bedeutungen</p>
              </div>
            </div>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Semantic SEO geht über Keyword-Optimierung hinaus und fokussiert sich auf Bedeutung, Kontext und
              thematische Relevanz. Suchmaschinen verstehen heute den semantischen Zusammenhang zwischen Begriffen – wir
              optimieren Ihre Inhalte für dieses tiefere Verständnis.
            </p>
          </div>

          {/* Benefits Section */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">Ihre Vorteile</CardTitle>
              <CardDescription>Maximale thematische Relevanz und Authority</CardDescription>
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

          {/* What is Semantic SEO */}
          <Card className="mb-12 bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl">Was ist Semantic SEO?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Semantic SEO optimiert für Bedeutung und Kontext statt einzelner Keywords. Google's BERT, MUM und andere
                NLP-Algorithmen verstehen:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Beziehungen zwischen Entitäten und Konzepten</li>
                <li>Kontext und User Intent hinter Suchanfragen</li>
                <li>Synonyme, verwandte Begriffe und semantische Variationen</li>
                <li>Thematische Tiefe und Comprehensiveness</li>
                <li>Topical Authority in spezifischen Themenbereichen</li>
              </ul>
              <p className="font-semibold mt-4">
                Semantic SEO bedeutet: Bauen Sie umfassende, thematisch tiefe Content-Cluster, die alle Aspekte eines
                Themas abdecken.
              </p>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Etablieren Sie Topical Authority</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Werden Sie zur führenden Quelle in Ihrem Themenbereich durch semantische Optimierung.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/contact/" title="Jetzt Semantic SEO Beratung anfragen">
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
