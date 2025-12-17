import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, User } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog - Alexander Dross | SEO, AI Search & Digital Transformation",
  description:
    "Insights on Web Optimization & Performance, Aviation Technology, and Stratux Open-Source Anti-Collision Systems.",
  keywords: ["Blog", "Web Optimization", "Aviation Technology", "Stratux", "Raspberry Pi", "WebDev", "Technical SEO"],
}

// Blog posts with actual content from the original site
const blogPosts = [
  {
    slug: "stratux-netcup-cloudflare",
    title: "Move from Strato to Netcup with Cloudflare Boosts Page Speed",
    excerpt:
      "I recently helped a client move their WordPress website from Strato's WordPress Hosting Basic to Netcup's Webspace 2000 hosting plan. To make...",
    category: "General",
    categories: ["General", "WebDev"],
    date: "September 22, 2025",
    author: "Alexander Dross",
    image: "/assets/blog/cbdn-cloudflare.jpg",
  },
  {
    slug: "stratux-hotfix-ogn-reception",
    title: "Stratux Hotfix release for continued OGN reception",
    excerpt:
      "Stratux Europe Edition 1.6r1-eu029-hotfix has been released due to OGN related protocol changes. Anyone using OGN reception v...",
    category: "Stratux",
    categories: ["Stratux"],
    date: "March 24, 2024",
    author: "Alexander Dross",
    image: "/assets/blog/stratux-logo.jpg",
  },
  {
    slug: "stratux-europe-firmware",
    title: "New Stratux EU/US Firmware Edition 1.6r1-eu029 has been released",
    excerpt:
      "Finally, the new Stratux EU/US Firmware Edition 1.6r1-eu029 has been released. This one can even be installed OTA, without having to re-flash the S...",
    category: "Stratux",
    categories: ["Aviation", "Raspberry Pi", "Stratux"],
    date: "July 30, 2023",
    author: "Alexander Dross",
    image: "/assets/blog/stratux-update.jpg",
  },
  {
    slug: "luftfahrthandbuch-aip-vfr-deutschland",
    title: "Verbesserungswürdig: Luftfahrthandbuch AIP VFR Deutschland nun kostenlos",
    excerpt:
      "Das Luftfahrthandbuch AIP VFR Deutschland steht als Basis-Version endlich kostenlos zur Verfügung. Da die Website keine Suchmaske bietet, haben...",
    category: "Aviation",
    categories: ["Aviation"],
    date: "5. Januar 2023",
    author: "Alexander Dross",
    image: "/assets/blog/aip-vfr-deutschland.jpg",
  },
  {
    slug: "fix-stratux-gy91-ahrs",
    title: "Fix Stratux GY91I2C address AHRS issue",
    excerpt:
      "Since Stratux firmware version v1.6r1-eu028 the AHRS flight sensor (Attitude Heading Reference System) is recognized by using an i...",
    category: "Stratux",
    categories: ["Aviation", "Raspberry Pi", "Stratux"],
    date: "October 10, 2022",
    author: "Alexander Dross",
    image: "/assets/blog/stratux-logo.jpg",
  },
  {
    slug: "calibrate-nooelec-nano2-sdr",
    title: "How to calibrate NooElec Nano 2 SDRs from 978MHz to 868MHz?",
    excerpt:
      "Tutorial for European Stratux users on recalibrating NooElec Nano 2 Software Defined Radio receivers. Transform your 978MHz UAT receiver into an...",
    category: "Aviation",
    categories: ["Aviation", "Raspberry Pi", "Stratux", "Tech"],
    date: "February 16, 2022",
    author: "Alexander Dross",
    image: "/assets/blog/stratux-logo.jpg",
  },
  {
    slug: "stratux-europe-firmware-eu027",
    title: "New Stratux EU Firmware 1.6r1-eu027 has been released",
    excerpt:
      "Stratux Europe Edition 1.6r1-eu027 has been released. Major update with lots of changes, so no update via .sh file – you will have to re-flash the...",
    category: "Stratux",
    categories: ["Aviation", "Raspberry Pi", "Stratux"],
    date: "November 20, 2021",
    author: "Alexander Dross",
    image: "/assets/blog/stratux-update.jpg",
  },
  {
    slug: "stratux-firmware-gps-bug",
    title: "Stratux Firmware 1.6r1-eu026 GPS issue and fix",
    excerpt:
      "Current Stratux 1.6r1-eu026 Framework version contains a GPS bug. When connecting Stratux to a T-Motion or T-Beam the web interface shows onl...",
    category: "Stratux",
    categories: ["Aviation", "Raspberry Pi", "Stratux", "Tech"],
    date: "October 24, 2021",
    author: "Alexander Dross",
    image: "/assets/blog/stratux-logo.jpg",
  },
  {
    slug: "stratux-europe-firmware-eu026",
    title: "Stratux Europe Edition 1.6r1-eu026 has been released",
    excerpt:
      "A new firmware version for Stratux Europe has been released by @b3nn0. You can download the latest version and find flashing instructions on ho...",
    category: "Stratux",
    categories: ["Raspberry Pi", "Stratux", "Tech"],
    date: "September 5, 2021",
    author: "Alexander Dross",
    image: "/assets/blog/stratux-logo.jpg",
  },
]

const categories = ["Aviation", "General", "Raspberry Pi", "Stratux", "Tech", "WebDev"]

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="flex flex-col items-center text-center space-y-4 mb-8">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Blog</h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
                Insights on Web Optimization & Performance, Aviation Technology, and{" "}
                <Link
                  href="https://stratux.me/"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Stratux Open-Source ADS-B Receiver Project"
                >
                  Stratux
                </Link>{" "}
                Open-Source Anti-Collision Systems.
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant="secondary"
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {category}
                </Badge>
              ))}
            </div>

            {/* Blog Posts Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/alexander/blog/${post.slug}/`}
                  className="block group"
                  title={`Read article: ${post.title}`}
                >
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full">
                    <div className="relative h-48 overflow-hidden bg-muted">
                      <picture>
                        <source srcSet={`${post.image}?format=webp 600w`} type="image/webp" />
                        <img
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          title={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                          width={600}
                          height={300}
                        />
                      </picture>
                    </div>
                    <CardHeader className="pb-3">
                      <div className="flex flex-wrap gap-2 mb-2">
                        {post.categories.map((cat) => (
                          <Badge key={cat} variant="secondary" className="text-xs">
                            {cat}
                          </Badge>
                        ))}
                      </div>
                      <CardTitle className="text-lg leading-tight line-clamp-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <CardDescription className="text-sm leading-relaxed line-clamp-3 mb-4">
                        {post.excerpt}
                      </CardDescription>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <User className="h-3 w-3" />
                          {post.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {post.date}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
