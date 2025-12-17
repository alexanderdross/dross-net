import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { Mail } from "lucide-react"

export const metadata = {
  title: "Contact - Dross:Network | Get in Touch",
  description: "Get in touch with the Dross:Network team. We'd love to hear from you. Email us at mail@dross.net",
}

export default function ContactPage({
  searchParams,
}: {
  searchParams: { topic?: string }
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <div className="text-center mb-8 md:mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-blue-100 text-primary mb-4 md:mb-6">
                <Mail className="h-8 w-8 md:h-10 md:w-10" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3 md:mb-4 text-balance">
                Send us a message!
              </h1>
              <p className="text-base md:text-lg text-gray-600 mb-2 text-balance">
                We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
              </p>
              <p className="text-sm text-gray-600">
                Or email us directly at:{" "}
                <a
                  href="mailto:mail@dross.net"
                  className="text-primary underline hover:no-underline"
                  title="E-Mail direkt an mail@dross.net senden"
                >
                  mail@dross.net
                </a>
              </p>
            </div>

            <ContactForm defaultTopic={searchParams.topic} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
