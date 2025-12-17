import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Calendar, User, ArrowLeft } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"
import OptimizedImage from "@/components/optimized-image"

export const metadata: Metadata = {
  title: "How to calibrate NooElec Nano 2 SDRs from 978MHz to 868MHz? - Alexander Dross Blog",
  description:
    "Tutorial for European Stratux users on recalibrating NooElec Nano 2 Software Defined Radio receivers from 978MHz UAT to 868MHz for FLARM reception.",
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
                <Badge variant="secondary">Tech</Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                How to calibrate NooElec Nano 2 SDRs from 978MHz to 868MHz?
              </h1>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Alexander Dross
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  February 16, 2022
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
                Tutorial for European Stratux users on recalibrating NooElec Nano 2 Software Defined Radio receivers.
                Transform your 978MHz UAT receiver into an 868MHz FLARM/OGN receiver for European operations.
              </p>

              <h2>Why Recalibrate?</h2>
              <p>
                In the United States, Stratux uses 978MHz UAT (Universal Access Transceiver) for ADS-B traffic. In
                Europe, however, we use:
              </p>
              <ul>
                <li>
                  <strong>1090MHz:</strong> Mode S ADS-B for commercial and IFR traffic
                </li>
                <li>
                  <strong>868MHz:</strong> FLARM and OGN for gliders and light aircraft
                </li>
              </ul>
              <p>
                The NooElec Nano 2 SDR dongles optimized for 978MHz need recalibration to work efficiently at 868MHz.
              </p>

              <h2>What You'll Need</h2>
              <ul>
                <li>NooElec Nano 2 SDR (978MHz variant)</li>
                <li>Windows or Linux PC</li>
                <li>rtl-sdr drivers and tools installed</li>
                <li>Known signal source at 868MHz (FLARM transmitter or signal generator)</li>
                <li>Basic command line knowledge</li>
              </ul>

              <h2>Step-by-Step Calibration</h2>

              <h3>1. Install RTL-SDR Tools</h3>
              <p>On Linux/Raspberry Pi:</p>
              <pre>
                <code>
                  sudo apt-get update{"\n"}
                  sudo apt-get install rtl-sdr
                </code>
              </pre>

              <h3>2. Find Your Device Serial</h3>
              <pre>
                <code>rtl_test</code>
              </pre>
              <p>Note the serial number of your NooElec dongle.</p>

              <h3>3. Test Current PPM Error</h3>
              <pre>
                <code>rtl_test -p</code>
              </pre>
              <p>This shows the current frequency offset in parts per million (PPM).</p>

              <h3>4. Run Calibration Tool</h3>
              <pre>
                <code>
                  kalibrate-rtl -s GSM900 -g 40 -e 60{"\n"}# or use a known 868MHz signal{"\n"}rtl_test -f 868000000 -p
                </code>
              </pre>

              <h3>5. Calculate PPM Correction</h3>
              <p>Based on the frequency offset, calculate your PPM correction value:</p>
              <pre>
                <code>PPM = (measured_freq - actual_freq) / actual_freq * 1000000</code>
              </pre>

              <h3>6. Apply Correction in Stratux</h3>
              <p>Edit the Stratux configuration:</p>
              <pre>
                <code>
                  sudo nano /etc/stratux.conf{"\n"}
                  {"\n"}# Add PPM correction for your OGN dongle:{"\n"}
                  "PPM": -15 # Replace with your calculated value
                </code>
              </pre>

              <h2>Verification</h2>
              <p>After applying the correction:</p>
              <ul>
                <li>Restart Stratux</li>
                <li>Check the web interface for OGN traffic reception</li>
                <li>Verify that you're receiving nearby FLARM/OGN targets</li>
                <li>Compare reception range with known good receivers</li>
              </ul>

              <h2>Advanced Tuning</h2>
              <p>For optimal performance:</p>
              <ul>
                <li>
                  <strong>Adjust Gain:</strong> Start with 40dB and adjust based on local RF environment
                </li>
                <li>
                  <strong>Filter Selection:</strong> Enable bias-tee if your dongle supports it
                </li>
                <li>
                  <strong>Cooling:</strong> Add heatsinks to prevent thermal drift
                </li>
                <li>
                  <strong>USB Extension:</strong> Use shielded USB extension to reduce interference
                </li>
              </ul>

              <h2>Typical PPM Values</h2>
              <p>Common correction values for NooElec Nano 2:</p>
              <ul>
                <li>Factory 978MHz dongles: -10 to -20 PPM for 868MHz</li>
                <li>Temperature compensated variants: -5 to +5 PPM</li>
                <li>Standard dongles: -30 to +30 PPM range possible</li>
              </ul>

              <h2>Conclusion</h2>
              <p>
                Proper calibration of your NooElec Nano 2 SDR significantly improves FLARM/OGN reception in European
                Stratux builds. Take the time to calibrate correctly for optimal safety and performance.
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
