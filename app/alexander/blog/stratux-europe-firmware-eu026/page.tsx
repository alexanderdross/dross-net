import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Calendar, User, ArrowLeft } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"
import OptimizedImage from "@/components/optimized-image"

export const metadata: Metadata = {
  title: "Stratux Europe Edition 1.6r1-eu026 has been released - Alexander Dross Blog",
  description:
    "New firmware version for Stratux Europe with improvements and bug fixes. Download the latest version and find flashing instructions.",
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
                <Badge variant="secondary">Raspberry Pi</Badge>
                <Badge variant="secondary">Stratux</Badge>
                <Badge variant="secondary">Tech</Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Stratux Europe Edition 1.6r1-eu026 has been released
              </h1>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Alexander Dross
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  September 5, 2021
                </span>
              </div>
            </header>

            <div className="mb-8 rounded-lg overflow-hidden">
              <OptimizedImage
                src="/assets/blog/stratux-logo.jpg"
                alt="Stratux Logo"
                width={1200}
                height={600}
                className="w-full"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="lead text-xl text-muted-foreground mb-6">
                A new firmware version for Stratux Europe has been released by @b3nn0. You can download the latest
                version and find flashing instructions on how to install Stratux Europe on your Raspberry Pi.
              </p>

              <h2>What's New in eu026</h2>
              <p>This release brings several improvements and bug fixes:</p>

              <h3>Core Improvements</h3>
              <ul>
                <li>Updated Go runtime to version 1.16</li>
                <li>Improved memory management for better stability</li>
                <li>Faster boot times through optimized startup scripts</li>
                <li>Enhanced power management for battery operation</li>
              </ul>

              <h3>Radio Reception</h3>
              <ul>
                <li>Better 1090MHz ADS-B decoding accuracy</li>
                <li>Improved OGN/FLARM sensitivity at 868MHz</li>
                <li>Reduced false positives in traffic detection</li>
                <li>Enhanced Mode S interrogation handling</li>
              </ul>

              <h3>Web Interface</h3>
              <ul>
                <li>Mobile-responsive design improvements</li>
                <li>Real-time traffic map enhancements</li>
                <li>Better data visualization for signal strengths</li>
                <li>Simplified settings navigation</li>
              </ul>

              <h3>Hardware Support</h3>
              <ul>
                <li>Full support for Raspberry Pi 4B</li>
                <li>Better detection of newer RTL-SDR dongles</li>
                <li>Improved AHRS sensor compatibility</li>
                <li>Enhanced GPS module auto-detection</li>
              </ul>

              <h2>Bug Fixes</h2>
              <ul>
                <li>Fixed occasional WiFi disconnection issues</li>
                <li>Resolved memory leak in traffic processing</li>
                <li>Corrected altitude reporting in certain scenarios</li>
                <li>Fixed AHRS calibration persistence</li>
                <li>Resolved fan control issues on Pi 4</li>
              </ul>

              <h2>Download and Installation</h2>

              <h3>Download Links</h3>
              <p>
                Get the latest Stratux Europe eu026 image from the official GitHub releases page or the{" "}
                <a href="https://stratux.me/" target="_blank" rel="noopener noreferrer">
                  Stratux website
                </a>
                .
              </p>

              <h3>Flashing Instructions</h3>
              <p>To install Stratux Europe on your Raspberry Pi:</p>

              <h4>Using Raspberry Pi Imager (Recommended)</h4>
              <ol>
                <li>Download and install Raspberry Pi Imager</li>
                <li>Insert SD card (16GB minimum recommended)</li>
                <li>Select "Use custom" and choose the eu026 .img file</li>
                <li>Select your SD card</li>
                <li>Click "Write" and wait for completion</li>
              </ol>

              <h4>Using balenaEtcher</h4>
              <ol>
                <li>Download and install balenaEtcher</li>
                <li>Select the eu026 image file</li>
                <li>Select your SD card</li>
                <li>Click "Flash!" and wait for verification</li>
              </ol>

              <h3>First Boot Setup</h3>
              <p>After flashing:</p>
              <ol>
                <li>Insert SD card into Raspberry Pi</li>
                <li>Connect your SDR dongles</li>
                <li>Connect AHRS sensor (if using)</li>
                <li>Connect GPS module (if using external GPS)</li>
                <li>Power on and wait 2-3 minutes for first boot</li>
                <li>Connect to "stratux" WiFi network (password: stratux123)</li>
                <li>Open browser to http://192.168.10.1</li>
              </ol>

              <h2>Configuration Tips</h2>

              <h3>Essential Settings</h3>
              <ul>
                <li>
                  <strong>Region:</strong> Set to "Europe" for 1090/868MHz operation
                </li>
                <li>
                  <strong>WiFi:</strong> Change default password for security
                </li>
                <li>
                  <strong>AHRS:</strong> Calibrate on level surface before first flight
                </li>
                <li>
                  <strong>GPS:</strong> Allow 5-10 minutes for initial satellite lock
                </li>
              </ul>

              <h3>Performance Optimization</h3>
              <ul>
                <li>Enable cooling if using Raspberry Pi 4</li>
                <li>Use quality USB cables for SDR dongles</li>
                <li>Position GPS with clear sky view</li>
                <li>Keep firmware updated for latest improvements</li>
              </ul>

              <h2>Community and Support</h2>
              <p>Join the Stratux community for support and discussions:</p>
              <ul>
                <li>GitHub repository for bug reports and feature requests</li>
                <li>Reddit r/stratux community</li>
                <li>Discord server for real-time chat</li>
                <li>Forum threads on various aviation websites</li>
              </ul>

              <h2>Acknowledgments</h2>
              <p>
                Special thanks to @b3nn0 for maintaining the European fork of Stratux and all contributors who test and
                provide feedback. The continuous improvement of Stratux Europe is only possible through community
                collaboration.
              </p>

              <h2>Conclusion</h2>
              <p>
                Stratux Europe Edition 1.6r1-eu026 represents another solid step forward in making open-source ADS-B
                reception accessible to European general aviation pilots. Download, flash, and fly safe!
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
