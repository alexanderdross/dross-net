"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Globe, Home } from "lucide-react"
import { MobileNav } from "@/components/mobile-nav"

export function Header() {
  const pathname = usePathname()

  const getHeaderConfig = () => {
    if (pathname.startsWith("/alexander/blog")) {
      return {
        title: "Alexander Dross",
        showNav: true,
        navLinks: [
          { href: "/alexander/", label: "HOME" },
          { href: "/alexander/#about", label: "ABOUT" },
          { href: "/alexander/#resume", label: "RESUME" },
          { href: "/alexander/#clients", label: "CLIENTS" },
          { href: "/alexander/blog/", label: "BLOG" },
          { href: "/contact/", label: "CONTACT" },
        ],
        badge: "Google Partner",
      }
    }

    if (pathname.startsWith("/alexander")) {
      return {
        title: "Alexander Dross",
        showNav: true,
        navLinks: [
          { href: "/alexander/", label: "HOME" },
          { href: "/alexander/#about", label: "ABOUT" },
          { href: "/alexander/#resume", label: "RESUME" },
          { href: "/alexander/#clients", label: "CLIENTS" },
          { href: "/alexander/blog/", label: "BLOG" },
          { href: "/contact/", label: "CONTACT" },
        ],
        badge: "Google Partner",
      }
    }

    if (pathname.startsWith("/media")) {
      return {
        title: "Dross:Media",
        showNav: true,
        navLinks: [
          { href: "/media/", label: "Dienstleistungen" },
          { href: "/media/#ki-geo", label: "KI & GEO" },
          { href: "/media/#erfolge", label: "Erfolge" },
          { href: "/media/#referenzen", label: "Referenzen" },
          { href: "/media/#faq", label: "FAQ" },
          { href: "/alexander/blog/", label: "Blog" },
          { href: "/contact/", label: "Kontakt" },
        ],
      }
    }

    if (pathname.startsWith("/air")) {
      return {
        title: "Dross:Air",
        showNav: true,
        navLinks: [
          { href: "/air/", label: "Rundflüge" },
          { href: "/air/standorte/", label: "Standorte" },
          { href: "/air/#flugzeuge", label: "Flugzeuge" },
          { href: "/air/#piloten", label: "Piloten" },
          { href: "/contact/", label: "Kontakt" },
        ],
      }
    }

    return {
      title: "Dross:Network",
      showNav: false,
      navLinks: [],
    }
  }

  const config = getHeaderConfig()

  const getBreadcrumbs = () => {
    if (pathname === "/") return null

    const parts = pathname.split("/").filter(Boolean)

    // Entry pages like /alexander/, /media/, /air/ should not have breadcrumbs
    if (parts.length === 1 && !["contact", "imprint", "privacy-policy"].includes(parts[0])) {
      return null
    }

    const breadcrumbs = [{ label: "Home", href: "/" }]

    if (parts[0] === "alexander" && parts[1] === "blog") {
      breadcrumbs.push({ label: "Alexander Dross", href: "/alexander/" })
      breadcrumbs.push({ label: "Blog", href: "/alexander/blog/" })
    } else if (parts[0] === "media" && parts[1] === "services") {
      breadcrumbs.push({ label: "Dross:Media", href: "/media/" })
      breadcrumbs.push({ label: "Dienstleistungen", href: "/media/#services" })
      if (parts[2]) {
        const serviceLabels: Record<string, string> = {
          "web-development": "Web Development",
          suchmaschinenoptimierung: "Suchmaschinenoptimierung (SEO)",
          "technical-seo": "Technisches SEO",
          "international-seo": "Internationales SEO",
          "local-seo": "Local SEO",
          "seo-audit": "SEO Audit",
          "website-relaunch": "Website Relaunch",
          "seo-strategy": "SEO Consulting & Strategie",
          "delete-google-entries": "Google Einträge löschen",
          "n8n-workflow-automation": "n8n Workflow Automation",
          "programmatic-seo": "Programmatic SEO",
          "ai-search": "AI Search",
        }
        breadcrumbs.push({ label: serviceLabels[parts[2]] || parts[2], href: `/media/services/${parts[2]}/` })
      }
    } else if (parts[0] === "media" && parts[1] === "ki-geo") {
      breadcrumbs.push({ label: "Dross:Media", href: "/media/" })
      breadcrumbs.push({ label: "KI & GEO Services", href: "/media/ki-geo/" })
    } else if (parts[0] === "air" && parts[1]) {
      breadcrumbs.push({ label: "Dross:Air", href: "/air/" })
      if (parts[1] === "standorte") {
        breadcrumbs.push({ label: "Standorte", href: "/air/standorte/" })
        if (parts[2]) {
          const locationLabels: Record<string, string> = {
            mainz: "Mainz-Finthen",
            frankfurt: "Frankfurt Egelsbach",
            bodensee: "Friedrichshafen",
          }
          breadcrumbs.push({ label: locationLabels[parts[2]] || parts[2], href: `/air/standorte/${parts[2]}/` })
        }
      } else if (parts[1] === "rundflug") {
        breadcrumbs.push({ label: "Rundflüge", href: "/air/#rundfluge" })
        if (parts[2]) {
          const flightLabels: Record<string, string> = {
            loreley: "Loreley-Felsen",
            "schloss-johannisberg": "Schloss Johannisberg",
            "frankfurter-skyline": "Frankfurter Skyline",
            "schloss-neuschwanstein": "Schloss Neuschwanstein",
            zugspitze: "Zugspitze",
            "insel-mainau": "Insel Mainau",
          }
          breadcrumbs.push({ label: flightLabels[parts[2]] || parts[2], href: `/air/rundflug/${parts[2]}/` })
        }
      }
    } else if (parts[0] === "contact" || parts[0] === "imprint" || parts[0] === "privacy-policy") {
      const labels: Record<string, string> = {
        contact: "Contact",
        imprint: "Imprint",
        "privacy-policy": "Privacy Policy",
      }
      breadcrumbs.push({ label: labels[parts[0]] || parts[0], href: `/${parts[0]}/` })
    }

    return breadcrumbs
  }

  const breadcrumbs = getBreadcrumbs()

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white border-b shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-14 items-center justify-between">
            <Link
              href={
                pathname.startsWith("/alexander")
                  ? "/alexander/"
                  : pathname.startsWith("/media")
                    ? "/media/"
                    : pathname.startsWith("/air")
                      ? "/air/"
                      : "/"
              }
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              title={`${config.title} - Zurück zur ${config.title} Homepage`}
            >
              <Globe className="h-5 w-5 text-primary" />
              <span className="text-foreground font-medium">{config.title}</span>
              {config.badge && (
                <span className="ml-2 px-2 py-0.5 text-xs rounded bg-blue-50 text-primary border border-primary/20">
                  {config.badge}
                </span>
              )}
            </Link>

            {config.showNav && (
              <>
                {/* Desktop navigation */}
                <nav className="hidden md:flex items-center gap-6 text-sm">
                  {config.navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors uppercase tracking-wide"
                      title={`${link.label} - ${config.title}`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>

                {/* Mobile navigation */}
                <MobileNav navLinks={config.navLinks} sectionTitle={config.title} />
              </>
            )}
          </div>
        </div>
      </header>

      {breadcrumbs && breadcrumbs.length > 1 && (
        <div className="w-full bg-gray-50 border-b">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="py-3">
              <nav className="flex items-center gap-2 text-sm overflow-x-auto">
                <div className="flex items-center gap-2 text-gray-600 whitespace-nowrap min-w-max">
                  <Home className="h-4 w-4 flex-shrink-0" />
                  {breadcrumbs.map((crumb, index) => (
                    <div key={crumb.href} className="flex items-center gap-2">
                      {index > 0 && <span className="text-gray-400">›</span>}
                      {index === breadcrumbs.length - 1 ? (
                        <span className="text-gray-800 font-medium">{crumb.label}</span>
                      ) : (
                        <Link
                          href={crumb.href}
                          className="text-gray-600 hover:text-primary transition-colors"
                          title={`Navigieren zu ${crumb.label}`}
                        >
                          {crumb.label}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
