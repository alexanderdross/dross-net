import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Calendar, User, ArrowLeft } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"
import OptimizedImage from "@/components/optimized-image"

export const metadata: Metadata = {
  title: "Stratux Firmware 1.6r1-eu026 GPS issue and fix - Alexander Dross Blog",
  description:
    "Current Stratux 1.6r1-eu026 Framework version contains a GPS bug affecting T-Motion and T-Beam modules. Learn about the issue and temporary fix.",
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
                Stratux Firmware 1.6r1-eu026 GPS issue and fix
              </h1>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Alexander Dross
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  October 24, 2021
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
                Current Stratux 1.6r1-eu026 Framework version contains a GPS bug. When connecting Stratux to a T-Motion
                or T-Beam the web interface shows only partial GPS data or no fix at all.
              </p>

              <h2>The GPS Bug</h2>
              <p>Users of Stratux 1.6r1-eu026 with certain GPS modules are experiencing:</p>
              <ul>
                <li>GPS showing as "connected" but no position fix</li>
                <li>Intermittent satellite count updates</li>
                <li>Missing HDOP and accuracy values</li>
                <li>Altitude readings stuck at zero</li>
                <li>No GPS coordinates passed to EFB apps</li>
              </ul>

              <h2>Affected Hardware</h2>
              <p>The bug primarily affects:</p>
              <ul>
                <li>
                  <strong>T-Motion modules:</strong> ESP32-based GPS with integrated motion sensor
                </li>
                <li>
                  <strong>T-Beam modules:</strong> ESP32 + GPS + LoRa combination boards
                </li>
                <li>
                  <strong>Some u-blox M8N modules:</strong> When using specific firmware versions
                </li>
              </ul>

              <h2>Root Cause</h2>
              <p>
                The issue stems from changes in the GPS serial port handling code. The firmware now expects GPS data in
                a specific format that some modules don't provide correctly. Specifically:
              </p>
              <ul>
                <li>NMEA sentence parsing has stricter validation</li>
                <li>Timing requirements for GPS data were tightened</li>
                <li>Buffer handling changed, causing data loss on slower modules</li>
              </ul>

              <h2>Temporary Workaround</h2>
              <p>Until the official fix is released, you can apply this workaround:</p>

              <h3>Method 1: Revert GPS Driver</h3>
              <pre>
                <code>
                  ssh pi@192.168.10.1{"\n"}cd /root/stratux/main{"\n"}sudo ./update.sh eu025
                </code>
              </pre>
              <p>This reverts just the GPS handling code to the working eu025 version.</p>

              <h3>Method 2: Manual Configuration</h3>
              <pre>
                <code>
                  sudo nano /etc/stratux.conf{"\n"}
                  {"\n"}# Add these lines:{"\n"}
                  "GPSBaud": 9600{"\n"}
                  "GPSProtocol": "NMEA"{"\n"}
                  "GPSTimeout": 10
                </code>
              </pre>

              <h3>Method 3: Use External GPS</h3>
              <p>As a temporary solution, use a known-good GPS module:</p>
              <ul>
                <li>VK-172 USB GPS (plug and play)</li>
                <li>BU-353S4 (widely compatible)</li>
                <li>Older u-blox M7N/M8N modules</li>
              </ul>

              <h2>Community Response</h2>
              <p>
                The Stratux development team has acknowledged the issue. A fix is being tested and should be included in
                the next firmware release (eu027). In the meantime, reverting to eu025 or using a different GPS module
                is recommended.
              </p>

              <h2>Verification After Fix</h2>
              <p>To verify GPS is working correctly:</p>
              <ol>
                <li>Check web interface shows "GPS Connected"</li>
                <li>Verify satellite count is updating (4+ for fix)</li>
                <li>Confirm latitude/longitude display correctly</li>
                <li>Check altitude reads accurately</li>
                <li>Verify EFB apps receive GPS data via GDL90</li>
                <li>Test AHRS if using GPS for position reference</li>
              </ol>

              <h2>Reporting Issues</h2>
              <p>If you encounter GPS problems:</p>
              <ul>
                <li>Note your exact GPS module model and firmware</li>
                <li>Collect system logs via Settings → System</li>
                <li>Check dmesg output for USB errors</li>
                <li>Report on the Stratux GitHub issues page</li>
              </ul>

              <h2>Conclusion</h2>
              <p>
                While this GPS bug is frustrating, the workarounds allow continued operation until an official fix is
                released. The Stratux community's quick response demonstrates the value of active open-source
                development and testing.
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
