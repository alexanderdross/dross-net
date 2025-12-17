"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home } from "lucide-react"

export function Breadcrumbs() {
  const pathname = usePathname()

  const getBreadcrumbs = () => {
    if (pathname === "/") return null

    const parts = pathname.split("/").filter(Boolean)
    const breadcrumbs = [{ label: "Home", href: "/" }]

    if (parts[0] === "alexander" && parts[1] === "blog") {
      breadcrumbs.push({ label: "Alexander Dross", href: "/alexander/" })
      breadcrumbs.push({ label: "Blog", href: "/alexander/blog/" })
    } else if (parts[0]) {
      const labels: Record<string, string> = {
        alexander: "Alexander Dross",
        media: "Dross:Media",
        air: "Dross:Air",
        contact: "Contact",
        imprint: "Imprint",
        "privacy-policy": "Privacy Policy",
      }
      breadcrumbs.push({ label: labels[parts[0]] || parts[0], href: `/${parts[0]}/` })
    }

    return breadcrumbs
  }

  const breadcrumbs = getBreadcrumbs()

  if (!breadcrumbs || breadcrumbs.length <= 1) return null

  return (
    <div className="w-full bg-gray-50 border-b border-gray-200">
      <div className="container px-4 py-3">
        <nav className="overflow-x-auto">
          <div className="flex items-center gap-2 text-sm text-gray-600 whitespace-nowrap min-w-max">
            <Home className="h-3.5 w-3.5 flex-shrink-0" />
            {breadcrumbs.map((crumb, index) => (
              <div key={crumb.href} className="flex items-center gap-2">
                {index > 0 && <span className="text-gray-400">›</span>}
                {index === breadcrumbs.length - 1 ? (
                  <span className="text-gray-900 font-medium">{crumb.label}</span>
                ) : (
                  <Link href={crumb.href} className="hover:text-primary transition-colors">
                    {crumb.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </nav>
      </div>
    </div>
  )
}
