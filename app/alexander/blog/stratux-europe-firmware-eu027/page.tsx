import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Calendar, User, ArrowLeft } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"
import OptimizedImage from "@/components/optimized-image"

export const metadata: Metadata = {
  title: "New Stratux EU Firmware 1.6r1-eu027 has been released - Alexander Dross Blog",
  description:
    "Stratux Europe Edition 1.6r1-eu027 major update with lots of changes. Full reflash required - learn what's new and how to upgrade.",
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
                <Badge variant="secondary">Raspberry Pi</Badge>
                <Badge variant="secondary">Stratux</Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                New Stratux EU Firmware 1.6r1-eu027 has been released
              </h1>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Alexander Dross
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  November 20, 2021
                </span>
              </div>
            </header>

            <div className="mb-8 rounded-lg overflow-hidden">
              <OptimizedImage
                src="/assets/blog/stratux-update.jpg"
                alt="Stratux Firmware Update"
                width={1200}
                height={600}
                className="w-full"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="lead text-xl text-muted-foreground mb-6">
                Stratux Europe Edition 1.6r1-eu027 has been released. Major update with lots of changes, so no update
                via .sh file – you will have to re-flash the SD card.
              </p>

              <h2>Major Changes in eu027</h2>
              <p>This release brings significant improvements and changes:</p>

              <h3>Core System Updates</h3>
              <ul>
                <li>Updated base OS to latest Raspberry Pi OS (Debian Bullseye)</li>
                <li>Go 1.17 runtime for improved performance</li>
                <li>Modernized web interface with responsive design</li>
                <li>Reduced boot time by optimizing startup scripts</li>
                <li>Better power management for extended battery operation</li>
              </ul>

              <h3>Radio Reception Improvements</h3>
              <ul>
                <li>Enhanced OGN decoder with better sensitivity</li>
                <li>Improved FLARM protocol handling</li>
                <li>1090MHz ES decoding optimizations</li>
                <li>Better interference rejection algorithms</li>
                <li>Support for newer RTL-SDR dongles</li>
              </ul>

              <h3>AHRS Enhancements</h3>
              <ul>
                <li>Improved magnetometer calibration routine</li>
                <li>Better handling of accelerometer drift</li>
                <li>Enhanced Kalman filter for smoother attitude data</li>
                <li>Support for additional sensor boards</li>
              </ul>

              <h3>GPS Updates</h3>
              <ul>
                <li>Support for u-blox M9N GPS modules</li>
                <li>Improved satellite acquisition times</li>
                <li>Better handling of urban canyon environments</li>
                <li>SBAS/EGNOS integration improvements</li>
              </ul>

              <h2>Breaking Changes</h2>
              <p>Due to the major OS update, you cannot upgrade with a .sh script. You must re-flash your SD card.</p>

              <h2>Installation Instructions</h2>

              <h3>1. Backup Your Settings</h3>
              <p>Before reflashing, save your configuration:</p>
              <ul>
                <li>Navigate to Settings in web interface</li>
                <li>Note your WiFi settings</li>
                <li>Save any custom configurations</li>
                <li>Export your AHRS calibration if applicable</li>
              </ul>

              <h3>2. Download Firmware</h3>
              <p>Get the latest eu027 image from the official Stratux Europe repository.</p>

              <h3>3. Flash SD Card</h3>
              <p>Use Raspberry Pi Imager or balenaEtcher:</p>
              <ol>
                <li>Insert SD card into computer</li>
                <li>Select the eu027 .img file</li>
                <li>Choose your SD card</li>
                <li>Flash and verify</li>
              </ol>

              <h3>4. First Boot</h3>
              <p>After flashing:</p>
              <ul>
                <li>Insert SD card into Raspberry Pi</li>
                <li>Connect SDR dongles and sensors</li>
                <li>Power on and wait for boot (2-3 minutes first time)</li>
                <li>Connect to "stratux" WiFi network</li>
                <li>Access web interface at http://192.168.10.1</li>
              </ul>

              <h3>5. Reconfigure Settings</h3>
              <p>Restore your saved configuration:</p>
              <ul>
                <li>Set your region (EU/US)</li>
                <li>Configure WiFi credentials</li>
                <li>Set up AHRS if using sensors</li>
                <li>Verify SDR dongle detection</li>
                <li>Test GPS functionality</li>
              </ul>

              <h2>New Features to Try</h2>
              <ul>
                <li>
                  <strong>Dark Mode:</strong> Settings → Display → Dark Mode
                </li>
                <li>
                  <strong>Traffic Filter:</strong> Filter display by altitude and distance
                </li>
                <li>
                  <strong>Charts:</strong> Improved signal strength and traffic history graphs
                </li>
                <li>
                  <strong>Diagnostics:</strong> Enhanced system health monitoring
                </li>
              </ul>

              <h2>Known Issues</h2>
              <ul>
                <li>Some older GPS modules may require manual configuration</li>
                <li>First boot may take longer than usual (OS optimization)</li>
                <li>WiFi channel selection may need adjustment in congested areas</li>
              </ul>

              <h2>Community Feedback</h2>
              <p>
                This release has been extensively tested by the European Stratux community. Special thanks to all beta
                testers and contributors, especially @b3nn0 for maintaining the European fork.
              </p>

              <h2>Conclusion</h2>
              <p>
                eu027 represents a major leap forward for Stratux Europe. While the reflash requirement may be
                inconvenient, the improvements in stability, performance, and features make it well worth the effort.
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
