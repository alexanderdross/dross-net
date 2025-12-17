import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import OptimizedImage from "@/components/optimized-image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

// Sample blog post data - in production this would come from a CMS or database
const blogPosts: Record<string, any> = {
  "ai-search-optimization-future": {
    title: "AI Search Optimization: Die Zukunft der Suchmaschinenoptimierung",
    excerpt: "Wie KI-gestützte Suche die SEO-Landschaft verändert und was das für Ihre Website-Strategie bedeutet.",
    category: "AI & Search",
    date: "2024-03-15",
    readTime: "8 min",
    image: "/assets/blog/ai-search-optimization.jpg",
    content: `
      <p>Die Suchmaschinenoptimierung befindet sich im größten Wandel seit der Einführung von Google. 
      Mit dem Aufkommen von KI-gestützten Suchmaschinen wie ChatGPT, Perplexity und Google's SGE 
      (Search Generative Experience) müssen wir unsere SEO-Strategien grundlegend überdenken.</p>

      <h2>Was ist Generative Engine Optimization (GEO)?</h2>
      <p>GEO ist die Weiterentwicklung von SEO für das Zeitalter der KI-gestützten Suche. Während 
      traditionelles SEO darauf abzielte, in den Top 10 der Suchergebnisse zu erscheinen, geht es bei 
      GEO darum, von KI-Modellen als vertrauenswürdige Quelle erkannt und zitiert zu werden.</p>

      <h2>Die wichtigsten Unterschiede zwischen SEO und GEO</h2>
      <ul>
        <li><strong>Zitatfähigkeit:</strong> Ihre Inhalte müssen so strukturiert sein, dass sie leicht 
        von KI-Modellen erfasst und zitiert werden können.</li>
        <li><strong>Autorität:</strong> E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) 
        wird noch wichtiger.</li>
        <li><strong>Strukturierte Daten:</strong> Schema.org Markup wird essentiell für die KI-Verständlichkeit.</li>
        <li><strong>Direktantworten:</strong> Content muss präzise Antworten auf spezifische Fragen liefern.</li>
      </ul>

      <h2>Praktische Schritte zur GEO-Optimierung</h2>
      <p>Basierend auf meiner Erfahrung mit über 2.000 Websites in 60+ Märkten empfehle ich:</p>
      <ol>
        <li>Implementieren Sie umfassende Schema.org Markup für alle Inhaltstypen</li>
        <li>Erstellen Sie FAQ-Bereiche mit präzisen, KI-freundlichen Antworten</li>
        <li>Bauen Sie Autoren-Autorität durch umfassende Autorenprofile auf</li>
        <li>Optimieren Sie für Featured Snippets und Knowledge Panels</li>
        <li>Fokussieren Sie auf tiefgehende, expertenzentrierte Inhalte</li>
      </ol>

      <h2>Die Zukunft der Suche</h2>
      <p>Die Integration von KI in Suchmaschinen ist nicht mehr aufzuhalten. Unternehmen, die jetzt 
      in GEO investieren, werden einen erheblichen Wettbewerbsvorteil haben, wenn AI-gestützte Suche 
      zum Standard wird.</p>
    `,
  },
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = blogPosts[slug]

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12">
        <article className="container mx-auto px-4 md:px-6 max-w-4xl">
          {/* Article Header */}
          <div className="mb-8">
            <Button asChild variant="ghost" className="mb-6 -ml-4">
              <Link href="/alexander/blog/" title="Zurück zur Blog-Übersicht">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Zurück zum Blog
              </Link>
            </Button>

            <Badge className="mb-4">{post.category}</Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-balance">{post.title}</h1>

            <div className="flex items-center gap-6 text-muted-foreground mb-8">
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {new Date(post.date).toLocaleDateString("de-DE", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative w-full h-[400px] rounded-lg overflow-hidden mb-12">
            <OptimizedImage
              src={post.image}
              alt={post.title}
              title={post.title}
              width={1200}
              height={400}
              loading="eager"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Content */}
          <div
            className="prose prose-lg max-w-none
              prose-headings:font-bold prose-headings:tracking-tight
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
              prose-p:text-foreground prose-p:leading-relaxed prose-p:mb-6
              prose-a:text-primary prose-a:no-underline hover:prose-a:underline
              prose-strong:text-foreground prose-strong:font-semibold
              prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6
              prose-ol:my-6 prose-ol:list-decimal prose-ol:pl-6
              prose-li:my-2"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Author Box */}
          <div className="mt-16 pt-8 border-t">
            <div className="flex items-start gap-4">
              <OptimizedImage
                src="/assets/alexander-dross-sm.jpg"
                alt="Alexander Dross"
                title="Alexander Dross - SEO Expert & Google Partner"
                width={80}
                height={80}
                className="rounded-full"
              />
              <div>
                <h3 className="font-semibold text-lg mb-2">Alexander Dross</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Google Partner & SEO-Experte mit über 15 Jahren Erfahrung. Spezialisiert auf AI Search Optimization,
                  internationale SEO-Strategien und digitale Transformation.
                </p>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = blogPosts[slug]

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: `${post.title} - Alexander Dross Blog`,
    description: post.excerpt,
    keywords: [post.category, "SEO", "AI Search", "Digital Transformation"],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  }
}
