"use client"

import Link from "next/link"
import { Github, Linkedin, Facebook, Instagram } from "lucide-react"
import { usePathname } from "next/navigation"

const footerLinks = [
  { label: "Alexander Dross", href: "/alexander/", title: "Alexander Dross - CV & Portfolio" },
  { label: "Dross:Media", href: "/media/", title: "Dross:Media - SEO & Web Development Agentur" },
  { label: "Blog", href: "/alexander/blog/", title: "Dross:Blog - SEO, Tech & Aviation" },
  { label: "Dross:Air", href: "/air/", title: "Dross:Air - Rundflüge & Sightseeing Flüge" },
  { label: "Dross:Aviation", href: "https://dross.net/aviation/", title: "Dross:Aviation - Anti-Collision System" },
  { label: "AIP:Aero", href: "https://aip.aero/", title: "AIP:Aero - Aeronautical Information Library" },
  { label: "Trade:Aero", href: "https://trade.aero/", title: "Trade:Aero - Aircraft Marketplace" },
]

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy/", title: "Datenschutzerklärung - Dross:Network" },
  { label: "Contact", href: "/contact/", title: "Kontakt - Nachricht an Dross:Network senden" },
  { label: "Imprint", href: "/imprint/", title: "Impressum - Rechtliche Informationen" },
]

const socialLinks = [
  { icon: Github, href: "https://github.com/dross-net", label: "GitHub", title: "Dross:Network auf GitHub" },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/alexanderdross",
    label: "LinkedIn",
    title: "Alexander Dross auf LinkedIn",
  },
  { icon: Facebook, href: "https://facebook.com/alexdross", label: "Facebook", title: "Alexander Dross auf Facebook" },
  { icon: Instagram, href: "https://instagram.com/drossair", label: "Instagram", title: "Dross:Air auf Instagram" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()
  const pathname = usePathname?.() || "/"

  const getSectionInfo = () => {
    if (pathname.startsWith("/alexander")) {
      return { name: "Alexander Dross", link: "/alexander/", title: "Alexander Dross - Homepage" }
    }
    if (pathname.startsWith("/media")) {
      return { name: "Dross:Media", link: "/media/", title: "Dross:Media - SEO Agentur Homepage" }
    }
    if (pathname.startsWith("/air")) {
      return { name: "Dross:Air", link: "/air/", title: "Dross:Air - Rundflüge Homepage" }
    }
    return { name: "Dross:Network", link: "/", title: "Dross:Network - Homepage" }
  }

  const sectionInfo = getSectionInfo()

  return (
    <footer className="w-full border-t bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center gap-4">
          <div className="text-center mb-2">
            <Link
              href={sectionInfo.link}
              className="text-lg font-semibold hover:text-primary transition-colors"
              title={sectionInfo.title}
            >
              {sectionInfo.name}
            </Link>
          </div>

          <nav className="flex flex-wrap justify-center items-center gap-2 text-sm text-muted-foreground">
            {footerLinks.map((link, index) => (
              <>
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-foreground transition-colors"
                  title={link.title}
                >
                  {link.label}
                </Link>
                {index < footerLinks.length - 1 && <span className="text-muted-foreground">|</span>}
              </>
            ))}
          </nav>

          <nav className="flex flex-wrap justify-center items-center gap-2 text-sm text-muted-foreground">
            {legalLinks.map((link, index) => (
              <>
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-foreground transition-colors"
                  title={link.title}
                >
                  {link.label}
                </Link>
                {index < legalLinks.length - 1 && <span className="text-muted-foreground">|</span>}
              </>
            ))}
          </nav>

          <div className="flex gap-3">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                aria-label={social.label}
                title={social.title}
              >
                <social.icon className="h-4 w-4" />
              </Link>
            ))}
          </div>

          <div className="text-center text-sm text-muted-foreground">
            <p>© {currentYear} All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
