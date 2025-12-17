import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, type LucideIcon } from "lucide-react"

interface PropertyCardProps {
  id: string
  title: string
  description: string
  link: string
  external?: boolean
  icon: LucideIcon
}

export function PropertyCard({ id, title, description, link, external = false, icon: Icon }: PropertyCardProps) {
  const CardWrapper = external ? "a" : Link
  const cardProps = external
    ? { href: link, target: "_blank", rel: "noopener noreferrer", title: `${title} - ${description.substring(0, 100)}` }
    : { href: link, title: `${title} besuchen - ${description.substring(0, 100)}` }

  return (
    <CardWrapper {...cardProps} className="block h-full group">
      <Card className="flex flex-col h-full bg-white border-border/60 shadow-sm hover:shadow-md transition-all duration-200 group-hover:border-primary/40">
        <CardHeader className="flex-1 pb-3">
          <div className="mb-4 flex items-center justify-center h-32">
            <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Icon className="w-12 h-12 text-primary" />
            </div>
          </div>
          <CardTitle className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0 pb-3">
          <CardDescription className="text-sm leading-relaxed text-muted-foreground">{description}</CardDescription>
        </CardContent>
        <CardFooter className="pt-0 pb-5">
          <span className="text-sm font-medium text-primary group-hover:underline flex items-center gap-1">
            Visit Site
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </span>
        </CardFooter>
      </Card>
    </CardWrapper>
  )
}
