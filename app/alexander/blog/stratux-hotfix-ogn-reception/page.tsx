import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Calendar, User, ArrowLeft } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"
import OptimizedImage from "@/components/optimized-image"

export const metadata: Metadata = {
  title: "Stratux Hotfix release for continued OGN reception - Alexander Dross Blog",
  description:
    "Stratux Europe Edition 1.6r1-eu029-hotfix has been released due to OGN related protocol changes. Learn about the updates for continued OGN reception.",
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
                <Badge variant="secondary">Stratux</Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Stratux Hotfix release for continued OGN reception
              </h1>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Alexander Dross
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  March 24, 2024
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
                Stratux Europe Edition 1.6r1-eu029-hotfix has been released due to OGN related protocol changes. Anyone
                using OGN reception via Stratux should update immediately to maintain functionality.
              </p>

              <h2>What Changed in OGN Protocol</h2>
              <p>
                The Open Glider Network (OGN) recently implemented protocol changes that affected how Stratux devices
                receive and decode OGN traffic. Without this hotfix, Stratux units would no longer be able to properly
                receive glider and light aircraft traffic via OGN.
              </p>

              <h2>Hotfix Details</h2>
              <p>This hotfix addresses:</p>
              <ul>
                <li>Updated OGN protocol decoder to match latest specifications</li>
                <li>Fixed frequency offset issues affecting OGN reception</li>
                <li>Improved signal processing for better range and reliability</li>
                <li>Compatibility updates for SDR hardware configurations</li>
              </ul>

              <h2>How to Update</h2>
              <p>Updating to the hotfix is straightforward:</p>
              <ol>
                <li>Connect to your Stratux WiFi network</li>
                <li>Access the web interface at http://192.168.10.1</li>
                <li>Navigate to Settings → Software Update</li>
                <li>Click "Check for Updates" and install eu029-hotfix</li>
                <li>Reboot your Stratux after installation completes</li>
              </ol>

              <h2>Who Should Update</h2>
              <p>
                This update is critical for all European Stratux users who rely on OGN reception for glider and light
                aircraft traffic awareness. If you fly in areas with active OGN coverage, updating to this hotfix is
                strongly recommended.
              </p>

              <h2>Conclusion</h2>
              <p>
                Thanks to the Stratux Europe development team for quickly responding to the OGN protocol changes. This
                hotfix ensures continued compatibility and reliable traffic reception for the safety-critical functions
                that Stratux provides to the general aviation community.
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
