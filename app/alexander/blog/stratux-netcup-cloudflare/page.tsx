import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Calendar, User, ArrowLeft } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"
import OptimizedImage from "@/components/optimized-image"

export const metadata: Metadata = {
  title: "Move from Strato to Netcup with Cloudflare Boosts Page Speed - Alexander Dross Blog",
  description:
    "Learn how migrating from Strato to Netcup's Webspace 2000 hosting and implementing Cloudflare significantly improved website performance and page speed scores.",
}

export default function ArticlePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <article className="w-full py-12">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            {/* Back Link */}
            <Link
              href="/alexander/blog/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8 transition-colors"
              title="Back to Blog"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>

            {/* Article Header */}
            <header className="mb-8">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary">General</Badge>
                <Badge variant="secondary">WebDev</Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Move from Strato to Netcup with Cloudflare Boosts Page Speed
              </h1>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Alexander Dross
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  September 22, 2025
                </span>
              </div>
            </header>

            {/* Featured Image */}
            <div className="mb-8 rounded-lg overflow-hidden">
              <OptimizedImage
                src="/assets/blog/cbdn-cloudflare.jpg"
                alt="CBDN Cloudflare Network Diagram"
                width={1200}
                height={600}
                className="w-full"
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <p className="lead text-xl text-muted-foreground mb-6">
                I recently helped a client move their WordPress website from Strato's WordPress Hosting Basic to
                Netcup's Webspace 2000 hosting plan. To make a long story short, it was the right decision and brought
                massive performance improvements.
              </p>

              <h2>The Challenge with Strato</h2>
              <p>
                Strato's WordPress Hosting Basic, while affordable, showed significant limitations in terms of page load
                speed and overall performance. The client's website was experiencing slow response times, which
                negatively impacted user experience and SEO rankings.
              </p>

              <h2>Migration to Netcup Webspace 2000</h2>
              <p>
                After careful evaluation of various hosting providers, we decided on Netcup's Webspace 2000 plan. The
                migration process was straightforward:
              </p>
              <ul>
                <li>Full backup of WordPress files and database</li>
                <li>DNS preparation and configuration</li>
                <li>File transfer via FTP/SFTP</li>
                <li>Database import and wp-config.php adjustments</li>
                <li>SSL certificate setup</li>
              </ul>

              <h2>Implementing Cloudflare CDN</h2>
              <p>To further optimize performance, we integrated Cloudflare's free CDN service. Cloudflare provides:</p>
              <ul>
                <li>Global content delivery network</li>
                <li>DDoS protection and security features</li>
                <li>Automatic image optimization</li>
                <li>Browser caching improvements</li>
                <li>HTTP/2 and HTTP/3 support</li>
              </ul>

              <h2>Performance Results</h2>
              <p>The results were impressive:</p>
              <ul>
                <li>
                  <strong>PageSpeed Score:</strong> Increased from 52 to 94 (mobile)
                </li>
                <li>
                  <strong>Time to First Byte (TTFB):</strong> Reduced from 1.2s to 0.3s
                </li>
                <li>
                  <strong>Largest Contentful Paint (LCP):</strong> Improved from 3.8s to 1.2s
                </li>
                <li>
                  <strong>Total Page Size:</strong> Reduced by 40% through Cloudflare optimization
                </li>
              </ul>

              <h2>Additional Optimizations</h2>
              <p>Beyond hosting and CDN, we implemented several WordPress-specific optimizations:</p>
              <ul>
                <li>Installed and configured WP Rocket caching plugin</li>
                <li>Optimized database tables and removed post revisions</li>
                <li>Lazy loading for images and videos</li>
                <li>Minification of CSS and JavaScript</li>
                <li>WebP image format conversion</li>
              </ul>

              <h2>Conclusion</h2>
              <p>
                The combination of Netcup's reliable hosting infrastructure and Cloudflare's CDN delivered exceptional
                performance improvements. The website now loads significantly faster, providing a better user experience
                and improved SEO rankings. If you're struggling with slow WordPress performance on Strato or similar
                shared hosting, this migration path is definitely worth considering.
              </p>
            </div>

            {/* Author Box */}
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
