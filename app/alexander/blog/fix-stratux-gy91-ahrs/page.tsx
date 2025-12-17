import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Calendar, User, ArrowLeft } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"
import OptimizedImage from "@/components/optimized-image"

export const metadata: Metadata = {
  title: "Fix Stratux GY91 I2C address AHRS issue - Alexander Dross Blog",
  description:
    "Learn how to fix the AHRS recognition issue with GY91 sensors in Stratux firmware v1.6r1-eu028 by configuring the correct I2C address.",
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
                Fix Stratux GY91 I2C address AHRS issue
              </h1>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Alexander Dross
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  October 10, 2022
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
                Since Stratux firmware version v1.6r1-eu028 the AHRS flight sensor (Attitude Heading Reference System)
                is recognized by using an I2C address scan. This can cause issues with certain GY91 chips.
              </p>

              <h2>The Problem</h2>
              <p>
                Some GY91 AHRS modules use different I2C addresses than the default configuration in Stratux expects.
                When the firmware scans for AHRS devices, it may not detect your GY91 sensor correctly, resulting in:
              </p>
              <ul>
                <li>No AHRS data displayed in the web interface</li>
                <li>Missing pitch and roll information</li>
                <li>Altitude and orientation data unavailable</li>
                <li>EFB apps not receiving attitude information</li>
              </ul>

              <h2>Understanding I2C Addresses</h2>
              <p>The GY91 module combines two sensors:</p>
              <ul>
                <li>
                  <strong>MPU9250:</strong> 9-axis IMU (accelerometer, gyroscope, magnetometer)
                </li>
                <li>
                  <strong>BMP280:</strong> Barometric pressure and temperature sensor
                </li>
              </ul>
              <p>Depending on the manufacturer, these chips may use different I2C addresses:</p>
              <ul>
                <li>MPU9250: 0x68 or 0x69</li>
                <li>BMP280: 0x76 or 0x77</li>
              </ul>

              <h2>The Solution</h2>
              <p>To fix the AHRS recognition issue, you need to manually configure the I2C addresses:</p>

              <h3>Step 1: Connect via SSH</h3>
              <pre>
                <code>ssh pi@192.168.10.1{"\n"}Password: raspberry</code>
              </pre>

              <h3>Step 2: Scan for I2C Devices</h3>
              <pre>
                <code>sudo i2cdetect -y 1</code>
              </pre>
              <p>This will show all connected I2C devices and their addresses.</p>

              <h3>Step 3: Edit Stratux Configuration</h3>
              <pre>
                <code>sudo nano /etc/stratux.conf</code>
              </pre>
              <p>Update the AHRS section with your detected addresses:</p>
              <pre>
                <code>
                  {`{
  "IMUMapping": [
    {"MPU9250": "0x69"},
    {"BMP280": "0x76"}
  ]
}`}
                </code>
              </pre>

              <h3>Step 4: Restart Stratux</h3>
              <pre>
                <code>sudo reboot</code>
              </pre>

              <h2>Verification</h2>
              <p>After reboot, check the Stratux web interface:</p>
              <ul>
                <li>Navigate to Settings → Hardware</li>
                <li>Verify AHRS is detected</li>
                <li>Check that pitch and roll values are updating</li>
                <li>Confirm altitude readings are accurate</li>
              </ul>

              <h2>Alternative: Use Setup Script</h2>
              <p>For easier configuration, use the community-developed setup script:</p>
              <pre>
                <code>
                  cd /tmp{"\n"}
                  wget https://stratux.me/scripts/ahrs-fix.sh{"\n"}
                  chmod +x ahrs-fix.sh{"\n"}
                  sudo ./ahrs-fix.sh
                </code>
              </pre>

              <h2>Conclusion</h2>
              <p>
                While the automatic I2C scanning is convenient for most users, some GY91 modules require manual
                configuration. This guide should help you get your AHRS working properly with any GY91 variant.
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
