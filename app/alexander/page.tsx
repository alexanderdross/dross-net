import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Mail, MapPin, ExternalLink } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Alexander Dross - Global Capability Owner Web & AI Search Strategy",
  description:
    "Alexander Dross CV - Global Capability Owner for Web & AI Search Strategy at Boehringer Ingelheim. Google Partner certified SEO, GEO & AI Search Optimization Specialist with 15+ years experience.",
  keywords: [
    "Alexander Dross",
    "SEO Expert",
    "Search Strategy",
    "AI Search",
    "Digital Transformation",
    "Boehringer Ingelheim",
    "Google Partner",
  ],
}

export default function AlexanderPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Banner */}
        <section className="relative w-full h-[400px] overflow-hidden">
          <picture>
            <img
              src="/assets/alexander-banner.jpg"
              alt="Alexander Dross speaking at Customer Experience & Digital Excellence Summit 2018"
              title="Alexander Dross at Digital Excellence Summit"
              className="w-full h-full object-cover"
              width={1920}
              height={400}
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
          <div className="absolute bottom-8 left-0 right-0 text-center">
            <p className="text-sm text-muted-foreground uppercase tracking-wide mb-2">Curriculum Vitae</p>
            <h1 className="text-4xl md:text-5xl font-bold text-balance">Alexander Dross</h1>
          </div>
        </section>

        {/* Profile Section */}
        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Sidebar */}
              <div className="lg:col-span-1 space-y-6">
                {/* Profile Card */}
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="w-32 h-32 rounded-full overflow-hidden">
                        <picture>
                          <img
                            src="/assets/alexander-dross.webp"
                            alt="Alexander Dross - Global Capability Owner Web & AI Search Strategy Lead"
                            title="Alexander Dross Professional Photo"
                            className="w-full h-full object-cover"
                            width={128}
                            height={128}
                          />
                        </picture>
                      </div>
                      <div>
                        <h2 className="text-xl font-bold">Alexander Dross</h2>
                        <p className="text-sm text-muted-foreground mt-1">Global Capability Owner</p>
                        <p className="text-sm text-muted-foreground">Web & (AI-Powered) Search Strategy Lead</p>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        in one of the top-20 global Pharmaceutical Companies. B.Sc. Business Engineering. Google Partner
                        certified, SEO, GEO & AI Search Optimization Specialist.
                      </p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>Germany, but open to move</span>
                      </div>
                      <div className="flex flex-col gap-2 w-full">
                        <Button asChild variant="default" className="w-full">
                          <Link href="/contact/">
                            <Mail className="h-4 w-4 mr-2" />
                            alexander@dross.net
                          </Link>
                        </Button>
                        <Button asChild variant="outline" className="w-full bg-transparent">
                          <a href="https://linkedin.com/in/alexanderdross" target="_blank" rel="noopener noreferrer">
                            <Linkedin className="h-4 w-4 mr-2" />
                            LinkedIn Profile
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Core Skills */}
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold flex items-center gap-2 mb-4">Core Skills</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• SEO & GEO Strategy</li>
                      <li>• AI Search Optimization</li>
                      <li>• AWS Cloud Architecture</li>
                      <li>• Domain Strategy (18k+ domains)</li>
                      <li>• Digital Transformation</li>
                      <li>• Scrum PSPO II / PAL I</li>
                      <li>• n8n Workflow Automation</li>
                      <li>• Web Performance & CDN</li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Awards */}
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold flex items-center gap-2 mb-4">Awards</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Winner of Drupal Splash Award 2019 in Health Care category</li>
                      <li>• Best Bachelor's Thesis of the Year</li>
                      <li>• Enactus: Multiple National Cup Qualifications (2011-2014)</li>
                      <li>• Best Project Idea Award 2014 by Enactus Germany Alumni</li>
                      <li>• Founders Contest start2grow 2011 Dortmund</li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Volunteer Work */}
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold flex items-center gap-2 mb-4">Volunteer Work</h3>
                    <div className="space-y-4 text-sm">
                      <div>
                        <p className="font-medium">Open Source Contributor</p>
                        <p className="text-muted-foreground">The 'Stratux' Project</p>
                        <p className="text-xs text-muted-foreground">Jan. 2019 – Present</p>
                      </div>
                      <div>
                        <p className="font-medium">Member</p>
                        <p className="text-muted-foreground">Association of Enterprise Architects (AEA)</p>
                        <p className="text-xs text-muted-foreground">May 2022 – Present</p>
                      </div>
                      <div>
                        <p className="font-medium">Member & Open Source Contributor</p>
                        <p className="text-muted-foreground">Drupal Association</p>
                        <p className="text-xs text-muted-foreground">June 2018 – Present</p>
                      </div>
                      <div>
                        <p className="font-medium">Strategic SEO & IT</p>
                        <p className="text-muted-foreground">Build & Grow e.V</p>
                        <p className="text-xs text-muted-foreground">Jan. 2018 – Present</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Education */}
                <section>
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">Education</h2>
                  <div className="space-y-6">
                    <Card>
                      <CardContent className="pt-6">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <p className="text-sm text-muted-foreground">2009 – 2016</p>
                          </div>
                        </div>
                        <h3 className="text-lg font-semibold mb-2">
                          B.Sc. Business Engineering and Electrical Engineering
                        </h3>
                        <p className="text-sm text-primary mb-2">Bochum University of Applied Sciences</p>
                        <p className="text-sm text-muted-foreground italic">
                          Award for the best bachelor's thesis of the year: "Approach of a global domain strategy in
                          pharmaceutical industry"
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <p className="text-sm text-muted-foreground">2023</p>
                          </div>
                        </div>
                        <h3 className="text-lg font-semibold mb-2">Asset Strategy in a Digital World</h3>
                        <p className="text-sm text-primary mb-2">IESE Business School, Barcelona</p>
                        <p className="text-sm text-muted-foreground">
                          Completed intensive program covering digital density, value propositions, rapid prototyping,
                          and managing digital transformation.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                {/* Professional Experience */}
                <section>
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">Professional Experience</h2>
                  <div className="space-y-6">
                    <Card>
                      <CardContent className="pt-6">
                        <div className="flex justify-between items-start mb-2">
                          <p className="text-sm text-muted-foreground">Nov. 2021 – Present</p>
                        </div>
                        <h3 className="text-lg font-semibold mb-2">
                          Global Capability Owner - Web & AI Search Strategy
                        </h3>
                        <p className="text-sm text-primary mb-3">Boehringer Ingelheim International GmbH</p>
                        <p className="text-sm text-muted-foreground mb-3">
                          Part of the 'Go-to-Market' (GTM) team in Corporate. Responsible for Boehringer Ingelheim's
                          global Web Platform and AI-ready search infrastructure.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="secondary">2,000+ websites</Badge>
                          <Badge variant="secondary">60+ markets</Badge>
                          <Badge variant="secondary">35% cost reduction</Badge>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <div className="flex justify-between items-start mb-2">
                          <p className="text-sm text-muted-foreground">March 2020 – Present</p>
                        </div>
                        <h3 className="text-lg font-semibold mb-2">
                          Global Capability Lead - Search & AI Optimization Strategy
                        </h3>
                        <p className="text-sm text-primary mb-3">Boehringer Ingelheim International GmbH</p>
                        <p className="text-sm text-muted-foreground mb-3">
                          Leading both technical and business side of Boehringer Ingelheim's global Search Strategy,
                          evolving from traditional SEO to GEO.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="secondary">60+ markets</Badge>
                          <Badge variant="secondary">25% ROAS improvement</Badge>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <div className="flex justify-between items-start mb-2">
                          <p className="text-sm text-muted-foreground">Oct. 2019 – Nov. 2021</p>
                        </div>
                        <h3 className="text-lg font-semibold mb-2">
                          Global Process, Data & Platform Owner (Director Level)
                        </h3>
                        <p className="text-sm text-primary mb-3">Boehringer Ingelheim International GmbH</p>
                        <p className="text-sm text-muted-foreground mb-3">
                          Accountable for Search, Apps, 3rd Party Data & Paid Media Management across all digital
                          channels.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="secondary">Director level</Badge>
                          <Badge variant="secondary">3→15 team growth</Badge>
                          <Badge variant="secondary">45% efficiency gain</Badge>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <div className="flex justify-between items-start mb-2">
                          <p className="text-sm text-muted-foreground">Jan. 2008 – Present</p>
                        </div>
                        <h3 className="text-lg font-semibold mb-2">CEO & Founder</h3>
                        <p className="text-sm text-primary mb-3">Dross:Media Consulting</p>
                        <p className="text-sm text-muted-foreground mb-3">
                          Consulting, strategic and operative implementation of online branding, Inbound Marketing,
                          Social Media Marketing, and web development. Clients: McDonald's NRW, Bayer AG & Butterfly et
                          al.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="secondary">15+ years</Badge>
                          <Badge variant="secondary">Fortune 500 clients</Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                {/* Trusted By - Clients */}
                <section>
                  <h2 className="text-2xl font-bold mb-4">Clients & Partners</h2>
                  <p className="text-muted-foreground mb-6">
                    Pharmaceutical Companies, Universities, Municipal Facilities, Fast Food and Sports Equipment
                    Manufacturers, as well as sponsorship for NGOs.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                      { name: "Boehringer Ingelheim", url: "https://www.boehringer-ingelheim.com/" },
                      { name: "Bayer", url: "https://karriere.bayer.de/de/blog" },
                      { name: "McDonald's", url: "https://www.teampruente.de/" },
                      { name: "SAP", url: "https://www.sap.com/" },
                      { name: "Butterfly Tabletennis", url: "https://de.butterfly.tt/" },
                      { name: "TTBL", url: "https://ttbl.de/" },
                      { name: "Wingly", url: "https://wingly.io/" },
                      { name: "Enactus Germany", url: "https://www.enactus.de/" },
                      { name: "Kiron NGO", url: "https://kiron.ngo/en" },
                    ].map((client) => (
                      <Card key={client.name} className="hover:shadow-md transition-shadow">
                        <CardContent className="p-4">
                          <a
                            href={client.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-2"
                          >
                            {client.name}
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  <div className="mt-6">
                    <Button asChild variant="outline">
                      <Link href="/media/#referenzen/">
                        See all clients
                        <ExternalLink className="h-4 w-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
