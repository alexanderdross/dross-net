import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Calendar, User, ArrowLeft } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"
import OptimizedImage from "@/components/optimized-image"

export const metadata: Metadata = {
  title: "Verbesserungswürdig: Luftfahrthandbuch AIP VFR Deutschland nun kostenlos - Alexander Dross Blog",
  description:
    "Das Luftfahrthandbuch AIP VFR Deutschland steht endlich kostenlos zur Verfügung. Analyse der neuen Website und Verbesserungspotenziale.",
}

export default function ArticlePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <article className="w-full py-12">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <Link
              href="/alexander/blog/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8 transition-colors"
              title="Back to Blog"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>

            <header className="mb-8">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary">Aviation</Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Verbesserungswürdig: Luftfahrthandbuch AIP VFR Deutschland nun kostenlos
              </h1>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Alexander Dross
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  5. Januar 2023
                </span>
              </div>
            </header>

            <div className="mb-8 rounded-lg overflow-hidden">
              <OptimizedImage
                src="/assets/blog/aip-vfr-deutschland.jpg"
                alt="AIP VFR Deutschland Map"
                width={1200}
                height={600}
                className="w-full"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="lead text-xl text-muted-foreground mb-6">
                Das Luftfahrthandbuch AIP VFR Deutschland steht als Basis-Version endlich kostenlos zur Verfügung. Da
                die Website keine Suchmaske bietet, haben wir die wichtigsten Informationen zusammengestellt.
              </p>

              <h2>Die neue kostenlose AIP VFR</h2>
              <p>
                Nach Jahren kostenpflichtiger Angebote stellt die DFS (Deutsche Flugsicherung) nun eine kostenlose
                Basis-Version des Luftfahrthandbuchs AIP VFR Deutschland zur Verfügung. Dies ist ein wichtiger Schritt
                für die Allgemeine Luftfahrt, da diese Informationen für sicheres VFR-Fliegen unerlässlich sind.
              </p>

              <h2>Was enthält die AIP VFR?</h2>
              <p>Das Luftfahrthandbuch umfasst:</p>
              <ul>
                <li>Flugplatzdaten aller deutschen VFR-Flugplätze</li>
                <li>Luftraumstruktur und Beschränkungen</li>
                <li>An- und Abflugverfahren</li>
                <li>Funkfrequenzen und Kontaktinformationen</li>
                <li>NOTAMs und temporäre Beschränkungen</li>
                <li>Kartenmaterial im PDF-Format</li>
              </ul>

              <h2>Verbesserungspotenzial der Website</h2>
              <p>
                Leider lässt die Benutzerfreundlichkeit der neuen Website zu wünschen übrig. Folgende Probleme fallen
                auf:
              </p>
              <ul>
                <li>
                  <strong>Keine Suchfunktion:</strong> Man muss manuell durch Listen navigieren
                </li>
                <li>
                  <strong>Unübersichtliche Navigation:</strong> Informationen sind tief verschachtelt
                </li>
                <li>
                  <strong>Schlechte Mobile-Darstellung:</strong> Auf Smartphones kaum nutzbar
                </li>
                <li>
                  <strong>Langsame Ladezeiten:</strong> PDFs laden sehr langsam
                </li>
                <li>
                  <strong>Keine Favoritenfunktion:</strong> Häufig genutzte Flugplätze können nicht gespeichert werden
                </li>
              </ul>

              <h2>Workaround: Eigene Suchmaske</h2>
              <p>
                Um die Navigation zu erleichtern, habe ich eine einfache Übersicht mit Suchfunktion erstellt. Diese
                ermöglicht:
              </p>
              <ul>
                <li>Schnelle Volltextsuche nach Flugplätzen und ICAO-Codes</li>
                <li>Filterung nach Bundesländern</li>
                <li>Direkte Links zu den entsprechenden AIP-Seiten</li>
                <li>Mobile-optimierte Darstellung</li>
              </ul>

              <h2>Vergleich mit anderen Ländern</h2>
              <p>
                Ein Blick über die Grenze zeigt, dass es auch besser geht. Österreich und die Schweiz bieten moderne,
                durchsuchbare AIP-Portale mit ausgezeichneter Benutzerführung. Deutschland hat hier noch Nachholbedarf.
              </p>

              <h2>Fazit</h2>
              <p>
                Die kostenlose Bereitstellung der AIP VFR Deutschland ist ein wichtiger Schritt für mehr Transparenz und
                Sicherheit in der Allgemeinen Luftfahrt. Die Umsetzung der Website ist jedoch verbesserungswürdig und
                entspricht nicht modernen Webstandards. Hier wäre eine Überarbeitung mit Fokus auf
                Benutzerfreundlichkeit wünschenswert.
              </p>
            </div>

            <Card className="mt-12 p-6 bg-muted/50">
              <div className="flex gap-4 items-start">
                <OptimizedImage
                  src="/assets/alexander-dross-sm.jpg"
                  alt="Alexander Dross"
                  width={80}
                  height={80}
                  className="rounded-full"
                />
                <div>
                  <h3 className="font-semibold text-lg mb-2">About Alexander Dross</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    SEO Expert, Google Partner, and Digital Transformation Consultant specializing in AI Search
                    Optimization, Technical SEO, and Web Performance. Passionate about aviation technology and
                    open-source projects like Stratux.
                  </p>
                  <Link
                    href="/alexander/"
                    className="text-sm text-primary hover:underline"
                    title="View Alexander Dross CV and Portfolio"
                  >
                    View full profile →
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}
