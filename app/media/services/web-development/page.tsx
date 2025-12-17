import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Check, Globe } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Web & Shop Development - Dross:Media",
  description:
    "Wir verwenden WordPress oder Drupal, um großartige und benutzerfreundliche Webseiten & Shops mit einem integrierten CMS zu erstellen. Unsere Lösungen sind von Grund auf für Performance und Suchmaschinenoptimierung konzipiert.",
}

export default function WebDevelopmentPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <div className="mb-8">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
              <Globe className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Web & Shop Development</h1>
            <p className="text-xl text-muted-foreground">
              Wir verwenden WordPress oder Drupal, um großartige und benutzerfreundliche Webseiten & Shops mit einem
              integrierten CMS zu erstellen. Unsere Lösungen sind von Grund auf für Performance und
              Suchmaschinenoptimierung konzipiert.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Ihre Vorteile</h2>
            <div className="space-y-4">
              {[
                "Responsive Design für alle Geräte",
                "SEO-optimierte Struktur von Anfang an",
                "Integriertes Content Management System",
                "Schnelle Ladezeiten & Performance",
                "DSGVO-konforme Implementierung",
                "Barrierefreiheit nach WCAG-Standards",
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                  </div>
                  <p className="text-foreground">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Unser Ansatz</h2>
            <div className="prose prose-gray max-w-none">
              <p>
                Jedes Webprojekt beginnt mit einer ausführlichen Analyse Ihrer Anforderungen und Ziele. Wir entwickeln
                maßgeschneiderte Lösungen, die nicht nur optisch überzeugen, sondern auch technisch auf dem neuesten
                Stand sind.
              </p>
              <p>
                Von der Konzeption über das Design bis zur Umsetzung begleiten wir Sie durch den gesamten Prozess. Nach
                dem Launch bieten wir kontinuierliche Wartung und Weiterentwicklung an.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg">
              <Link href="/contact/" title="Web & Shop Development Projekt besprechen - Kostenlose Beratung">
                Projekt besprechen
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/media/" title="Alle Dienstleistungen von Dross:Media anzeigen">
                Alle Dienstleistungen
              </Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
