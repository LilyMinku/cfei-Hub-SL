"use client"

import type React from "react"
import Link from "next/link"
import { Leaf, Mail, Phone, MapPin, Send } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-[#1a3d2e] via-[#0f4d3a] to-[#0a362a] text-white">
        <div className="absolute inset-0 bg-[url('/african-landscape-with-mountains-and-sky.jpg')] bg-cover bg-center opacity-15" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-16 text-center">
          <div className="inline-flex items-center gap-2 mb-6 text-emerald-300">
            <Mail className="w-6 h-6" />
            <span className="text-sm font-medium tracking-wide uppercase">Get In Touch</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance leading-tight">Contact Us</h1>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto text-pretty leading-relaxed">
            Let's work together to build a sustainable energy future for Sierra Leone
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-2 border-[#0f4d3a]/20 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-[#0f4d3a]" />
                </div>
                <h3 className="text-xl font-bold mb-3">Office Location</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Office of the President
                  <br />
                  State House
                  <br />
                  Freetown, Sierra Leone
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#0f4d3a]/20 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-[#0f4d3a]" />
                </div>
                <h3 className="text-xl font-bold mb-3">Email Address</h3>
                <p className="text-muted-foreground leading-relaxed">
                  info@cfih-sl.org
                  <br />
                  partnerships@cfih-sl.org
                  <br />
                  media@cfih-sl.org
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#0f4d3a]/20 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-[#0f4d3a]" />
                </div>
                <h3 className="text-xl font-bold mb-3">Phone Numbers</h3>
                <p className="text-muted-foreground leading-relaxed">
                  +232 XX XXX XXXX
                  <br />
                  +232 XX XXX XXXX
                  <br />
                  (Monday - Friday, 9AM - 5PM)
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Whether you're interested in partnerships, project collaboration, or have questions about our work, we'd
                love to hear from you.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="organization" className="block text-sm font-medium mb-2">
                    Organization
                  </label>
                  <Input
                    id="organization"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="Your organization name"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="What is this regarding?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us more about your inquiry..."
                    rows={6}
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-[#0f4d3a] hover:bg-[#0a362a]">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Additional Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Partnership Opportunities</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                We welcome partnerships with organizations committed to climate action and sustainable energy
                development in Sierra Leone.
              </p>

              <div className="space-y-6">
                <Card className="border-2 border-[#0f4d3a]/20">
                  <CardContent className="p-6">
                    <h3 className="font-bold mb-2">For Investors & Financiers</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                      Explore investment opportunities in our climate and energy project pipeline.
                    </p>
                    <Link
                      href="mailto:partnerships@cfih-sl.org"
                      className="text-[#0f4d3a] font-medium text-sm hover:underline"
                    >
                      partnerships@cfih-sl.org
                    </Link>
                  </CardContent>
                </Card>

                <Card className="border-2 border-[#0f4d3a]/20">
                  <CardContent className="p-6">
                    <h3 className="font-bold mb-2">For Development Partners</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                      Collaborate on capacity building, technical assistance, and program implementation.
                    </p>
                    <Link
                      href="mailto:partnerships@cfih-sl.org"
                      className="text-[#0f4d3a] font-medium text-sm hover:underline"
                    >
                      partnerships@cfih-sl.org
                    </Link>
                  </CardContent>
                </Card>

                <Card className="border-2 border-[#0f4d3a]/20">
                  <CardContent className="p-6">
                    <h3 className="font-bold mb-2">For Media & Press</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                      Request interviews, press releases, and media materials about our work.
                    </p>
                    <Link
                      href="mailto:media@cfih-sl.org"
                      className="text-[#0f4d3a] font-medium text-sm hover:underline"
                    >
                      media@cfih-sl.org
                    </Link>
                  </CardContent>
                </Card>

                <Card className="border-2 border-[#0f4d3a]/20">
                  <CardContent className="p-6">
                    <h3 className="font-bold mb-2">For General Inquiries</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                      Questions about our programs, events, or how to get involved.
                    </p>
                    <Link href="mailto:info@cfih-sl.org" className="text-[#0f4d3a] font-medium text-sm hover:underline">
                      info@cfih-sl.org
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Visit Us</h2>
            <p className="text-lg text-muted-foreground">Located at the heart of governance in Freetown</p>
          </div>

          <div className="aspect-video bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-2xl flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-[#0f4d3a] mx-auto mb-4" />
              <p className="text-muted-foreground">
                Office of the President, State House
                <br />
                Freetown, Sierra Leone
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0f4d3a] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Leaf className="w-16 h-16 mx-auto mb-6 text-emerald-300" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Let's Build the Future Together</h2>
          <p className="text-xl text-emerald-100 mb-10 text-pretty leading-relaxed">
            Join us in transforming Sierra Leone's energy landscape and creating lasting climate resilience.
          </p>
        </div>
      </section>
    </div>
  )
}
