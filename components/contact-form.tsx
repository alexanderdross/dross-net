"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Send } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function ContactForm({ defaultTopic }: { defaultTopic?: string }) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [acceptedPrivacy, setAcceptedPrivacy] = useState(false)
  const [selectedTopic, setSelectedTopic] = useState<string>("")
  const pathname = usePathname()

  useEffect(() => {
    // Check if topic is passed via URL parameter
    if (defaultTopic) {
      setSelectedTopic(defaultTopic)
      return
    }

    // Check document referrer to auto-select topic
    if (typeof window !== "undefined" && document.referrer) {
      const referrer = document.referrer

      if (referrer.includes("/air/")) {
        setSelectedTopic("dross-air")
      } else if (referrer.includes("/media/")) {
        setSelectedTopic("dross-media")
      } else if (referrer.includes("/alexander/")) {
        setSelectedTopic("portfolio")
      } else if (referrer.includes("dross-aviation")) {
        setSelectedTopic("dross-aviation")
      }
    }
  }, [defaultTopic])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!acceptedPrivacy) {
      alert("Please accept the Privacy Policy to continue.")
      return
    }

    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    alert("Thank you for your message! We'll get back to you soon.")
  }

  return (
    <Card className="bg-white shadow-sm border border-gray-200">
      <CardContent className="p-6 md:p-8">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium text-gray-700">
              Your Name <span className="text-red-500">*</span>
            </Label>
            <Input id="name" name="name" placeholder="John Doe" required className="bg-gray-50 border-gray-200" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium text-gray-700">
              Your Email <span className="text-red-500">*</span>
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="john@example.com"
              required
              className="bg-gray-50 border-gray-200"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="topic" className="text-sm font-medium text-gray-700">
              Topic
            </Label>
            <Select name="topic" value={selectedTopic} onValueChange={setSelectedTopic}>
              <SelectTrigger id="topic" className="bg-gray-50 border-gray-200 w-full">
                <SelectValue placeholder="Select a topic..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="portfolio">Alexander Dross – Portfolio & CV</SelectItem>
                <SelectItem value="dross-air">Dross:Air – Sightseeing Flights</SelectItem>
                <SelectItem value="dross-media">Dross:Media – SEO & GEO Agency</SelectItem>
                <SelectItem value="dross-aviation">Dross:Aviation – Store</SelectItem>
                <SelectItem value="other">Sonstiges / Misc</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="subject" className="text-sm font-medium text-gray-700">
              Subject
            </Label>
            <Input id="subject" name="subject" placeholder="How can we help?" className="bg-gray-50 border-gray-200" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-sm font-medium text-gray-700">
              Your Message <span className="text-red-500">*</span>
            </Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell us about your project or inquiry..."
              rows={6}
              required
              className="bg-gray-50 border-gray-200 resize-none"
            />
          </div>

          <div className="flex items-start space-x-2 pt-2">
            <Checkbox
              id="privacy"
              checked={acceptedPrivacy}
              onCheckedChange={(checked) => setAcceptedPrivacy(checked as boolean)}
              required
              className="mt-0.5"
            />
            <Label htmlFor="privacy" className="text-sm font-normal leading-relaxed cursor-pointer text-gray-700">
              I accept the{" "}
              <Link
                href="/privacy-policy/"
                className="text-primary underline hover:no-underline font-medium"
                title="Zur Datenschutzerklärung"
              >
                Privacy Policy
              </Link>{" "}
              <span className="text-red-500">*</span>
            </Label>
          </div>

          <div className="space-y-1 pt-2">
            <Label htmlFor="security" className="text-sm font-medium text-gray-700">
              Security Verification
            </Label>
            <div className="text-sm text-gray-600 italic">Loading security check...</div>
          </div>

          <Button
            type="submit"
            className="w-full bg-[#6BA4D6] hover:bg-[#5A93C5] text-white"
            size="lg"
            disabled={isSubmitting || !acceptedPrivacy}
          >
            <Send className="mr-2 h-4 w-4" />
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
