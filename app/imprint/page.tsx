import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

export const metadata = {
  title: "Impressum / Imprint - Dross:Network",
  description:
    "Legal information and imprint for Dross:Network. Company details, contact information, and regulatory compliance.",
}

export default function ImprintPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-[#e8e9ee]">
        <div className="container mx-auto px-4 py-12 md:py-16 max-w-4xl">
          <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-8">Impressum / Imprint</h1>

            <section className="mb-10">
              <h2 className="text-xl font-bold mb-4">Our Brands</h2>
              <div className="flex flex-wrap gap-2">
                <Button variant="secondary" size="sm" asChild>
                  <Link
                    href="https://v0.dross.net/air/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Dross:Air - Hubschrauber Rundflüge"
                  >
                    Dross:Air <ExternalLink className="ml-1 h-3 w-3" />
                  </Link>
                </Button>
                <Button variant="secondary" size="sm" asChild>
                  <Link
                    href="https://aip.aero/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="AIP:Aero - Aviation Information Platform"
                  >
                    AIP:Aero <ExternalLink className="ml-1 h-3 w-3" />
                  </Link>
                </Button>
                <Button variant="secondary" size="sm" asChild>
                  <Link
                    href="https://trade.aero/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Trade:Aero - Aviation Trading Platform"
                  >
                    Trade:Aero <ExternalLink className="ml-1 h-3 w-3" />
                  </Link>
                </Button>
                <Button variant="secondary" size="sm" asChild>
                  <Link
                    href="https://v0.dross.net/media/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Dross:Media - SEO & Digital Marketing Agentur"
                  >
                    Dross:Media <ExternalLink className="ml-1 h-3 w-3" />
                  </Link>
                </Button>
                <Button variant="secondary" size="sm" asChild>
                  <Link
                    href="https://dross.net/aviation/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Dross:Aviation - Aviation Services"
                  >
                    Dross:Aviation <ExternalLink className="ml-1 h-3 w-3" />
                  </Link>
                </Button>
                <Button variant="secondary" size="sm" asChild>
                  <Link
                    href="https://v0.dross.net/alexander/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Alexander Dross - Digital Marketing Consultant & SEO Expert"
                  >
                    Alexander Dross <ExternalLink className="ml-1 h-3 w-3" />
                  </Link>
                </Button>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-bold mb-4">Contact</h2>
              <p className="text-muted-foreground mb-4">
                <Link
                  href="/contact/"
                  className="text-primary hover:underline inline-flex items-center"
                  title="Kontaktieren Sie Dross:Network"
                >
                  Contact Dross:Network <ExternalLink className="ml-1 h-3 w-3" />
                </Link>
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-bold mb-4">Tax Information</h2>
              <p className="text-muted-foreground">
                <strong>Steuernummer (TAX ID):</strong> 61123/34525
              </p>
              <p className="text-muted-foreground">
                <strong>USt-IdNr (VAT ID):</strong> DE311210968
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-bold mb-4">Urheberrecht / Copyright</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
                Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
                Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Konzepte und Umsetzungen unterliegen dem Copyright von{" "}
                <Link href="https://v0.dross.net/media/" className="text-primary hover:underline">
                  Dross:Media
                </Link>
                .
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-bold mb-4">Haftung für Links / Liability for Links</h2>
              <p className="text-muted-foreground leading-relaxed">
                Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links.
                Für den Inhalt der verlinkten Seiten sind ausschließlich die Betreiber verantwortlich.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-bold mb-4">Haftung für Inhalte / Liability for Content</h2>
              <p className="text-muted-foreground leading-relaxed">
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
                allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
                verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-bold mb-6">
                Dieses Impressum gilt auch für folgende Social-Media-Auftritte:
              </h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Privat - Alexander Dross</h3>
                  <div className="flex flex-wrap gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <Link href="https://www.facebook.com/alexdross" target="_blank" rel="noopener noreferrer">
                        Facebook <ExternalLink className="ml-1 h-3 w-3" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="https://twitter.com/alexanderdross" target="_blank" rel="noopener noreferrer">
                        Twitter/X <ExternalLink className="ml-1 h-3 w-3" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="https://www.linkedin.com/in/alexanderdross" target="_blank" rel="noopener noreferrer">
                        LinkedIn <ExternalLink className="ml-1 h-3 w-3" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <Link
                        href="https://www.xing.com/profile/Alexander_Dross2"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Xing <ExternalLink className="ml-1 h-3 w-3" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="https://www.instagram.com/drossair/" target="_blank" rel="noopener noreferrer">
                        Instagram <ExternalLink className="ml-1 h-3 w-3" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="https://www.youtube.com/AlexanderDross" target="_blank" rel="noopener noreferrer">
                        YouTube <ExternalLink className="ml-1 h-3 w-3" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="https://www.pinterest.de/alexanderdross/" target="_blank" rel="noopener noreferrer">
                        Pinterest <ExternalLink className="ml-1 h-3 w-3" />
                      </Link>
                    </Button>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Dross:Media</h3>
                  <div className="flex flex-wrap gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <Link href="https://www.facebook.com/DrossMedia" target="_blank" rel="noopener noreferrer">
                        Facebook <ExternalLink className="ml-1 h-3 w-3" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="https://twitter.com/drossmedia" target="_blank" rel="noopener noreferrer">
                        Twitter/X <ExternalLink className="ml-1 h-3 w-3" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <Link
                        href="https://www.linkedin.com/company/dross-media"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        LinkedIn <ExternalLink className="ml-1 h-3 w-3" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <Link
                        href="https://www.xing.com/companies/dross:mediaconsulting"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Xing <ExternalLink className="ml-1 h-3 w-3" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="https://www.pinterest.com/DrossMedia/" target="_blank" rel="noopener noreferrer">
                        Pinterest <ExternalLink className="ml-1 h-3 w-3" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <Link
                        href="https://maps.google.com/maps?cid=7714675599494644803"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Google Maps <ExternalLink className="ml-1 h-3 w-3" />
                      </Link>
                    </Button>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Dross:Air & Dross:Aviation</h3>
                  <div className="flex flex-wrap gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <Link href="https://www.facebook.com/drossair" target="_blank" rel="noopener noreferrer">
                        Facebook <ExternalLink className="ml-1 h-3 w-3" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="https://twitter.com/airdross" target="_blank" rel="noopener noreferrer">
                        Twitter/X <ExternalLink className="ml-1 h-3 w-3" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <Link
                        href="https://maps.google.com/maps?cid=14588157908406220609"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Google Maps <ExternalLink className="ml-1 h-3 w-3" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="https://www.instagram.com/drossair/" target="_blank" rel="noopener noreferrer">
                        Instagram <ExternalLink className="ml-1 h-3 w-3" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="https://www.youtube.com/AlexanderDross" target="_blank" rel="noopener noreferrer">
                        YouTube <ExternalLink className="ml-1 h-3 w-3" />
                      </Link>
                    </Button>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Trade:Aero</h3>
                  <div className="flex flex-wrap gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <Link
                        href="https://www.linkedin.com/company/tradeaero/about/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        LinkedIn <ExternalLink className="ml-1 h-3 w-3" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="https://www.facebook.com/tradeaero" target="_blank" rel="noopener noreferrer">
                        Facebook <ExternalLink className="ml-1 h-3 w-3" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="https://x.com/TradeAeroGlobal" target="_blank" rel="noopener noreferrer">
                        Twitter/X <ExternalLink className="ml-1 h-3 w-3" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="https://www.instagram.com/tradeaero/" target="_blank" rel="noopener noreferrer">
                        Instagram <ExternalLink className="ml-1 h-3 w-3" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
