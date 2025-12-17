import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

export const metadata = {
  title: "Privacy Policy / Datenschutzerklärung - Dross:Network",
  description:
    "Privacy policy for Dross:Network and all associated properties. Learn how we handle and protect your data.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-[#e8e9ee]">
        <div className="container mx-auto py-16 md:py-24 max-w-4xl px-4">
          <h1 className="text-4xl font-bold tracking-tight mb-2">Privacy Policy / Datenschutzerklärung</h1>
          <p className="text-gray-600 mb-12">Last updated: May 24, 2018</p>

          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-xl font-semibold mb-4">Inhalt</h2>
            <ol className="space-y-2">
              <li>
                <Link
                  href="#section-1"
                  className="text-[#0066cc] hover:underline"
                  title="Zielsetzung und verantwortliche Stelle"
                >
                  1. Zielsetzung und verantwortliche Stelle
                </Link>
              </li>
              <li>
                <Link
                  href="#section-2"
                  className="text-[#0066cc] hover:underline"
                  title="Grundsätzliche Angaben zur Datenverarbeitung"
                >
                  2. Grundsätzliche Angaben zur Datenverarbeitung
                </Link>
              </li>
              <li>
                <Link
                  href="#section-3"
                  className="text-[#0066cc] hover:underline"
                  title="Verarbeitung personenbezogener Daten"
                >
                  3. Verarbeitung personenbezogener Daten
                </Link>
              </li>
              <li>
                <Link href="#section-4" className="text-[#0066cc] hover:underline" title="Erhebung von Zugriffsdaten">
                  4. Erhebung von Zugriffsdaten
                </Link>
              </li>
              <li>
                <Link href="#section-5" className="text-[#0066cc] hover:underline" title="Cookies & Reichweitenmessung">
                  5. Cookies & Reichweitenmessung
                </Link>
              </li>
              <li>
                <Link href="#section-6" className="text-[#0066cc] hover:underline" title="Google Analytics">
                  6. Google Analytics
                </Link>
              </li>
              <li>
                <Link href="#section-7" className="text-[#0066cc] hover:underline" title="Google-Re/Marketing-Services">
                  7. Google-Re/Marketing-Services
                </Link>
              </li>
              <li>
                <Link href="#section-8" className="text-[#0066cc] hover:underline" title="Facebook Social Plugins">
                  8. Facebook Social Plugins
                </Link>
              </li>
              <li>
                <Link
                  href="#section-9"
                  className="text-[#0066cc] hover:underline"
                  title="Einbindung von Diensten und Inhalten Dritter"
                >
                  9. Einbindung von Diensten und Inhalten Dritter
                </Link>
              </li>
              <li>
                <Link
                  href="#section-10"
                  className="text-[#0066cc] hover:underline"
                  title="Content Delivery Network von Cloudflare"
                >
                  10. Content Delivery Network von Cloudflare
                </Link>
              </li>
              <li>
                <Link
                  href="#section-11"
                  className="text-[#0066cc] hover:underline"
                  title="Rechte der Nutzer und Löschung"
                >
                  11. Rechte der Nutzer und Löschung
                </Link>
              </li>
              <li>
                <Link
                  href="#section-12"
                  className="text-[#0066cc] hover:underline"
                  title="Änderungen der Datenschutzerklärung"
                >
                  12. Änderungen der Datenschutzerklärung
                </Link>
              </li>
            </ol>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-12">
            <p className="text-sm leading-relaxed text-gray-700">
              <strong>Hinweis:</strong> Diese Website verwendet keine Tracking-Cookies und kein Google Analytics. Alle
              Schriftarten werden selbst gehost (GDPR-konform). Ein Cookie-Banner ist nicht erforderlich.
            </p>
          </div>

          <div className="space-y-12 prose prose-neutral dark:prose-invert max-w-none">
            <section id="section-1">
              <h2 className="text-2xl font-bold mb-4">1. Zielsetzung und verantwortliche Stelle</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Diese Datenschutzerklärung klärt über die Art, den Umfang und Zweck der Verarbeitung (u.a. Erhebung,
                Verarbeitung und Nutzung sowie Einholung von Einwilligungen) von personenbezogenen Daten innerhalb
                unseres Onlineangebotes und der mit ihm verbundenen Webseiten, Funktionen und Inhalte (nachfolgend
                gemeinsam bezeichnet als „Onlineangebot" oder „Website") auf.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Anbieter des Onlineangebotes und die datenschutzrechtlich verantwortliche Stelle ist Dross:Network,
                Dross:Media, Dross:Air, Inhaber: Alexander Dross. Für die Kontaktmöglichkeiten verweisen wir auf unser{" "}
                <Link
                  href="/imprint/"
                  className="text-[#0066cc] hover:underline"
                  title="Zum Impressum von Dross:Network"
                >
                  Impressum
                </Link>
                .
              </p>
            </section>

            <section id="section-2">
              <h2 className="text-2xl font-bold mb-4">2. Grundsätzliche Angaben zur Datenverarbeitung</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Wir verarbeiten personenbezogene Daten der Nutzer nur unter Einhaltung der einschlägigen
                Datenschutzbestimmungen entsprechend den Geboten der Datensparsamkeit- und Datenvermeidung.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Wir treffen organisatorische, vertragliche und technische Sicherheitsmaßnahmen entsprechend dem Stand
                der Technik, um sicher zu stellen, dass die Vorschriften der Datenschutzgesetze eingehalten werden.
              </p>
            </section>

            <section id="section-3">
              <h2 className="text-2xl font-bold mb-4">3. Verarbeitung personenbezogener Daten</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Die personenbezogenen Daten werden für die folgenden Zwecke auf Grundlage gesetzlicher Erlaubnisse oder
                Einwilligungen der Nutzer verarbeitet:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                <li>Die Zurverfügungstellung, Ausführung, Pflege, Optimierung und Sicherung unserer Dienste</li>
                <li>Die Gewährleistung eines effektiven Kundendienstes und technischen Supports</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Bei der Kontaktaufnahme mit uns werden die Angaben des Nutzers zwecks Bearbeitung der Anfrage
                gespeichert. Personenbezogene Daten werden gelöscht, sofern sie ihren Verwendungszweck erfüllt haben.
              </p>
            </section>

            <section id="section-4">
              <h2 className="text-2xl font-bold mb-4">4. Erhebung von Zugriffsdaten</h2>
              <p className="text-gray-700 leading-relaxed">
                Wir erheben Daten über jeden Zugriff auf den Server (Serverlogfiles). Zu den Zugriffsdaten gehören: Name
                der abgerufenen Webseite, Datei, Datum und Uhrzeit des Abrufs, übertragene Datenmenge, Browsertyp,
                Betriebssystem, Referrer URL, und IP-Adresse.
              </p>
            </section>

            <section id="section-5">
              <h2 className="text-2xl font-bold mb-4">5. Cookies & Reichweitenmessung</h2>
              <p className="text-gray-700 leading-relaxed">
                Diese Website verwendet keine Tracking-Cookies. Cookies werden nur für essentielle Funktionen verwendet.
                Die Betrachtung dieses Onlineangebotes ist auch unter Ausschluss von Cookies möglich.
              </p>
            </section>

            <section id="section-6">
              <h2 className="text-2xl font-bold mb-4">6. Google Analytics</h2>
              <p className="text-gray-700 leading-relaxed font-semibold">
                Wir tracken unsere Webseiten Besucher NICHT!
              </p>
            </section>

            <section id="section-7">
              <h2 className="text-2xl font-bold mb-4">7. Google-Re/Marketing-Services</h2>
              <p className="text-gray-700 leading-relaxed">
                Wir nutzen Cloudflare Turnstile anstelle von Google reCAPTCHA um Spam entgegenzuwirken. Die
                Datenschutzerklärung von Cloudflare ist unter{" "}
                <a
                  href="https://www.cloudflare.com/privacypolicy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0066cc] hover:underline"
                >
                  cloudflare.com/privacypolicy
                </a>{" "}
                abrufbar.
              </p>
            </section>

            <section id="section-8">
              <h2 className="text-2xl font-bold mb-4">8. Facebook Social Plugins</h2>
              <p className="text-gray-700 leading-relaxed">
                Auf Grundlage unserer berechtigten Interessen an Analyse, Optimierung und wirtschaftlichem Betrieb
                unseres Onlineangebotes werden Social Plugins ("Plugins") verwendet.
              </p>
            </section>

            <section id="section-9">
              <h2 className="text-2xl font-bold mb-4">9. Einbindung von Diensten und Inhalten Dritter</h2>
              <p className="text-gray-700 leading-relaxed">
                Es kann vorkommen, dass innerhalb dieses Onlineangebotes Inhalte Dritter, wie zum Beispiel Videos von
                YouTube, Kartenmaterial von Google-Maps, RSS-Feeds oder Grafiken von anderen Webseiten eingebunden
                werden.
              </p>
            </section>

            <section id="section-10">
              <h2 className="text-2xl font-bold mb-4">10. Content Delivery Network von Cloudflare</h2>
              <p className="text-gray-700 leading-relaxed">
                Wir setzen ein so genanntes "Content Delivery Network" (CDN), angeboten von Cloudflare, Inc., ein. Bei
                einem CDN handelt es sich um einen Dienst, mit dessen Hilfe Inhalte unseres Onlineangebotes schneller
                ausgeliefert werden können.
              </p>
            </section>

            <section id="section-11">
              <h2 className="text-2xl font-bold mb-4">11. Rechte der Nutzer und Löschung</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Nutzer haben das Recht, auf Antrag unentgeltlich Auskunft zu erhalten über die personenbezogenen Daten,
                die von uns über sie gespeichert wurden.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Zusätzlich haben die Nutzer das Recht auf Berichtigung unrichtiger Daten, Widerruf von Einwilligungen,
                Sperrung und Löschung ihrer personenbezogenen Daten sowie das Recht, im Fall der Annahme einer
                unrechtmäßigen Datenverarbeitung eine Beschwerde bei der zuständigen Aufsichtsbehörde einzureichen.
              </p>
            </section>

            <section id="section-12">
              <h2 className="text-2xl font-bold mb-4">12. Änderungen der Datenschutzerklärung</h2>
              <p className="text-gray-700 leading-relaxed">
                Wir behalten uns vor, die Datenschutzerklärung zu ändern, um sie an geänderte Rechtslagen, oder bei
                Änderungen des Dienstes sowie der Datenverarbeitung anzupassen.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
