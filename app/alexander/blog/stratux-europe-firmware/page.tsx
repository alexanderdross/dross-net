import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Calendar, User, ArrowLeft } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"
import OptimizedImage from "@/components/optimized-image"

export const metadata: Metadata = {
  title: "New Stratux EU/US Firmware Edition 1.6r1-eu029 has been released - Alexander Dross Blog",
  description:
    "The new Stratux EU/US Firmware Edition 1.6r1-eu029 brings OTA update capability and numerous improvements for European and US users.",
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
                New Stratux EU/US Firmware Edition 1.6r1-eu029 has been released
              </h1>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Alexander Dross
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  July 30, 2023
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
                Finally, the new Stratux EU/US Firmware Edition 1.6r1-eu029 has been released. This one can even be
                installed OTA, without having to re-flash the SD card.
              </p>

              <h2>Major Features in eu029</h2>
              <p>This release brings significant improvements:</p>
              <ul>
                <li>
                  <strong>OTA Updates:</strong> No more SD card reflashing required for updates
                </li>
                <li>
                  <strong>Improved OGN Support:</strong> Better reception and decoding of glider traffic
                </li>
                <li>
                  <strong>Enhanced GPS Integration:</strong> Support for more GPS modules including u-blox M9N
                </li>
                <li>
                  <strong>Web Interface Updates:</strong> Cleaner UI with better mobile responsiveness
                </li>
                <li>
                  <strong>Performance Optimizations:</strong> Reduced CPU usage and improved battery life
                </li>
              </ul>

              <h2>OTA Update Process</h2>
              <p>The new over-the-air update system makes maintenance much easier:</p>
              <ol>
                <li>Connect to Stratux WiFi</li>
                <li>Open web interface at http://192.168.10.1</li>
                <li>Go to Settings → Software Update</li>
                <li>Click "Check for Updates"</li>
                <li>Install and reboot automatically</li>
              </ol>

              <h2>Hardware Compatibility</h2>
              <p>This firmware version supports:</p>
              <ul>
                <li>Raspberry Pi 3B, 3B+, 4B, Zero W, Zero 2 W</li>
                <li>RTL-SDR dongles (978 MHz and 1090 MHz)</li>
                <li>AHRS sensors: MPU9250, BMP280, GY-91, GY-BME280</li>
                <li>GPS modules: VK-172, BU-353S4, u-blox series</li>
                <li>Fan control via GPIO for active cooling</li>
              </ul>

              <h2>Fresh Installation</h2>
              <p>For new Stratux builds, download the latest image and flash to a 16GB+ SD card using:</p>
              <ul>
                <li>Raspberry Pi Imager (recommended)</li>
                <li>balenaEtcher</li>
                <li>Win32 Disk Imager (Windows)</li>
              </ul>

              <h2>Community Feedback</h2>
              <p>
                The Stratux Europe community has been testing this release for several weeks with excellent results.
                Special thanks to @b3nn0 and all contributors for their continued development efforts.
              </p>

              <h2>Download and Resources</h2>
              <p>
                Get the latest firmware from the official{" "}
                <a href="https://stratux.me/" target="_blank" rel="noopener noreferrer">
                  Stratux website
                </a>
                . Full documentation and installation guides are available in the project repository.
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
