import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Globe,
  Search,
  Code,
  Languages,
  MapPin,
  FileSearch,
  RotateCcw,
  Lightbulb,
  Trash2,
  Code2,
  Sparkles,
  Brain,
  Database,
  TrendingUp,
  Users,
  Award,
} from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"
import OptimizedImage from "@/components/optimized-image"

export const metadata: Metadata = {
  title: "Dross:Media - AI Search, GEO & SEO Strategie für die Suche von morgen",
  description:
    "Als Google Partner zertifizierter Experte und mehr als 15 Jahren Erfahrung führe ich Ihre Webseite zum messbaren Erfolg! SEO, GEO, AI Search Optimization und Web Development.",
  keywords: [
    "SEO",
    "GEO",
    "AI Search",
    "Suchmaschinenoptimierung",
    "Google Partner",
    "Web Development",
    "Digital Marketing",
  ],
}

const services = [
  {
    icon: Globe,
    title: "Web & Shop Development",
    description:
      "Wir verwenden WordPress oder Drupal, um großartige und benutzerfreundliche Webseiten & Shops mit einem integrierten CMS zu erstellen.",
    href: "/media/services/web-development/",
  },
  {
    icon: Search,
    title: "Suchmaschinenoptimierung",
    description:
      "Maßnahmen, mit dem Ziel, die Sichtbarkeit Ihrer Webseite in der organischen (kostenlosen) Suche durch bessere Rankings zu erhöhen.",
    href: "/media/services/suchmaschinenoptimierung/",
  },
  {
    icon: Code2,
    title: "Technisches / OnPage SEO",
    description:
      "Optimierung des Website Quellcodes nach den Google-Richtlinien für Webmaster, sodass Suchmaschinen Inhalte besser verstehen.",
    href: "/media/services/technical-seo/",
  },
  {
    icon: Languages,
    title: "Internationales SEO",
    description:
      "Soll sich Ihre Webseite nicht nur lokal etablieren, so sind einige technische Änderungen notwendig, damit diese global ein Erfolg wird.",
    href: "/media/services/international-seo/",
  },
  {
    icon: MapPin,
    title: "Local SEO & Google Business",
    description:
      "Als lokales Unternehmen ist es wichtig, dass Ihre Webseite von potenziellen Kunden in der Umgebung wahrgenommen werden.",
    href: "/media/services/local-seo/",
  },
  {
    icon: FileSearch,
    title: "SEO Audit",
    description:
      "Wie stehen Sie gegenüber Ihrer Mitbewerber? Eine SEO Analyse ist die Grundlage jeder Webseiten Optimierung und zeigt Potenziale auf.",
    href: "/media/services/seo-audit/",
  },
  {
    icon: RotateCcw,
    title: "Website Relaunch",
    description:
      "Neue Domain, frisches Design, neues CMS? Wir helfen Ihren Suchmaschinen Bots nicht zu verwirren und Rankingverlust nach einem Relaunch zu vermeiden.",
    href: "/media/services/website-relaunch/",
  },
  {
    icon: Lightbulb,
    title: "SEO Consulting & Strategie",
    description:
      "Die richtige SEO Strategie bildet das Fundament für den langfristigen Erfolg Ihrer Webseite. – Als SEO Lead eines Pharmakonzerns helfe ich Ihnen dabei.",
    href: "/media/services/seo-strategy/",
  },
  {
    icon: Trash2,
    title: "Google Einträge löschen",
    description:
      "Unfahre Bewertungen, falsche Daten, etc – Ich helfe Ihnen weiter, wenn Sie aus dem Suchmaschinen Index unrichtig abgegebene Kommentare aus dem Suchmaschinen Index löschen möchten.",
    href: "/media/services/delete-google-entries/",
  },
  {
    icon: Code,
    title: "n8n Workflow Automation",
    description:
      "Automatisierung von Marketing- und Business-Prozessen mit n8n. Verbinden Sie Ihre Tools und sparen Sie Zeit durch intelligente Workflows.",
    href: "/media/services/n8n-workflow-automation/",
  },
  {
    icon: Code2,
    title: "Programmatic SEO",
    description:
      "Automatisierte Seitenerstellung im großen Maßstab für maximale organische Sichtbarkeit bei Produktkatalogen und lokalen Landingpages.",
    href: "/media/services/programmatic-seo/",
  },
]

const aiGeoServices = [
  {
    icon: Sparkles,
    title: "AI Search Optimization",
    description:
      "Optimierung für KI-Assistenten wie ChatGPT, Google SGE, Bing Copilot und Perplexity. Strukturierte Daten und Content-Strategien für die KI-gestützte Suche.",
    href: "/media/services/ai-search/",
  },
  {
    icon: Brain,
    title: "GEO Optimization",
    description:
      "Generative Engine Optimization – Positionieren Sie Ihre Marke in KI-generierten Antworten und werden Sie zur vertrauenswürdigen Quelle.",
    href: "/media/services/geo-optimization/",
  },
  {
    icon: Database,
    title: "Schema.org & Structured Data",
    description:
      "Implementierung von strukturierten Daten für maximale Sichtbarkeit in Search und AI Answer Engines. Knowledge Graph Optimierung.",
    href: "/media/services/schema-implementation/",
  },
  {
    icon: TrendingUp,
    title: "Answer Engine Optimization (AEO)",
    description:
      "Optimieren Sie Ihre Inhalte für direkte Antworten in Suchmaschinen und AI-Assistenten. Featured Snippets und Position Zero Strategien.",
    href: "/media/services/answer-engine-optimization/",
  },
  {
    icon: Globe,
    title: "ChatGPT & LLM Optimization",
    description:
      "Spezialisierte Optimierung für Large Language Models wie ChatGPT, Claude und Gemini. Erscheinen Sie in AI-generierten Antworten.",
    href: "/media/services/chatgpt-optimization/",
  },
  {
    icon: Search,
    title: "Google SGE Optimization",
    description:
      "Search Generative Experience Optimierung – Bereiten Sie Ihre Website auf Googles KI-gestützte Suchergebnisse vor.",
    href: "/media/services/google-sge/",
  },
  {
    icon: Lightbulb,
    title: "Knowledge Graph Optimization",
    description:
      "Aufbau und Optimierung Ihrer Präsenz im Google Knowledge Graph und anderen Wissensdatenbanken für maximale Autorität.",
    href: "/media/services/knowledge-graph/",
  },
  {
    icon: Users,
    title: "Entity SEO",
    description:
      "Etablierung Ihrer Marke als anerkannte Entität in Suchmaschinen. Brand Entity Optimization für bessere KI-Erkennung.",
    href: "/media/services/entity-seo/",
  },
  {
    icon: Award,
    title: "E-E-A-T Optimization",
    description:
      "Experience, Expertise, Authoritativeness, Trust – Optimierung nach Googles Qualitätsrichtlinien für KI-gestützte Bewertung.",
    href: "/media/services/eeat-optimization/",
  },
  {
    icon: Code2,
    title: "Semantic SEO",
    description:
      "Semantische Optimierung durch Themen-Cluster, Entity-Beziehungen und kontextuelle Relevanz für AI-Verständnis.",
    href: "/media/services/semantic-seo/",
  },
  {
    icon: FileSearch,
    title: "AI Content Strategy",
    description:
      "Entwicklung einer Content-Strategie, die sowohl für Menschen als auch für KI-Systeme optimiert ist. Maximale Reichweite in allen Kanälen.",
    href: "/media/services/ai-content-strategy/",
  },
  {
    icon: Sparkles,
    title: "Voice Search & AI Assistant SEO",
    description:
      "Optimierung für Sprachsuche und Smart Assistants wie Alexa, Siri und Google Assistant. Conversational SEO für natürliche Sprachanfragen.",
    href: "/media/services/voice-search-optimization/",
  },
]

const successStories = [
  {
    company: "E-Commerce Plattform",
    industry: "Retail",
    results: "+180% organischer Traffic in 8 Monaten",
    description:
      "Durch gezielte technische SEO-Optimierung und Content-Strategie konnten wir den organischen Traffic um 180% steigern und die Conversion-Rate um 45% erhöhen.",
    icon: TrendingUp,
    metrics: [
      { label: "Traffic", value: "+180%" },
      { label: "Conversions", value: "+45%" },
      { label: "Rankings Top 3", value: "120+" },
    ],
  },
  {
    company: "SaaS Unternehmen",
    industry: "Software",
    results: "60+ internationale Märkte erschlossen",
    description:
      "Erfolgreiche Internationalisierung der SEO-Strategie für 60+ Länder mit lokalisierten Content-Strategien und technischer Implementierung von hreflang.",
    icon: Users,
    metrics: [
      { label: "Märkte", value: "60+" },
      { label: "Keywords Top 10", value: "2,400+" },
      { label: "ROI", value: "340%" },
    ],
  },
  {
    company: "Pharma Konzern",
    industry: "Healthcare",
    results: "Suchmaschinen-Compliance & Ranking-Schutz",
    description:
      "Als SEO Lead implementierte ich eine umfassende Compliance-Strategie für regulierte Märkte und schützte kritische Rankings während eines Website-Relaunchs.",
    icon: Award,
    metrics: [
      { label: "Websites", value: "2,000+" },
      { label: "Ranking-Erhalt", value: "99.2%" },
      { label: "Kosteneinsparung", value: "35%" },
    ],
  },
]

const clientLogos = [
  {
    name: "Trade:Aero",
    url: "/assets/logos/trade-aero-logo.jpg",
    width: 180,
    height: 60,
  },
  {
    name: "AIP:Aero",
    url: "/assets/logos/aip-aero-logo.jpg",
    width: 180,
    height: 60,
  },
  {
    name: "Dross:Aviation",
    url: "/assets/logos/dross-aviation-logo.jpg",
    width: 180,
    height: 60,
  },
  {
    name: "Dross:Air",
    url: "/assets/logos/dross-air-logo.jpg",
    width: 180,
    height: 60,
  },
  {
    name: "Alexander Dross",
    url: "/assets/logos/alexander-dross-logo.jpg",
    width: 180,
    height: 60,
  },
  {
    name: "Dross:Blog",
    url: "/assets/logos/dross-blog-logo.jpg",
    width: 180,
    height: 60,
  },
]

const faqItems = [
  {
    question: "Was kostet Suchmaschinenoptimierung (SEO)?",
    answer:
      "Die Kosten für SEO variieren je nach Umfang und Komplexität Ihres Projekts. Faktoren wie die Größe Ihrer Website, Wettbewerbsintensität, gewünschte Ziele und der aktuelle SEO-Status spielen eine Rolle. Nach einer kostenlosen Analyse erstelle ich Ihnen ein individuelles Angebot, das genau auf Ihre Bedürfnisse zugeschnitten ist.",
  },
  {
    question: "Wie lange dauert es, bis SEO Ergebnisse sichtbar werden?",
    answer:
      "SEO ist eine langfristige Strategie. Erste messbare Verbesserungen sind oft nach 3-6 Monaten sichtbar. Signifikante Ranking-Verbesserungen und Traffic-Steigerungen zeigen sich typischerweise nach 6-12 Monaten. Die genaue Zeitspanne hängt von Faktoren wie Wettbewerb, aktueller Website-Qualität und Branche ab.",
  },
  {
    question: "Was ist der Unterschied zwischen SEO und GEO?",
    answer:
      "SEO (Search Engine Optimization) optimiert Ihre Website für traditionelle Suchmaschinen wie Google. GEO (Generative Engine Optimization) hingegen optimiert für KI-gestützte Suchsysteme wie ChatGPT, Google SGE oder Perplexity, die direkte Antworten generieren statt nur Links anzuzeigen. Beide Strategien sind heute wichtig für maximale Sichtbarkeit.",
  },
  {
    question: "Warum sollte ich in AI Search Optimization investieren?",
    answer:
      "KI-Assistenten wie ChatGPT, Google SGE und Perplexity verändern das Suchverhalten fundamental. Nutzer erhalten direkte Antworten statt einer Liste von Links. Wer nicht für AI Answer Engines optimiert, verliert zunehmend Sichtbarkeit. Als Early Adopter sichern Sie sich Wettbewerbsvorteile, bevor die Konkurrenz nachzieht.",
  },
  {
    question: "Arbeiten Sie auch international / mehrsprachig?",
    answer:
      "Ja, ich habe umfangreiche Erfahrung mit internationalem SEO und habe bereits 60+ Märkte für SaaS-Unternehmen erschlossen. Ich implementiere hreflang-Tags korrekt, entwickle lokalisierte Content-Strategien und berücksichtige kulturelle Besonderheiten sowie länderspezifische Suchmaschinen-Präferenzen.",
  },
  {
    question: "Was macht Sie als SEO-Experten besonders?",
    answer:
      "Mit über 15 Jahren Erfahrung, Google Partner Zertifizierung und Erfahrung als SEO Lead bei einem globalen Pharmakonzern bringe ich sowohl technische Tiefe als auch strategisches Verständnis mit. Ich habe mehr als 2.000 Websites optimiert, internationale Märkte erschlossen und verstehe die Herausforderungen von Compliance-getriebenen Branchen.",
  },
  {
    question: "Bieten Sie auch Website-Entwicklung an?",
    answer:
      "Ja, ich entwickle moderne Websites und Online-Shops mit WordPress, Drupal oder Headless CMS. Dabei achte ich von Anfang an auf SEO-Konformität, Performance, Barrierefreiheit und Skalierbarkeit. Auch Website-Relaunches begleite ich vollständig – vom Konzept bis zur Umsetzung ohne Rankingverluste.",
  },
  {
    question: "Wie gehen Sie bei einem SEO-Projekt vor?",
    answer:
      "Mein Ansatz basiert auf drei Säulen: (1) Analyse – Ich untersuche Ihre aktuelle Situation, Wettbewerber und Potenziale. (2) Strategie – Ich entwickle einen maßgeschneiderten Plan mit klaren Zielen und Prioritäten. (3) Umsetzung & Reporting – Ich implementiere Maßnahmen und liefere transparente Berichte mit messbaren KPIs. Kontinuierliche Optimierung ist dabei selbstverständlich.",
  },
]

export default function MediaPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="flex flex-col items-center text-center space-y-6 max-w-4xl mx-auto">
              <div className="flex flex-wrap gap-2 justify-center">
                <Badge variant="outline" className="bg-primary/10">
                  Google Partner
                </Badge>
                <Badge variant="outline" className="bg-primary/10">
                  15+ Jahre Erfahrung
                </Badge>
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-balance">
                AI Search, GEO & SEO Strategie <span className="text-primary">für die Suche von morgen</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl text-balance">
                Als Google Partner zertifizierter Experte und mehr als 15 Jahren Erfahrung führe ich Ihre Webseite zum
                messbaren Erfolg!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link href="/contact/">Jetzt Kontakt aufnehmen</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="#services">Über mich</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="w-full py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Dienstleistungen</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Meine in Webentwicklung und SEO spezialisierten Dienstleistungen biete ich Ihnen mit mehr als 15
                jähriger Erfahrung an!
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Link
                  key={index}
                  href={service.href}
                  className="block group"
                  title={`${service.title} - ${service.description.substring(0, 100)}`}
                >
                  <Card className="hover:shadow-lg transition-shadow h-full">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                        <service.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm leading-relaxed">{service.description}</CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* AI & GEO Services Section */}
        <section id="ki-geo" className="w-full py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">KI & GEO Services</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Optimierung für die Suche von morgen – AI Answer Engines und Generative Engine Optimization
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {aiGeoServices.map((service, index) => (
                <Link
                  key={index}
                  href={service.href}
                  className="block group"
                  title={`${service.title} - ${service.description.substring(0, 100)}`}
                >
                  <Card className="hover:shadow-lg transition-shadow h-full border-primary/20">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                        <service.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm leading-relaxed">{service.description}</CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories Section */}
        <section id="erfolge" className="w-full py-16 md:py-24 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Erfolgsgeschichten</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Messbare Erfolge durch professionelle SEO und Web-Strategien – Real Results, Real Growth
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {successStories.map((story, index) => (
                <Card
                  key={index}
                  className="group relative overflow-hidden border-2 hover:border-primary/50 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />
                  <CardHeader className="relative z-10 pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <story.icon className="h-7 w-7 text-primary" />
                      </div>
                      <Badge variant="secondary" className="text-xs font-medium">
                        {story.industry}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                      {story.company}
                    </CardTitle>
                    <p className="text-base font-semibold text-primary">{story.results}</p>
                  </CardHeader>
                  <CardContent className="relative z-10 space-y-6">
                    <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                      {story.description}
                    </CardDescription>
                    <div className="grid grid-cols-3 gap-3 pt-4 border-t-2 border-muted">
                      {story.metrics.map((metric, idx) => (
                        <div key={idx} className="text-center group-hover:scale-105 transition-transform">
                          <div className="font-bold text-xl text-primary mb-1">{metric.value}</div>
                          <div className="text-xs text-muted-foreground leading-tight">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Client Logos Section */}
        <section id="referenzen" className="w-full py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                Vertrauen Sie auf Erfahrung
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Erfolgreiche Zusammenarbeit mit führenden Unternehmen und Marken
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
              {clientLogos.map((logo, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100"
                >
                  <OptimizedImage
                    src={logo.url}
                    alt={`${logo.name} Logo - Dross:Media Client`}
                    title={`${logo.name} - Erfolgreiche SEO & Web Development Zusammenarbeit`}
                    width={logo.width}
                    height={logo.height}
                    className="max-w-full h-auto"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Accordion Section */}
        <section id="faq" className="w-full py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                Häufig gestellte Fragen
              </h2>
              <p className="text-lg text-muted-foreground">
                Antworten auf die wichtigsten Fragen zu SEO, GEO und AI Search Optimization
              </p>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="font-semibold">{item.question}</span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-balance">
                Bereit für messbaren Erfolg?
              </h2>
              <p className="text-lg text-primary-foreground/90 text-balance">
                Kontaktieren Sie mich für eine kostenlose Erstberatung und lassen Sie uns gemeinsam Ihre digitale
                Strategie entwickeln.
              </p>
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact/">Jetzt Kontakt aufnehmen</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
