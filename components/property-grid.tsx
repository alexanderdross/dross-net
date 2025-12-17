import { PropertyCard } from "@/components/property-card"
import { User, TrendingUp, Plane, Map, Handshake, MapPin, FileText } from "lucide-react"

const properties = [
  {
    id: "alexander-dross",
    title: "Alexander Dross",
    description: "B.Sc. Business Engineering, Google Partner certified, Digital Governance & SEM, SEO, SEA Specialist.",
    link: "/alexander/",
    icon: User,
  },
  {
    id: "dross-media",
    title: "Dross:Media",
    description: "SEO Agentur - Suchmaschinen Strategie & Optimierung direkt vom Search Lead eines Pharmakonzerns.",
    link: "/media/",
    icon: TrendingUp,
  },
  {
    id: "dross-aviation",
    title: "Dross:Aviation",
    description: "Stratux & OpenVario - the Open Source Anti-Collision System for private Aviation and Gliders.",
    link: "https://dross.net/aviation/",
    external: true,
    icon: Plane,
  },
  {
    id: "aip-aero",
    title: "AIP:Aero",
    description: "Open Library for Aeronautical Information Publication (AIP) VFR, IFR & Helipads.",
    link: "https://aip.aero/",
    external: true,
    icon: Map,
  },
  {
    id: "trade-aero",
    title: "Trade:Aero",
    description: "The premier marketplace for buying and selling airplanes, helicopters, and all types of aircraft.",
    link: "https://trade.aero/",
    external: true,
    icon: Handshake,
  },
  {
    id: "dross-air",
    title: "Dross:Air",
    description: "Local sightseeing flights in Rheinhessen and Rheingau, starting at Mainz Finthen Airport (EDFZ).",
    link: "/air/",
    icon: MapPin,
  },
  {
    id: "dross-blog",
    title: "Dross:Blog",
    description: "All about SEO, SEA, Web Performance, Tech, eVTOL, aviation and more.",
    link: "/alexander/blog/",
    icon: FileText,
  },
]

export function PropertyGrid() {
  return (
    <section id="properties" className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {properties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>
      </div>
    </section>
  )
}
